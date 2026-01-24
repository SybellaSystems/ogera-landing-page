"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./careers.css";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="careers-page-wrapper">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="careers-hero-content">
            <h1 className="careers-hero-title">Join Our Team</h1>
            <p className="careers-hero-subtitle">
              Build the future of trusted job matching. Work with a team that values 
              innovation, impact, and integrity.
            </p>
          </div>
        </section>

        <main className="careers-main-content">
          {/* Open Positions Section */}
          <section className="open-positions-section">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-intro">
              We're looking for passionate individuals to join our team. Each role offers 
              the chance to make a real impact on how millions of people find work.
            </p>
            
            <div className="positions-grid">
              <div className="position-card">
                <div className="position-header">
                  <h3 className="position-title">Senior Software Engineer</h3>
                  <span className="position-type">Full-time • Remote</span>
                </div>
                <p className="position-description">
                  Build scalable systems using React, Node.js, and TypeScript. Work on 
                  features that directly impact user trust and platform reliability.
                </p>
                <div className="position-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">TypeScript</span>
                </div>
                <a href="mailto:careers@ogera.com?subject=Senior Software Engineer" className="position-apply-btn">
                  Apply Now
                </a>
              </div>

              <div className="position-card">
                <div className="position-header">
                  <h3 className="position-title">Product Designer</h3>
                  <span className="position-type">Full-time • Hybrid</span>
                </div>
                <p className="position-description">
                  Design intuitive experiences that help job seekers navigate our platform 
                  with confidence. Lead user research and design system development.
                </p>
                <div className="position-tags">
                  <span className="tag">UI/UX</span>
                  <span className="tag">Research</span>
                  <span className="tag">Figma</span>
                </div>
                <a href="mailto:careers@ogera.com?subject=Product Designer" className="position-apply-btn">
                  Apply Now
                </a>
              </div>

              <div className="position-card">
                <div className="position-header">
                  <h3 className="position-title">Growth Marketing Manager</h3>
                  <span className="position-type">Full-time • Remote</span>
                </div>
                <p className="position-description">
                  Drive user acquisition and engagement through data-driven strategies. 
                  Own campaigns from concept to execution across multiple channels.
                </p>
                <div className="position-tags">
                  <span className="tag">Marketing</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">SEO</span>
                </div>
                <a href="mailto:careers@ogera.com?subject=Growth Marketing Manager" className="position-apply-btn">
                  Apply Now
                </a>
              </div>

              <div className="position-card">
                <div className="position-header">
                  <h3 className="position-title">Customer Success Specialist</h3>
                  <span className="position-type">Full-time • Remote</span>
                </div>
                <p className="position-description">
                  Help users get the most from our platform. Build relationships, solve 
                  problems, and gather insights to improve our product.
                </p>
                <div className="position-tags">
                  <span className="tag">Support</span>
                  <span className="tag">Communication</span>
                  <span className="tag">CRM</span>
                </div>
                <a href="mailto:careers@ogera.com?subject=Customer Success Specialist" className="position-apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </section>

          {/* Culture & Values Section */}
          <section className="culture-section">
            <h2 className="section-title">Our Culture & Values</h2>
            <div className="culture-content">
              <div className="culture-text">
                <p>
                  At Ogera, we've built a culture around trust—both in our product and 
                  in how we work together. We believe in transparency, autonomy, and 
                  giving people the space to do their best work.
                </p>
                <p>
                  Our team spans multiple time zones, reflecting the global nature of 
                  our mission. We value diverse perspectives and know that the best 
                  solutions come from teams that think differently. Whether you're 
                  collaborating on a complex technical challenge or refining our user 
                  experience, you'll find colleagues who are curious, supportive, and 
                  committed to excellence.
                </p>
                <p>
                  Work-life balance isn't a perk here—it's fundamental to how we operate. 
                  We set clear goals, trust people to manage their time, and encourage 
                  taking breaks when needed. Sustainable productivity beats burnout every time.
                </p>
              </div>
            </div>
          </section>

          {/* Growth & Benefits Section */}
          <section className="benefits-detailed-section">
            <h2 className="section-title">Growth & Benefits</h2>
            <div className="benefits-detailed-grid">
              <div className="benefit-item">
                <h4 className="benefit-item-title">Competitive Compensation</h4>
                <p>Market-rate salaries with equity options for key roles</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Health & Wellness</h4>
                <p>Comprehensive health insurance and wellness programs</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Flexible Work</h4>
                <p>Remote-first with flexible hours and location options</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Learning Budget</h4>
                <p>Annual professional development and learning stipend</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Time Off</h4>
                <p>Generous paid time off, holidays, and parental leave</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Team Events</h4>
                <p>Annual retreats and regular team-building activities</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Equipment</h4>
                <p>Latest technology and tools to do your best work</p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item-title">Equity</h4>
                <p>Stock options for eligible roles to share in our success</p>
              </div>
            </div>
          </section>

          {/* How to Apply Section */}
          <section className="apply-section">
            <div className="apply-container">
              <h2 className="apply-title">Ready to Join Us?</h2>
              <p className="apply-description">
                Send your resume and a brief note about why you're excited about Ogera 
                to <a href="mailto:careers@ogera.com">careers@ogera.com</a>. We review 
                all applications and typically respond within two weeks.
              </p>
              <a href="mailto:careers@ogera.com" className="apply-cta-btn">
                Get in Touch
              </a>
            </div>
          </section>

          {/* Diversity & Inclusion */}
          <section className="diversity-section">
            <h2 className="section-title">Diversity & Inclusion</h2>
            <p className="diversity-text">
              We're committed to building a team that reflects the diverse global community 
              we serve. Ogera is an equal opportunity employer. We welcome applicants from 
              all backgrounds, experiences, and perspectives, and we do not discriminate 
              based on race, religion, color, national origin, gender, sexual orientation, 
              age, marital status, or disability status.
            </p>
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
