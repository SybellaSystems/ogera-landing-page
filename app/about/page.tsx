"use client";

import Navbar from "@/components/Navbar/NavbarWrapper";
import Footer from "@/components/Footer/Footer";
import AfricaMap from "@/components/AfricaMap/AfricaMap";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-page-wrapper">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Ogera</h1>
            <p className="about-hero-subtitle">
              Building trust in every hire across Africa
            </p>
          </div>

          {/* Wave shape at bottom */}
          <div className="hero-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,120 L0,60 C240,100 480,20 720,50 C960,80 1200,10 1440,40 L1440,120 Z" className="wave-back" />
              <path d="M0,120 L0,80 C200,40 400,95 720,70 C1040,45 1280,90 1440,65 L1440,120 Z" className="wave-mid" />
              <path d="M0,120 L0,90 C360,110 600,75 900,95 C1100,108 1300,80 1440,85 L1440,120 Z" className="wave-front" />
            </svg>
          </div>
        </section>

        <main className="about-main-content">
          {/* Mission & Vision */}
          <section className="mission-vision-section">
            <div className="mission-vision-container">
              <div className="mission-vision-content">
                <div className="mission-block">
                  <h2 className="section-heading">Our Mission</h2>
                  <p className="section-text">
                    We&apos;re committed to transforming how people find work by creating a transparent,
                    secure platform where every job listing is verified and every employer is held
                    accountable. Through our innovative TrustScore system, we empower job seekers
                    to make confident career decisions without worrying about scams or misleading
                    opportunities.
                  </p>
                </div>

                <div className="vision-block">
                  <h2 className="section-heading">Our Vision</h2>
                  <p className="section-text">
                    We envision a global job marketplace where trust isn&apos;t just a feature — it&apos;s
                    the foundation of every connection. By combining cutting-edge technology with
                    real community feedback, we&apos;re setting a new standard for transparency in
                    employment platforms across Africa and beyond.
                  </p>
                </div>
              </div>

              <AfricaMap />
            </div>
          </section>

          {/* Impact Stats */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Job Seekers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Verified Employers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">African Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Trust Rating</span>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="our-story-section">
            <div className="our-story-container">
              <h2 className="our-story-title">Our Story</h2>
              <p className="our-story-text">
                Ogera started with a simple observation: too many talented people were getting
                burned by fake job postings, while honest employers struggled to stand out in
                a crowded marketplace. Founded by a team of industry veterans who&apos;d experienced
                these challenges firsthand, we set out to bridge the gap between job seekers
                and trustworthy opportunities. From our first prototype to serving thousands of
                users today, we&apos;ve stayed true to our core principle — trust should be built-in,
                not an afterthought.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="values-section">
            <h2 className="values-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Transparency</h3>
                <p>
                  Every job listing, employer profile, and review on Ogera is open and verifiable.
                  We believe clarity builds confidence, and confidence drives better career decisions.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3>Security</h3>
                <p>
                  Your data and career journey are protected by rigorous verification processes
                  and enterprise-grade security. We safeguard every interaction on our platform.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Community</h3>
                <p>
                  Real reviews from real people power our TrustScore system. Our community of job
                  seekers and employers collectively shapes a fairer, more accountable job market.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  From our TrustScore algorithm to AI-powered job matching, we continuously push
                  boundaries to make finding trustworthy work faster, smarter, and more reliable.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="why-choose-section">
            <h2 className="why-choose-title">Why Choose Ogera</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="feature-title">Verified Listings</h3>
                <p className="feature-description">
                  Every job posting goes through our verification process to ensure
                  authenticity and protect job seekers from scams.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="feature-title">TrustScore System</h3>
                <p className="feature-description">
                  Our proprietary rating system evaluates employers based on their track
                  record, helping you make informed career decisions.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3 className="feature-title">Community Feedback</h3>
                <p className="feature-description">
                  Learn from others&apos; experiences through verified reviews and ratings
                  from job seekers who&apos;ve worked with these employers.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-cta">
            <h2>Ready to Find Jobs You Can Trust?</h2>
            <p>Join thousands of job seekers and employers building a more transparent job market across Africa.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-primary">Get in Touch</Link>
              <Link href="/partners" className="cta-secondary">Become a Partner</Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
