"use client";
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById, workersByCategory, categories, profileImage } from '@/data/workers';
import './jobs-category.css';

export default function JobsCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;

  const categoryData = getCategoryById(category);
  const workers = workersByCategory[category] || [];
  const recommendedCategories = categories.filter((c) => c.id !== category).slice(0, 4);

  if (!categoryData) {
    return (
      <div className="jobs-category-page">
        <div className="jobs-top-bar">
          <button className="back-chevron" onClick={() => router.back()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </button>
        </div>
        <div className="jobs-not-found">
          <h1>Category not found</h1>
          <p>The job category you are looking for does not exist.</p>
          <Link href="/" className="jobs-back-link">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jobs-category-page">
      <div className="jobs-top-bar">
        <button className="back-chevron" onClick={() => router.back()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Back</span>
        </button>
      </div>

      <div className="jobs-header">
        <h1 className="jobs-category-title">{categoryData.name}</h1>
        <p className="jobs-subtitle">
          Browse {workers.length} talented professionals in {categoryData.name}
        </p>
      </div>

      <div className="workers-page-grid">
        {workers.map((worker) => (
          <div className="worker-page-card" key={worker.slug}>
            <div className="worker-page-card-header">
              <div className="worker-page-image">
                <img src={profileImage} alt={worker.name} />
              </div>
              <div className="worker-page-info">
                <h3 className="worker-page-name">{worker.name}</h3>
                <p className="worker-page-title">{worker.title}</p>
              </div>
            </div>

            <div className="worker-page-stats">
              <div className="worker-page-rating">
                <span className="star-icon">&#9733;</span>
                <span>{worker.rating}</span>
              </div>
              <div className="worker-page-rate">
                <span className="rate-amount">${worker.rate}</span>
                <span className="rate-label">/hr</span>
              </div>
            </div>

            <div className="worker-page-location">
              <svg
                className="location-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{worker.location}</span>
            </div>

            <Link
              href={`/jobs/${category}/${worker.slug}`}
              className="view-profile-link"
            >
              View Profile &rarr;
            </Link>
          </div>
        ))}
      </div>

      {/* Recommended Categories */}
      <section className="recommended-section">
        <h2 className="recommended-title">Recommended for you</h2>
        <p className="recommended-subtitle">Explore other job categories</p>
        <div className="recommended-grid">
          {recommendedCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/jobs/${cat.id}`}
              className="recommended-card"
            >
              <span className="recommended-name">{cat.name}</span>
              <span className="recommended-count">
                {workersByCategory[cat.id]?.length || 0} professionals
              </span>
              <svg className="recommended-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
