"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchWorkers, type ApiWorker } from '@/lib/api';
import './jobs-category.css';

const CATEGORIES: Record<string, string> = {
  development: 'Development & IT',
  design: 'Design & Creative',
  finance: 'Finance & Accounting',
  sales: 'Sales & Marketing',
  'ai-services': 'AI Services',
  law: 'Law',
  hr: 'HR & Training',
  engineering: 'Engineering & Architecture',
  writing: 'Writing & Translation',
  admin: 'Admin & Support',
};

const OTHER_CATEGORIES = Object.entries(CATEGORIES);

export default function JobsCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;

  const [workers, setWorkers] = useState<ApiWorker[]>([]);
  const [isFiltered, setIsFiltered] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const categoryName = CATEGORIES[category];

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const { workers: data, filtered } = await fetchWorkers(category);
      setWorkers(data);
      setIsFiltered(filtered);
      setIsLoading(false);
    };
    load();
  }, [category]);

  if (!categoryName) {
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
          <Link href="/" className="jobs-back-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  const recommendedCategories = OTHER_CATEGORIES.filter(([id]) => id !== category).slice(0, 4);

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
        <h1 className="jobs-category-title">{categoryName}</h1>
        <p className="jobs-subtitle">
          {isLoading
            ? 'Loading professionals...'
            : isFiltered
            ? `Browse ${workers.length} talented professional${workers.length !== 1 ? 's' : ''} in ${categoryName}`
            : `Showing all ${workers.length} professional${workers.length !== 1 ? 's' : ''} on the platform`}
        </p>
      </div>

      {isLoading ? (
        <div className="jobs-not-found">
          <p>Loading...</p>
        </div>
      ) : workers.length === 0 ? (
        <div className="jobs-not-found">
          <h2>No professionals found</h2>
          <p>No professionals have registered on the platform yet. Check back soon.</p>
        </div>
      ) : (
        <div className="workers-page-grid">
          {workers.map((worker) => (
            <div className="worker-page-card" key={worker.user_id}>
              <div className="worker-page-card-header">
                <div className="worker-page-image">
                  {worker.profile_image_url ? (
                    <img src={worker.profile_image_url} alt={worker.full_name} />
                  ) : (
                    <div style={{
                      width: '100%', height: '100%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      background: 'linear-gradient(135deg, #7F56D9, #9E77ED)',
                      color: '#fff', fontSize: '1.5rem', fontWeight: 700,
                      borderRadius: '50%',
                    }}>
                      {worker.full_name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="worker-page-info">
                  <h3 className="worker-page-name">{worker.full_name}</h3>
                  <p className="worker-page-title">{worker.title || worker.skills[0] || ''}</p>
                </div>
              </div>

              {worker.skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '8px 0' }}>
                  {worker.skills.slice(0, 3).map((skill) => (
                    <span key={skill} style={{
                      background: '#f4f0ff', color: '#6941C6', fontSize: '11px',
                      padding: '2px 8px', borderRadius: '12px', fontWeight: 500,
                    }}>
                      {skill}
                    </span>
                  ))}
                  {worker.skills.length > 3 && (
                    <span style={{
                      background: '#f4f0ff', color: '#6941C6', fontSize: '11px',
                      padding: '2px 8px', borderRadius: '12px', fontWeight: 500,
                    }}>
                      +{worker.skills.length - 3}
                    </span>
                  )}
                </div>
              )}

              {worker.location && (
                <div className="worker-page-location">
                  <svg className="location-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{worker.location}</span>
                </div>
              )}

              <Link href={`/jobs/${category}/${worker.user_id}`} className="view-profile-link">
                View Profile &rarr;
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Recommended Categories */}
      <section className="recommended-section">
        <h2 className="recommended-title">Recommended for you</h2>
        <p className="recommended-subtitle">Explore other job categories</p>
        <div className="recommended-grid">
          {recommendedCategories.map(([id, name]) => (
            <Link key={id} href={`/jobs/${id}`} className="recommended-card">
              <span className="recommended-name">{name}</span>
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
