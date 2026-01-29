"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./help-center.css";

// SVG Icons
const icons = {
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  user: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  briefcase: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  star: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  creditCard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  wrench: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  sparkles: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  ),
  phone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  info: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4"/>
      <path d="M12 8h.01"/>
    </svg>
  ),
};

export default function HelpCenterPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const popularQuestions = [
    {
      question: "How to create an account?",
      answer: "To create an account, click the 'Sign Up' button in the top right corner. Fill in your email, create a password, and complete your profile information. You'll receive a verification email to confirm your account.",
      categorySlug: "getting-started",
      articleSlug: "create-your-account"
    },
    {
      question: "How do I update my profile?",
      answer: "Go to your dashboard and click on 'Profile Settings'. From there, you can update your personal information, upload a new photo, add your skills, work experience, and portfolio items.",
      categorySlug: "account-management",
      articleSlug: "update-profile-info"
    },
    {
      question: "How to search for remote jobs?",
      answer: "Use the search bar on the homepage to enter keywords, skills, or job titles. You can filter results by experience level, job type, salary range, and more. Save your searches to get notified of new matching jobs.",
      categorySlug: "job-applications",
      articleSlug: "search-for-jobs"
    },
    {
      question: "How to track my applications?",
      answer: "Visit your dashboard and click on 'My Applications'. Here you can see all your submitted applications, their current status, and any messages from employers. You'll also receive email notifications for status updates.",
      categorySlug: "job-applications",
      articleSlug: "track-status"
    },
    {
      question: "How to change payment method?",
      answer: "Navigate to 'Account Settings' > 'Payment & Billing'. Click 'Manage Payment Methods' to add, remove, or update your payment information. All transactions are securely encrypted.",
      categorySlug: "payment-billing",
      articleSlug: "payment-methods"
    },
    {
      question: "How to contact support?",
      answer: "You can reach our support team by emailing support@ogera.com, using the live chat feature in the bottom right corner, or filling out the contact form on our Contact page. We typically respond within 24 hours.",
      categorySlug: "contact-support",
      articleSlug: "email-support"
    },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const helpCategories = [
    {
      icon: icons.rocket,
      title: "Getting Started",
      slug: "getting-started",
      description: "New to Ogera? Start here to learn the basics. Create your account, set up your profile, and explore the platform features.",
      links: [
        { label: "Create your account", slug: "create-your-account" },
        { label: "Set up your profile", slug: "set-up-your-profile" },
        { label: "Explore features", slug: "explore-features" },
        { label: "Step-by-step guides", slug: "step-by-step-guides" },
      ],
    },
    {
      icon: icons.user,
      title: "Account Management",
      slug: "account-management",
      description: "Learn how to manage your account settings, update your profile information, change your password, and configure notification preferences.",
      links: [
        { label: "Update profile info", slug: "update-profile-info" },
        { label: "Change password", slug: "change-password" },
        { label: "Notification settings", slug: "notification-settings" },
        { label: "Security settings", slug: "security-settings" },
      ],
    },
    {
      icon: icons.briefcase,
      title: "Job Applications",
      slug: "job-applications",
      description: "Discover how to search for jobs, submit applications, track your application status, and communicate with employers.",
      links: [
        { label: "Search for jobs", slug: "search-for-jobs" },
        { label: "Submit applications", slug: "submit-applications" },
        { label: "Track status", slug: "track-status" },
        { label: "Contact employers", slug: "contact-employers" },
      ],
    },
    {
      icon: icons.star,
      title: "Profile Optimization",
      slug: "profile-optimization",
      description: "Make your profile stand out to potential employers. Add your work experience, education, skills, and portfolio.",
      links: [
        { label: "Add work experience", slug: "add-work-experience" },
        { label: "Upload portfolio", slug: "upload-portfolio" },
        { label: "Showcase skills", slug: "showcase-skills" },
        { label: "Write compelling bio", slug: "write-compelling-bio" },
      ],
    },
    {
      icon: icons.creditCard,
      title: "Payment & Billing",
      slug: "payment-billing",
      description: "Understand our payment processes, billing cycles, and accepted payment methods. All transactions are secure and encrypted.",
      links: [
        { label: "Payment methods", slug: "payment-methods" },
        { label: "Billing cycles", slug: "billing-cycles" },
        { label: "Transaction history", slug: "transaction-history" },
        { label: "Resolve issues", slug: "resolve-issues" },
      ],
    },
    {
      icon: icons.wrench,
      title: "Technical Support",
      slug: "technical-support",
      description: "Experiencing technical difficulties? Check our troubleshooting guides for common issues like login problems or browser compatibility.",
      links: [
        { label: "Login problems", slug: "login-problems" },
        { label: "Browser compatibility", slug: "browser-compatibility" },
        { label: "Performance issues", slug: "performance-issues" },
        { label: "Contact tech support", slug: "contact-tech-support" },
      ],
    },
    {
      icon: icons.sparkles,
      title: "Platform Features",
      slug: "platform-features",
      description: "Explore detailed guides on using Ogera's features including job search filters, saved searches, and messaging system.",
      links: [
        { label: "Job search filters", slug: "job-search-filters" },
        { label: "Saved searches", slug: "saved-searches" },
        { label: "Messaging system", slug: "messaging-system" },
        { label: "Tips and tricks", slug: "tips-and-tricks" },
      ],
    },
    {
      icon: icons.phone,
      title: "Contact Support",
      slug: "contact-support",
      description: "Still need help? Our support team is here for you. Email us at support@ogera.com or use the live chat feature.",
      links: [
        { label: "Email support", slug: "email-support" },
        { label: "Live chat", slug: "live-chat" },
        { label: "Response times", slug: "response-times" },
        { label: "Business hours", slug: "business-hours" },
      ],
    },
  ];

  // Search filtering
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { questions: [], articles: [] };

    const query = searchQuery.toLowerCase();

    // Filter popular questions
    const filteredQuestions = popularQuestions.filter(
      q => q.question.toLowerCase().includes(query) ||
           q.answer.toLowerCase().includes(query)
    );

    // Filter articles from categories
    const filteredArticles: { label: string; slug: string; category: string; categorySlug: string }[] = [];
    helpCategories.forEach(category => {
      category.links.forEach(link => {
        if (link.label.toLowerCase().includes(query) ||
            category.title.toLowerCase().includes(query)) {
          filteredArticles.push({
            ...link,
            category: category.title,
            categorySlug: category.slug
          });
        }
      });
    });

    return { questions: filteredQuestions, articles: filteredArticles };
  }, [searchQuery]);

  const hasSearchResults = searchResults.questions.length > 0 || searchResults.articles.length > 0;
  const showSearchDropdown = isSearchFocused && searchQuery.trim().length > 0;

  const handleSearchResultClick = (categorySlug: string, articleSlug: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    router.push(`/help-center/${categorySlug}/${articleSlug}`);
  };

  const handleQuestionClick = (categorySlug: string, articleSlug: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    router.push(`/help-center/${categorySlug}/${articleSlug}`);
  };

  return (
    <>
      <Navbar />
      <div className="help-page">
        {/* Hero Section */}
        <section className="help-hero">
          <div className="help-hero-content">
            <h1>How can we help you?</h1>
            <div className="help-search-wrapper" ref={searchRef}>
              <div className={`help-search-box ${showSearchDropdown ? 'search-active' : ''}`}>
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Write a question or problem"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
                {searchQuery && (
                  <button
                    className="search-clear-btn"
                    onClick={() => setSearchQuery("")}
                    type="button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showSearchDropdown && (
                <div className="search-results-dropdown">
                  {hasSearchResults ? (
                    <>
                      {searchResults.questions.length > 0 && (
                        <div className="search-results-section">
                          <div className="search-results-label">Popular Questions</div>
                          {searchResults.questions.slice(0, 3).map((q, idx) => (
                            <button
                              key={idx}
                              className="search-result-item"
                              onClick={() => handleQuestionClick(q.categorySlug, q.articleSlug)}
                            >
                              <svg className="result-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                              </svg>
                              <span>{q.question}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {searchResults.articles.length > 0 && (
                        <div className="search-results-section">
                          <div className="search-results-label">Help Articles</div>
                          {searchResults.articles.slice(0, 5).map((article, idx) => (
                            <button
                              key={idx}
                              className="search-result-item"
                              onClick={() => handleSearchResultClick(article.categorySlug, article.slug)}
                            >
                              <svg className="result-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                              </svg>
                              <div className="result-text">
                                <span className="result-title">{article.label}</span>
                                <span className="result-category">{article.category}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="search-no-results">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <span>No results found for &quot;{searchQuery}&quot;</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Decorative Illustrations */}
          <div className="help-illustrations">
            <div className="illustration illustration-1">
              <div className="person-card">
                <div className="person-avatar">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M12 14v3"/>
                    <rect x="8" y="17" width="8" height="4" rx="1"/>
                  </svg>
                </div>
                <div className="person-lines"></div>
              </div>
            </div>
            <div className="illustration illustration-2">
              <div className="person-card">
                <div className="person-avatar">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5B3BA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M20 21a8 8 0 1 0-16 0"/>
                    <path d="M12 13v2"/>
                    <path d="M9 18h6"/>
                  </svg>
                </div>
                <div className="person-lines"></div>
              </div>
            </div>
            <div className="illustration illustration-3">
              <div className="person-card">
                <div className="person-avatar">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9B7DE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                  </svg>
                </div>
                <div className="person-lines"></div>
              </div>
            </div>
            <div className="illustration illustration-4">
              <div className="person-card">
                <div className="person-avatar">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="person-lines"></div>
              </div>
            </div>
          </div>

          {/* Decorative clouds */}
          <div className="cloud cloud-1">
            <svg width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="1.5">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>
          </div>
          <div className="cloud cloud-2">
            <svg width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="1.5">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>
          </div>
          <div className="cloud cloud-3">
            <svg width="32" height="20" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="1.5">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>
          </div>
        </section>

        {/* Popular Questions Section */}
        <section className="popular-questions">
          <div className="section-header">
            <h2>Popular questions <span className="dropdown-arrow">▼</span></h2>
          </div>
          <div className="questions-list">
            {popularQuestions.map((item, index) => (
              <div key={index} className={`question-item ${expandedQuestion === index ? 'expanded' : ''}`}>
                <button
                  className="question-button"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`question-arrow ${expandedQuestion === index ? 'rotated' : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {expandedQuestion === index && (
                  <div className="question-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Help by Category Section */}
        <section className="help-categories">
          <h2>Help by category</h2>
          <div className="categories-grid">
            {helpCategories.map((category, index) => (
              <div key={index} className="category-card" id={category.slug}>
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <ul className="category-links">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={`/help-center/${category.slug}/${link.slug}`}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
