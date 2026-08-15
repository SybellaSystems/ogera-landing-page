"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar/NavbarWrapper";
import Footer from "@/components/Footer/Footer";
import { fetchJobById, checkHasApplied, type ApiJob } from "@/lib/api";
import "./job-detail.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.ogera.sybellasystems.co.rw";
const DEFAULT_CURRENCY = "USD";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [job, setJob] = useState<ApiJob | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copyText, setCopyText] = useState("Copy Link");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);

  useEffect(() => {
    const loadJob = async () => {
      setIsLoading(true);
      const data = await fetchJobById(slug);
      setJob(data);
      setIsLoading(false);
    };
    loadJob();
  }, [slug]);

  // Detect login state from the shared cookie set by the dashboard app
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const cookies = document.cookie.split(";").reduce((acc, c) => {
        const [k, v] = c.trim().split("=");
        if (k) acc[k.trim()] = v || "";
        return acc;
      }, {} as Record<string, string>);
      const loggedIn = cookies["ogera_logged_in"] === "true";
      setIsLoggedIn(loggedIn);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // If logged in, check whether this student has already applied so we can show "Already Applied"
  useEffect(() => {
    if (!isLoggedIn || !slug) return;
    let cancelled = false;
    (async () => {
      const applied = await checkHasApplied(slug);
      if (!cancelled) setHasApplied(applied);
    })();
    return () => { cancelled = true; };
  }, [isLoggedIn, slug]);

  // Close share dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".jd-share-wrap")) setIsShareOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Apply always happens inside the dashboard. The landing page is the public
  // marketplace; the dashboard's JobDetails page owns the actual apply modal.
  const dashboardJobPath = `/dashboard/jobs/${slug}?apply=1`;
  const dashboardJobsPath = "/dashboard/jobs";
  const applyUrl = isLoggedIn
    ? `${APP_URL}${dashboardJobPath}`
    : `${APP_URL}/auth/login?redirect=${encodeURIComponent(dashboardJobsPath)}`;

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLoggedIn) return;

    e.preventDefault();
    setShowLoginToast(true);

    window.setTimeout(() => {
      window.location.href = applyUrl;
    }, 900);
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="jd-page">
          <div className="jd-not-found">
            <p>Loading job details...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="jd-page">
          <div className="jd-not-found">
            <div className="jd-nf-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1>Job Not Found</h1>
            <p>The job listing you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <div className="jd-nf-actions">
              <button className="jd-nf-back" onClick={() => router.back()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Go Back
              </button>
              <Link href="/jobs" className="jd-nf-browse">Browse All Jobs</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const companyInitial = (job.employer?.full_name || "E").charAt(0).toUpperCase();
  const postedDate = job.created_at
    ? new Date(job.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";
  const budgetLabel = `${(job.currency || DEFAULT_CURRENCY).toUpperCase()} ${Number(job.budget || 0).toLocaleString()}`;

  // Build JobPosting schema data for SEO Rich Snippets
  const jobPostingSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.job_title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: job.employer?.full_name || "Ogera",
      value: slug,
    },
    datePosted: job.created_at || new Date().toISOString(),
    employmentType: job.employment_type ? job.employment_type.toUpperCase().replace(/\s+/g, "_") : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.employer?.full_name || "Ogera Employer",
      sameAs: "https://ogera.sybellasystems.co.rw",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Africa",
        addressRegion: job.location || "Africa",
        addressCountry: "Africa",
      },
    },
    ...(job.budget && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: (job.currency || DEFAULT_CURRENCY).toUpperCase(),
        value: {
          "@type": "QuantitativeValue",
          value: Number(job.budget),
          unitText: "MONTH",
        },
      },
    }),
  };

  return (
    <>
      {/* Dynamic SEO Title & Description for the Client Component */}
      <Head>
        <title>{`${job.job_title} | Student Job & Internship | Ogera`}</title>
        <meta name="description" content={job.description.slice(0, 160)} />
        <link rel="canonical" href={`https://ogera.sybellasystems.co.rw/jobs/${slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
      </Head>

      <Navbar />
      <main className="jd-page">
        {/* Hero Header */}
        <section className="jd-hero">
          <div className="jd-hero-sphere" />
          <div className="jd-hero-sphere jd-hero-sphere--left" />
          <div className="jd-hero-inner">
            <nav className="jd-breadcrumb">
              <Link href="/">Home</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              <Link href="/jobs">Jobs</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              <span>{job.job_title}</span>
            </nav>

            <div className="jd-hero-row">
              <div className="jd-company-avatar">
                <span>{companyInitial}</span>
              </div>
              <div className="jd-hero-info">
                <div className="jd-hero-badges">
                  {job.employment_type && (
                    <span className={`jd-badge jd-badge--${job.employment_type.toLowerCase().replace(" ", "-")}`}>
                      {job.employment_type}
                    </span>
                  )}
                </div>
                <h1 className="jd-hero-title">{job.job_title}</h1>
                <p className="jd-hero-company">{job.employer?.full_name || "Employer"}</p>
                <div className="jd-hero-meta">
                  {job.location && (
                    <span className="jd-hero-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {job.location}
                    </span>
                  )}
                  {postedDate && (
                    <span className="jd-hero-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {postedDate}
                    </span>
                  )}
                  {job.budget && (
                    <span className="jd-hero-meta-item jd-hero-meta-salary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      {budgetLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="jd-main">
          <div className="jd-main-inner">
            {/* Left Content */}
            <div className="jd-content">
              <div className="jd-card">
                <div className="jd-card-section">
                  <h3 className="jd-section-title">About This Role</h3>
                  <p className="jd-desc">{job.description}</p>
                </div>

                <div className="jd-card-section jd-card-section--last">
                  <h3 className="jd-section-title">Job Details</h3>
                  <div className="jd-details">
                    {job.employment_type && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                        <div><span className="jd-detail-label">Job Type</span><span className="jd-detail-value">{job.employment_type}</span></div>
                      </div>
                    )}
                    {job.category && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg></div>
                        <div><span className="jd-detail-label">Category</span><span className="jd-detail-value">{job.category}</span></div>
                      </div>
                    )}
                    {job.location && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                        <div><span className="jd-detail-label">Location</span><span className="jd-detail-value">{job.location}</span></div>
                      </div>
                    )}
                    {job.budget && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                        <div><span className="jd-detail-label">Budget</span><span className="jd-detail-value">{budgetLabel}</span></div>
                      </div>
                    )}
                    {job.experience_level && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg></div>
                        <div><span className="jd-detail-label">Experience</span><span className="jd-detail-value">{job.experience_level}</span></div>
                      </div>
                    )}
                    {job.duration && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                        <div><span className="jd-detail-label">Duration</span><span className="jd-detail-value">{job.duration}</span></div>
                      </div>
                    )}
                    {postedDate && (
                      <div className="jd-detail">
                        <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
                        <div><span className="jd-detail-label">Posted</span><span className="jd-detail-value">{postedDate}</span></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="jd-sidebar">
              <div className="jd-apply-card">
                {job.budget && (
                  <div className="jd-apply-top">
                    <span className="jd-apply-salary">{budgetLabel}</span>
                  </div>
                )}

                {/* Apply Now → always redirects to the dashboard, which owns the apply modal */}
                {isLoggedIn && hasApplied ? (
                  <button
                    type="button"
                    className="jd-apply-btn"
                    disabled
                    style={{ opacity: 0.6, cursor: "not-allowed", background: "#e2e8f0", color: "#475569" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Already Applied
                  </button>
                ) : (
                  <a href={applyUrl} className="jd-apply-btn" onClick={handleApplyClick}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Apply Now
                  </a>
                )}

                {/* Sign-up nudge (only when not logged in) */}
                {!isLoggedIn && (
                  <p style={{ fontSize: "12px", color: "#6B7280", textAlign: "center", marginTop: "8px", lineHeight: 1.5 }}>
                    You need an account to apply.{" "}
                    <a href={`${APP_URL}/auth/register`} style={{ color: "#7F56D9", fontWeight: 600 }}>
                      Sign up free
                    </a>
                  </p>
                )}

                <div className="jd-apply-actions">
                  <div className="jd-share-wrap">
                    <button className="jd-action-btn" onClick={() => setIsShareOpen(!isShareOpen)}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                      Share
                    </button>
                    {isShareOpen && (
                      <div className="jd-share-dropdown">
                        <button
                          className="jd-share-option"
                          onClick={async () => {
                            await navigator.clipboard.writeText(window.location.href);
                            setCopyText("Copied!");
                            setTimeout(() => { setCopyText("Copy Link"); setIsShareOpen(false); }, 1500);
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          {copyText}
                        </button>
                        {typeof navigator !== "undefined" && navigator.share && (
                          <button
                            className="jd-share-option"
                            onClick={async () => {
                              try { await navigator.share({ title: job.job_title, url: window.location.href }); } catch { }
                              setIsShareOpen(false);
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                            Share via Apps
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <button className="jd-action-btn" onClick={() => router.back()}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back
                  </button>
                </div>
              </div>

              <div className="jd-quick-card">
                <h3>Quick Summary</h3>
                <div className="jd-quick-items">
                  {job.employment_type && (
                    <div className="jd-quick-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                      <span>{job.employment_type}</span>
                    </div>
                  )}
                  {job.location && (
                    <div className="jd-quick-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      <span>{job.location}</span>
                    </div>
                  )}
                  {job.category && (
                    <div className="jd-quick-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                      <span>{job.category}</span>
                    </div>
                  )}
                  {job.experience_level && (
                    <div className="jd-quick-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      <span>{job.experience_level}</span>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="jd-cta">
          <div className="jd-cta-inner">
            <div className="jd-cta-text">
              <h2>Explore More Opportunities</h2>
              <p>Discover more roles that match your skills and experience across Africa.</p>
            </div>
            <div className="jd-cta-buttons">
              <Link href="/jobs" className="jd-cta-primary">Browse More Jobs</Link>
            </div>
          </div>
        </section>
      </main>
      {showLoginToast && (
        <div className="jd-login-toast" role="status" aria-live="polite">
          Please login first to apply for this job.
        </div>
      )}
      <Footer />
    </>
  );
}