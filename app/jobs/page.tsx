"use client";

import { useState, useMemo, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar/NavbarWrapper";
import Footer from "@/components/Footer/Footer";
import { fetchActiveJobs, fetchCategories, type ApiJob, type ApiCategory } from "@/lib/api";
import {
  buildJobsSearchUrl,
  parseJobsSearchParams,
  matchesExperience,
  matchesJobType,
  matchesSkillsSearch,
  EXPERIENCE_FILTER_OPTIONS,
  EXPERIENCE_LABELS,
  JOB_TYPE_FILTER_OPTIONS,
  JOB_TYPE_LABELS,
} from "@/lib/jobSearchParams";
import "./jobs.css";

const JOBS_PER_PAGE = 15;
const DEFAULT_CURRENCY = "USD";

function JobsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [apiCategories, setApiCategories] = useState<ApiCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromUrl = parseJobsSearchParams(searchParams);
    setSearchQuery(fromUrl.skills);
    setSelectedExperience(fromUrl.experience);
    setSelectedJobType(fromUrl.jobType);
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const [jobsData, categoriesData] = await Promise.all([
        fetchActiveJobs(),
        fetchCategories(),
      ]);
      setJobs(jobsData);
      setApiCategories(categoriesData);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterBarRef.current && !filterBarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locations = useMemo(() => {
    const locs = new Set(jobs.map((j) => j.location).filter(Boolean));
    return Array.from(locs).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = matchesSkillsSearch(job, searchQuery);
      const matchesType = matchesJobType(job, selectedJobType);
      const matchesExp = matchesExperience(job, selectedExperience);
      const matchesCategory =
        !selectedCategory || job.category?.toLowerCase() === selectedCategory.toLowerCase();
      const matchesLocation =
        !selectedLocation || job.location?.includes(selectedLocation);
      return matchesSearch && matchesType && matchesExp && matchesCategory && matchesLocation;
    });
  }, [jobs, searchQuery, selectedJobType, selectedExperience, selectedCategory, selectedLocation]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const hasFilters =
    searchQuery ||
    selectedJobType ||
    selectedExperience ||
    selectedCategory ||
    selectedLocation;

  const syncUrlWithFilters = (
    next: Partial<{
      skills: string;
      experience: string;
      jobType: string;
    }>
  ) => {
    router.replace(
      buildJobsSearchUrl({
        skills: next.skills ?? searchQuery,
        experience: next.experience ?? selectedExperience,
        jobType: next.jobType ?? selectedJobType,
      }),
      { scroll: false }
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedJobType("");
    setSelectedExperience("");
    setSelectedCategory("");
    setSelectedLocation("");
    setCurrentPage(1);
    router.replace("/jobs", { scroll: false });
  };

  const handleFilterChange = (
    setter: (val: string) => void,
    value: string,
    urlKey?: "skills" | "experience" | "jobType"
  ) => {
    setter(value);
    setCurrentPage(1);
    if (urlKey === "skills") syncUrlWithFilters({ skills: value });
    if (urlKey === "experience") syncUrlWithFilters({ experience: value });
    if (urlKey === "jobType") syncUrlWithFilters({ jobType: value });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const formatBudget = (job: ApiJob) => {
    if (job.budget === undefined || job.budget === null) return "";
    return `${(job.currency || DEFAULT_CURRENCY).toUpperCase()} ${Number(job.budget).toLocaleString()}`;
  };

  return (
    <>
      <Navbar />
      <main className="jobs-page">
        {/* Hero */}
        <section className="jobs-hero">
          <div className="jobs-hero-grid" />
          <div className="jobs-hero-content">
            <span className="jobs-hero-badge">Job Board</span>
            <h1>Find Your Next Opportunity</h1>
            <p>
              Browse jobs from trusted companies across Africa. Filter by skill,
              type, and location to find your perfect match.
            </p>
            <div className="jobs-hero-stats">
              <div className="jobs-stat">
                <span className="jobs-stat-number">{jobs.length}+</span>
                <span className="jobs-stat-label">Open Positions</span>
              </div>
              <div className="jobs-stat">
                <span className="jobs-stat-number">{apiCategories.length}</span>
                <span className="jobs-stat-label">Categories</span>
              </div>
              <div className="jobs-stat">
                <span className="jobs-stat-number">4</span>
                <span className="jobs-stat-label">Job Types</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="jobs-filter-section">
          <div className="jobs-filter-bar" ref={filterBarRef}>
            <div className="jobs-filter-input-wrap">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search by title, skill, or company..."
                value={searchQuery}
                onChange={(e) =>
                  handleFilterChange(setSearchQuery, e.target.value, "skills")
                }
              />
            </div>

            {/* Job Type Dropdown */}
            <div className={`custom-dropdown${openDropdown === "jobType" ? " open" : ""}`}>
              <button
                className="custom-dropdown-trigger"
                onClick={() => setOpenDropdown(openDropdown === "jobType" ? null : "jobType")}
              >
                <span>
                  {selectedJobType
                    ? JOB_TYPE_LABELS[selectedJobType] || selectedJobType
                    : "All Job Types"}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="custom-dropdown-menu">
                {[{ value: "", label: "All Job Types" }, ...JOB_TYPE_FILTER_OPTIONS].map((opt) => (
                  <div
                    key={opt.value}
                    className={`custom-dropdown-option${selectedJobType === opt.value ? " selected" : ""}`}
                    onClick={() => {
                      handleFilterChange(setSelectedJobType, opt.value, "jobType");
                      setOpenDropdown(null);
                    }}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Level Dropdown */}
            <div className={`custom-dropdown${openDropdown === "experience" ? " open" : ""}`}>
              <button
                className="custom-dropdown-trigger"
                onClick={() =>
                  setOpenDropdown(openDropdown === "experience" ? null : "experience")
                }
              >
                <span>
                  {selectedExperience
                    ? EXPERIENCE_LABELS[selectedExperience] || selectedExperience
                    : "All Experience Levels"}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="custom-dropdown-menu">
                {[{ value: "", label: "All Experience Levels" }, ...EXPERIENCE_FILTER_OPTIONS].map(
                  (opt) => (
                    <div
                      key={opt.value || "all"}
                      className={`custom-dropdown-option${selectedExperience === opt.value ? " selected" : ""}`}
                      onClick={() => {
                        handleFilterChange(setSelectedExperience, opt.value, "experience");
                        setOpenDropdown(null);
                      }}
                    >
                      {opt.label}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Category Dropdown */}
            <div className={`custom-dropdown${openDropdown === "category" ? " open" : ""}`}>
              <button
                className="custom-dropdown-trigger"
                onClick={() => setOpenDropdown(openDropdown === "category" ? null : "category")}
              >
                <span>{selectedCategory ? apiCategories.find((c) => c.name === selectedCategory)?.name : "All Categories"}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="custom-dropdown-menu">
                <div
                  className={`custom-dropdown-option${selectedCategory === "" ? " selected" : ""}`}
                  onClick={() => { handleFilterChange(setSelectedCategory, ""); setOpenDropdown(null); }}
                >
                  All Categories
                </div>
                {apiCategories.map((cat, index) => (
                  <div
                    key={cat.id || `${cat.name}-${index}`}
                    className={`custom-dropdown-option${selectedCategory === cat.name ? " selected" : ""}`}
                    onClick={() => { handleFilterChange(setSelectedCategory, cat.name); setOpenDropdown(null); }}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Location Dropdown */}
            <div className={`custom-dropdown${openDropdown === "location" ? " open" : ""}`}>
              <button
                className="custom-dropdown-trigger"
                onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
              >
                <span>{selectedLocation || "All Locations"}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="custom-dropdown-menu">
                <div
                  className={`custom-dropdown-option${selectedLocation === "" ? " selected" : ""}`}
                  onClick={() => { handleFilterChange(setSelectedLocation, ""); setOpenDropdown(null); }}
                >
                  All Locations
                </div>
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className={`custom-dropdown-option${selectedLocation === loc ? " selected" : ""}`}
                    onClick={() => { handleFilterChange(setSelectedLocation, loc); setOpenDropdown(null); }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active filter tags */}
          {hasFilters && (
            <div className="jobs-filter-tags">
              {searchQuery && (
                <span className="jobs-filter-tag">
                  &ldquo;{searchQuery}&rdquo;
                  <button
                    onClick={() => handleFilterChange(setSearchQuery, "", "skills")}
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedExperience && (
                <span className="jobs-filter-tag">
                  {EXPERIENCE_LABELS[selectedExperience] || selectedExperience}
                  <button
                    onClick={() =>
                      handleFilterChange(setSelectedExperience, "", "experience")
                    }
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedJobType && (
                <span className="jobs-filter-tag">
                  {JOB_TYPE_LABELS[selectedJobType] || selectedJobType}
                  <button
                    onClick={() =>
                      handleFilterChange(setSelectedJobType, "", "jobType")
                    }
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="jobs-filter-tag">
                  {apiCategories.find((c) => c.name === selectedCategory)?.name || selectedCategory}
                  <button
                    onClick={() => handleFilterChange(setSelectedCategory, "")}
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedLocation && (
                <span className="jobs-filter-tag">
                  {selectedLocation}
                  <button
                    onClick={() => handleFilterChange(setSelectedLocation, "")}
                  >
                    &times;
                  </button>
                </span>
              )}
              <button className="jobs-clear-all" onClick={clearFilters}>
                Clear all
              </button>
            </div>
          )}
        </section>

        {/* Job Listings */}
        <section className="jobs-listing-section">
          <div className="jobs-listing-header">
            <h2>Available Positions</h2>
            <span className="jobs-count">
              {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}{" "}
              found
            </span>
          </div>

          {isLoading ? (
            <div className="jobs-empty-state">
              <p>Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="jobs-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <h3>No jobs match your filters</h3>
              <p>Try adjusting your search criteria or browse all available positions.</p>
              <button onClick={clearFilters}>Clear All Filters</button>
            </div>
          ) : (
            <>
              <div className="jobs-grid">
                {paginatedJobs.map((job) => (
                  <Link
                    href={`/jobs/detail/${job.job_id}`}
                    key={job.job_id}
                    className="job-card"
                  >
                    <div className="job-card-header">
                      <div className="job-card-badges">
                        {job.employment_type && (
                          <span className={`job-type-badge ${job.employment_type.toLowerCase().replace(" ", "-")}`}>
                            {job.employment_type}
                          </span>
                        )}
                        {job.category && (
                          <span className="job-featured-badge">{job.category}</span>
                        )}
                      </div>
                      <span className="job-posted-date">
                        {job.created_at ? new Date(job.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''}
                      </span>
                    </div>
                    <h3 className="job-card-title">{job.job_title}</h3>
                    <p className="job-card-company">{job.employer?.full_name || 'Employer'}</p>
                    <div className="job-card-meta">
                      <span className="job-card-location">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {job.location}
                      </span>
                      {job.budget && (
                        <span className="job-card-salary">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                          {formatBudget(job)}
                        </span>
                      )}
                    </div>
                    {job.experience_level && (
                      <div className="job-card-skills">
                        <span className="job-skill-tag">{job.experience_level}</span>
                        {job.duration && <span className="job-skill-tag">{job.duration}</span>}
                      </div>
                    )}
                    <div className="job-card-footer">
                      <span className="job-card-arrow">View &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="jobs-pagination">
                  <button
                    className="pagination-btn pagination-prev"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Prev
                  </button>

                  <div className="pagination-pages">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          className={`pagination-page${
                            page === currentPage ? " active" : ""
                          }`}
                          onClick={() => goToPage(page)}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    className="pagination-btn pagination-next"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* CTA */}
        <section className="jobs-cta">
          <div className="jobs-cta-inner">
            <div className="jobs-cta-text">
              <h2>Can&apos;t Find What You&apos;re Looking For?</h2>
              <p>
                Reach out to us and we&apos;ll help you find the right opportunity
                that matches your skills.
              </p>
            </div>
            <div className="jobs-cta-buttons">
              <Link href="/contact" className="jobs-cta-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function JobsPage() {
  return (
    <Suspense
      fallback={
        <>
          <Navbar />
          <main className="jobs-page">
            <div className="jobs-empty-state">
              <p>Loading jobs...</p>
            </div>
          </main>
          <Footer />
        </>
      }
    >
      <JobsPageContent />
    </Suspense>
  );
}
