"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  getJobBySlug,
  getFeaturedJobs,
  getRelatedJobs,
  formatSalary,
  getRelativeDate,
} from "@/data/jobs";
import { categories } from "@/data/workers";
import "./job-detail.css";

const countries = [
  { code: "RW", name: "Rwanda", dial: "+250", flag: "\u{1F1F7}\u{1F1FC}" },
  { code: "KE", name: "Kenya", dial: "+254", flag: "\u{1F1F0}\u{1F1EA}" },
  { code: "UG", name: "Uganda", dial: "+256", flag: "\u{1F1FA}\u{1F1EC}" },
  { code: "TZ", name: "Tanzania", dial: "+255", flag: "\u{1F1F9}\u{1F1FF}" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "\u{1F1F3}\u{1F1EC}" },
  { code: "GH", name: "Ghana", dial: "+233", flag: "\u{1F1EC}\u{1F1ED}" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "\u{1F1FF}\u{1F1E6}" },
  { code: "ET", name: "Ethiopia", dial: "+251", flag: "\u{1F1EA}\u{1F1F9}" },
  { code: "EG", name: "Egypt", dial: "+20", flag: "\u{1F1EA}\u{1F1EC}" },
  { code: "MA", name: "Morocco", dial: "+212", flag: "\u{1F1F2}\u{1F1E6}" },
  { code: "DZ", name: "Algeria", dial: "+213", flag: "\u{1F1E9}\u{1F1FF}" },
  { code: "TN", name: "Tunisia", dial: "+216", flag: "\u{1F1F9}\u{1F1F3}" },
  { code: "SN", name: "Senegal", dial: "+221", flag: "\u{1F1F8}\u{1F1F3}" },
  { code: "CI", name: "Ivory Coast", dial: "+225", flag: "\u{1F1E8}\u{1F1EE}" },
  { code: "CM", name: "Cameroon", dial: "+237", flag: "\u{1F1E8}\u{1F1F2}" },
  { code: "CD", name: "DR Congo", dial: "+243", flag: "\u{1F1E8}\u{1F1E9}" },
  { code: "AO", name: "Angola", dial: "+244", flag: "\u{1F1E6}\u{1F1F4}" },
  { code: "MZ", name: "Mozambique", dial: "+258", flag: "\u{1F1F2}\u{1F1FF}" },
  { code: "ZW", name: "Zimbabwe", dial: "+263", flag: "\u{1F1FF}\u{1F1FC}" },
  { code: "BW", name: "Botswana", dial: "+267", flag: "\u{1F1E7}\u{1F1FC}" },
];

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const job = getJobBySlug(slug);

  // Apply modal state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyFullName, setApplyFullName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyPhone, setApplyPhone] = useState("");
  const [applyInterest, setApplyInterest] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [applySent, setApplySent] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copyText, setCopyText] = useState("Copy Link");

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const shareDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (isApplyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isApplyModalOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = "";
    };
  }, [slug]);

  // Click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
      if (
        shareDropdownRef.current &&
        !shareDropdownRef.current.contains(event.target as Node)
      ) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resetApplyForm = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setApplyFullName("");
    setApplyEmail("");
    setApplyPhone("");
    setApplyInterest("");
    setSelectedCountry(countries[0]);
    setIsCountryDropdownOpen(false);
    setApplySent(false);
  }, []);

  const handleCloseApplyModal = useCallback(() => {
    resetApplyForm();
    setIsApplyModalOpen(false);
  }, [resetApplyForm]);

  const handleApplySubmit = useCallback(() => {
    if (!job) return;
    console.log("Application submitted:", {
      jobTitle: job.title,
      jobSlug: job.slug,
      fullName: applyFullName,
      email: applyEmail,
      phone: `${selectedCountry.dial} ${applyPhone}`,
      interest: applyInterest,
    });

    setApplySent(true);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      resetApplyForm();
      setIsApplyModalOpen(false);
    }, 2000);
  }, [applyFullName, applyEmail, applyPhone, applyInterest, selectedCountry, job, resetApplyForm]);

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

  const categoryName = categories.find((c) => c.id === job.category)?.name || job.category;
  const featuredJobs = getFeaturedJobs(job.id);
  const relatedJobs = getRelatedJobs(job.category, job.id);
  const companyInitial = job.company.charAt(0).toUpperCase();

  return (
    <>
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
              <span>{job.title}</span>
            </nav>

            <div className="jd-hero-row">
              <div className="jd-company-avatar">
                <span>{companyInitial}</span>
              </div>
              <div className="jd-hero-info">
                <div className="jd-hero-badges">
                  <span className={`jd-badge jd-badge--${job.jobType.toLowerCase().replace(" ", "-")}`}>
                    {job.jobType}
                  </span>
                  {job.featured && (
                    <span className="jd-badge jd-badge--featured">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="jd-hero-title">{job.title}</h1>
                <p className="jd-hero-company">{job.company}</p>
                <div className="jd-hero-meta">
                  <span className="jd-hero-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="jd-hero-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {getRelativeDate(job.postedDate)}
                  </span>
                  <span className="jd-hero-meta-item jd-hero-meta-salary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    {formatSalary(job)}
                  </span>
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

                <div className="jd-card-section">
                  <h3 className="jd-section-title">Required Skills</h3>
                  <div className="jd-skills">
                    {job.skills.map((skill) => (
                      <span key={skill} className="jd-skill">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="jd-card-section jd-card-section--last">
                  <h3 className="jd-section-title">Job Details</h3>
                  <div className="jd-details">
                    <div className="jd-detail">
                      <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                      <div><span className="jd-detail-label">Job Type</span><span className="jd-detail-value">{job.jobType}</span></div>
                    </div>
                    <div className="jd-detail">
                      <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg></div>
                      <div><span className="jd-detail-label">Category</span><span className="jd-detail-value">{categoryName}</span></div>
                    </div>
                    <div className="jd-detail">
                      <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                      <div><span className="jd-detail-label">Location</span><span className="jd-detail-value">{job.location}</span></div>
                    </div>
                    <div className="jd-detail">
                      <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                      <div><span className="jd-detail-label">Salary</span><span className="jd-detail-value">{new Intl.NumberFormat("en-US", { style: "currency", currency: job.salaryCurrency, maximumFractionDigits: 0 }).format(job.salaryMax)}/{job.salaryPeriod}</span></div>
                    </div>
                    <div className="jd-detail">
                      <div className="jd-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
                      <div><span className="jd-detail-label">Posted</span><span className="jd-detail-value">{getRelativeDate(job.postedDate)}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="jd-sidebar">
              <div className="jd-apply-card">
                <div className="jd-apply-top">
                  <span className="jd-apply-salary">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: job.salaryCurrency, maximumFractionDigits: 0 }).format(job.salaryMax)}/{job.salaryPeriod}
                  </span>
                </div>
                <button
                  className="jd-apply-btn"
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Apply Now
                </button>
                <div className="jd-apply-actions">
                  <div className="jd-share-wrap" ref={shareDropdownRef}>
                    <button
                      className="jd-action-btn"
                      onClick={() => setIsShareOpen(!isShareOpen)}
                    >
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
                            setTimeout(() => {
                              setCopyText("Copy Link");
                              setIsShareOpen(false);
                            }, 1500);
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
                              try {
                                await navigator.share({ title: job.title, url: window.location.href });
                              } catch {
                                // cancelled
                              }
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
                  <div className="jd-quick-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                    <span>{job.jobType}</span>
                  </div>
                  <div className="jd-quick-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="jd-quick-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                    <span>{categoryName}</span>
                  </div>
                  <div className="jd-quick-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    <span>{job.skills.length} skills required</span>
                  </div>
                </div>
              </div>

              {featuredJobs.length > 0 && (
                <div className="jd-featured-card">
                  <h3>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    Featured Jobs
                  </h3>
                  <div className="jd-featured-list">
                    {featuredJobs.map((fj) => (
                      <Link key={fj.id} href={`/jobs/detail/${fj.slug}`} className="jd-featured-item">
                        <div className="jd-featured-avatar"><span>{fj.company.charAt(0)}</span></div>
                        <div className="jd-featured-info">
                          <h4>{fj.title}</h4>
                          <p>{fj.company}</p>
                          <div className="jd-featured-bottom">
                            <span className={`jd-mini-badge jd-mini--${fj.jobType.toLowerCase().replace(" ", "-")}`}>{fj.jobType}</span>
                            <span className="jd-featured-salary">{formatSalary(fj)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* Related Jobs */}
        {relatedJobs.length > 0 && (
          <section className="jd-related">
            <div className="jd-related-inner">
              <div className="jd-related-header">
                <h2>More Jobs in {categoryName}</h2>
                <Link href="/jobs" className="jd-related-link">
                  View All Jobs
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
              </div>
              <div className="jd-related-grid">
                {relatedJobs.map((rj) => (
                  <Link key={rj.id} href={`/jobs/detail/${rj.slug}`} className="jd-related-card">
                    <div className="jd-related-card-top">
                      <div className="jd-related-avatar"><span>{rj.company.charAt(0)}</span></div>
                      <div>
                        <h3>{rj.title}</h3>
                        <p className="jd-related-company">{rj.company}</p>
                      </div>
                    </div>
                    <div className="jd-related-card-meta">
                      <span className={`jd-mini-badge jd-mini--${rj.jobType.toLowerCase().replace(" ", "-")}`}>{rj.jobType}</span>
                      <span className="jd-related-date">{getRelativeDate(rj.postedDate)}</span>
                    </div>
                    <div className="jd-related-card-bottom">
                      <span className="jd-related-loc">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        {rj.location}
                      </span>
                      <span className="jd-related-sal">{formatSalary(rj)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
      <Footer />

      {/* Apply Modal */}
      {isApplyModalOpen && (
        <div className="jd-modal-overlay" onClick={handleCloseApplyModal}>
          <div className="jd-modal" onClick={(e) => e.stopPropagation()}>
            {!applySent && (
              <button className="jd-modal-close" onClick={handleCloseApplyModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}

            {applySent ? (
              <div className="jd-modal-success">
                <div className="jd-modal-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2>Application Submitted!</h2>
                <p>Your application for <strong>{job.title}</strong> at {job.company} has been submitted successfully.</p>
              </div>
            ) : (
              <>
                <div className="jd-modal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
                <h2 className="jd-modal-title">Apply for this Job</h2>
                <p className="jd-modal-subtitle">{job.title} at {job.company}</p>

                <form
                  className="jd-modal-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleApplySubmit();
                  }}
                >
                  {/* Full Name */}
                  <div className="jd-modal-field">
                    <label htmlFor="apply-name">Full Name <span className="jd-req">*</span></label>
                    <input
                      type="text"
                      id="apply-name"
                      placeholder="Enter your full name"
                      value={applyFullName}
                      onChange={(e) => setApplyFullName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="jd-modal-field">
                    <label htmlFor="apply-email">Email <span className="jd-req">*</span></label>
                    <input
                      type="email"
                      id="apply-email"
                      placeholder="Enter your email address"
                      value={applyEmail}
                      onChange={(e) => setApplyEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="jd-modal-field">
                    <label htmlFor="apply-phone">Phone <span className="jd-req">*</span></label>
                    <div className="jd-phone-wrap" ref={countryDropdownRef}>
                      <div
                        className={`jd-phone-code${isCountryDropdownOpen ? " active" : ""}`}
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      >
                        <span className="jd-phone-flag">{selectedCountry.flag}</span>
                        <span>{selectedCountry.dial}</span>
                        <svg className={`jd-phone-arrow${isCountryDropdownOpen ? " open" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </div>
                      {isCountryDropdownOpen && (
                        <div className="jd-phone-dropdown">
                          {countries.map((c) => (
                            <div
                              key={c.code}
                              className={`jd-phone-option${selectedCountry.code === c.code ? " selected" : ""}`}
                              onClick={() => {
                                setSelectedCountry(c);
                                setIsCountryDropdownOpen(false);
                              }}
                            >
                              <span className="jd-phone-flag">{c.flag}</span>
                              <span className="jd-phone-name">{c.name}</span>
                              <span className="jd-phone-dial">{c.dial}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <input
                        type="tel"
                        id="apply-phone"
                        placeholder="Your phone number"
                        value={applyPhone}
                        onChange={(e) => setApplyPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="jd-modal-field">
                    <label htmlFor="apply-interest">Why are you interested? <span className="jd-req">*</span></label>
                    <textarea
                      id="apply-interest"
                      className="jd-modal-textarea"
                      rows={3}
                      placeholder="Tell us why you're a great fit for this role..."
                      value={applyInterest}
                      onChange={(e) => setApplyInterest(e.target.value)}
                      required
                    />
                  </div>

                  {/* Actions */}
                  <div className="jd-modal-actions">
                    <button type="button" className="jd-modal-cancel" onClick={handleCloseApplyModal}>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="jd-modal-submit"
                      disabled={!applyFullName || !applyEmail || !applyPhone || !applyInterest.trim()}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
