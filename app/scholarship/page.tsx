"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./scholarship.css";

const scholarships = [
  {
    id: 1,
    title: "Tech Skills Development Grant",
    provider: "Ogera Foundation",
    amount: "$2,500",
    deadline: "March 31, 2026",
    category: "Technology",
    description: "Supporting African youth in acquiring essential tech skills through certified training programs.",
    eligibility: ["African citizens aged 18-35", "Enrolled in tech program", "Demonstrated financial need"],
  },
  {
    id: 2,
    title: "Women in STEM Scholarship",
    provider: "Sybella System",
    amount: "$5,000",
    deadline: "April 15, 2026",
    category: "STEM",
    description: "Empowering women across Africa to pursue careers in Science, Technology, Engineering, and Mathematics.",
    eligibility: ["Female applicants", "Pursuing STEM degree", "GPA 3.0 or higher"],
  },
  {
    id: 3,
    title: "Entrepreneurship Fund",
    provider: "Ogera & Partners",
    amount: "$3,000",
    deadline: "May 1, 2026",
    category: "Business",
    description: "Funding for aspiring entrepreneurs with innovative business ideas that solve African challenges.",
    eligibility: ["Valid business plan", "African resident", "Age 21-40"],
  },
  {
    id: 4,
    title: "Digital Marketing Certificate",
    provider: "Ogera Academy",
    amount: "Full Tuition",
    deadline: "Rolling",
    category: "Marketing",
    description: "Comprehensive digital marketing training with job placement assistance upon completion.",
    eligibility: ["Basic computer skills", "High school diploma", "Commitment to complete program"],
  },
  {
    id: 5,
    title: "Data Science Bootcamp",
    provider: "Sybella Tech",
    amount: "$4,000",
    deadline: "June 30, 2026",
    category: "Technology",
    description: "Intensive data science training covering Python, Machine Learning, and Analytics.",
    eligibility: ["Basic programming knowledge", "University student or graduate", "Strong analytical skills"],
  },
  {
    id: 6,
    title: "Rural Youth Employment Grant",
    provider: "Ogera Community",
    amount: "$1,500",
    deadline: "Ongoing",
    category: "Employment",
    description: "Supporting youth from rural areas to access job training and employment opportunities.",
    eligibility: ["Rural area resident", "Age 18-30", "Unemployed or underemployed"],
  },
];

const steps = [
  {
    number: "01",
    title: "Browse Scholarships",
    description: "Explore available scholarships that match your profile and career goals.",
  },
  {
    number: "02",
    title: "Check Eligibility",
    description: "Review the requirements to ensure you qualify for the scholarship.",
  },
  {
    number: "03",
    title: "Prepare Documents",
    description: "Gather required documents including transcripts, ID, and recommendation letters.",
  },
  {
    number: "04",
    title: "Submit Application",
    description: "Complete the online application form and submit before the deadline.",
  },
];

export default function ScholarshipPage() {
  return (
    <>
      <Navbar />
      <main className="scholarship-page">
        {/* Hero Section */}
        <section className="scholarship-hero">
          <div className="hero-content">
            <span className="hero-badge">Scholarship Gateway</span>
            <h1>Unlock Your Potential with Ogera Scholarships</h1>
            <p>
              Discover scholarship opportunities designed to help African students and professionals
              advance their education and careers. We believe in investing in talent.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Scholarships Awarded</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2M+</span>
                <span className="stat-label">Total Funding</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Partner Organizations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Available Scholarships */}
        <section className="scholarships-section">
          <div className="section-header">
            <h2>Available Scholarships</h2>
            <p>Find the perfect opportunity to fund your education and career growth</p>
          </div>

          <div className="scholarships-grid">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="scholarship-card">
                <div className="card-header">
                  <span className={`category-badge ${scholarship.category.toLowerCase()}`}>
                    {scholarship.category}
                  </span>
                  <span className="deadline">Deadline: {scholarship.deadline}</span>
                </div>
                <h3>{scholarship.title}</h3>
                <p className="provider">By {scholarship.provider}</p>
                <p className="description">{scholarship.description}</p>
                <div className="amount-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v12M9 9.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5c0 2-3 2.5-3 4.5M12 18h.01"/>
                  </svg>
                  <span>{scholarship.amount}</span>
                </div>
                <div className="eligibility">
                  <h4>Eligibility:</h4>
                  <ul>
                    {scholarship.eligibility.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="how-to-apply">
          <div className="section-header">
            <h2>How to Apply</h2>
            <p>Follow these simple steps to submit your scholarship application</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="scholarship-info">
          <div className="info-card highlight">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>Need Guidance?</h3>
            <p>Our scholarship advisors are here to help you find the right opportunity and navigate the application process.</p>
            <Link href="/contact" className="info-link">Contact Us</Link>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>Trusted Process</h3>
            <p>All applications are reviewed fairly by our panel of experts with complete confidentiality.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Quick Response</h3>
            <p>Receive application status updates within 2-4 weeks of submission deadline.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="scholarship-cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of African students who have transformed their lives through Ogera scholarships.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary">Get Started</Link>
            <Link href="/about" className="cta-secondary">Learn More</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
