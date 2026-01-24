"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-page-wrapper">
        {/* Hero Banner Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Us</h1>
            <p className="about-hero-subtitle">Building Trust in the Job Market</p>
          </div>
        </section>

        <main className="about-main-content">
          {/* Mission and Vision Section with Image */}
          <section className="mission-vision-section">
            <div className="mission-vision-container">
              <div className="mission-vision-content">
                <div className="mission-block">
                  <h2 className="section-heading">Our Mission</h2>
                  <p className="section-text">
                    We're committed to transforming how people find work by creating a transparent, 
                    secure platform where every job listing is verified and every employer is held 
                    accountable. Through our innovative TrustScore system, we empower job seekers 
                    to make confident career decisions without worrying about scams or misleading 
                    opportunities. Our goal is to make quality employment accessible to everyone, 
                    regardless of their background or location.
                  </p>
                </div>

                <div className="vision-block">
                  <h2 className="section-heading">Our Vision</h2>
                  <p className="section-text">
                    We envision a global job marketplace where trust isn't just a feature—it's 
                    the foundation of every connection. By combining cutting-edge technology with 
                    real community feedback, we're setting a new standard for transparency in 
                    employment platforms. We see a future where job seekers and employers build 
                    meaningful relationships based on mutual respect and verified credibility.
                  </p>
                </div>
              </div>

              <div className="mission-vision-image">
                <Image
                  src="/Laptop Lifestyle_ How to Boost Productivity On-the-Go.jpg"
                  alt="Professional collaboration and productivity"
                  width={600}
                  height={800}
                  className="about-feature-image"
                />
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="our-story-section">
            <div className="our-story-container">
              <h2 className="our-story-title">Our Story</h2>
              <p className="our-story-text">
                Ogera started with a simple observation: too many talented people were getting 
                burned by fake job postings, while honest employers struggled to stand out in 
                a crowded marketplace. Founded by a team of industry veterans who'd experienced 
                these challenges firsthand, we set out to bridge the gap between job seekers 
                and trustworthy opportunities. From our first prototype to serving thousands of 
                users today, we've stayed true to our core principle: trust should be built-in, 
                not an afterthought. Every feature we build, every partnership we form, 
                and every decision we make is guided by our commitment to creating a more 
                transparent job market. Today, Ogera stands as a platform where verification 
                meets opportunity, and where both job seekers and employers can thrive with 
                confidence.
              </p>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="why-choose-section">
            <h2 className="why-choose-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Verified Listings</h3>
                <p className="feature-description">
                  Every job posting goes through our verification process to ensure authenticity 
                  and protect job seekers from scams.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">TrustScore System</h3>
                <p className="feature-description">
                  Our proprietary rating system evaluates employers based on their track record, 
                  helping you make informed career decisions.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Real Community Feedback</h3>
                <p className="feature-description">
                  Learn from others' experiences through verified reviews and ratings from 
                  job seekers who've worked with these employers.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="main-footer">
          <div className="footer-links">
            <Link href="/terms">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy policy</Link>
            <span>|</span>
            <Link href="/#contact">Contact Us</Link>
          </div>
        </footer>

        <Footer />
      </div>
    </>
  );
}
