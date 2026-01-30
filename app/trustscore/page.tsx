"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./trustscore.css";

const trustFactors = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Identity Verification",
    description: "Verified government ID, business registration, and contact information.",
    weight: "25%",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Reviews & Feedback",
    description: "Ratings from previous hires and completed job transactions.",
    weight: "30%",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
      </svg>
    ),
    title: "Platform Activity",
    description: "Response rate, hiring history, and engagement on the platform.",
    weight: "20%",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Payment History",
    description: "Timely payments to workers and no disputes or chargebacks.",
    weight: "25%",
  },
];

const scoreRanges = [
  {
    range: "90-100",
    label: "Excellent",
    color: "#22C55E",
    description: "Highly trusted employer with verified credentials and excellent track record.",
  },
  {
    range: "75-89",
    label: "Good",
    color: "#84CC16",
    description: "Reliable employer with positive feedback and consistent platform activity.",
  },
  {
    range: "50-74",
    label: "Fair",
    color: "#F59E0B",
    description: "Moderate trust level - some verifications pending or limited history.",
  },
  {
    range: "Below 50",
    label: "Low",
    color: "#EF4444",
    description: "Exercise caution - unverified or has negative feedback from workers.",
  },
];

const benefits = [
  {
    title: "For Job Seekers",
    items: [
      "Know who you're working for before accepting a job",
      "Avoid scams and fraudulent employers",
      "Make informed decisions based on real data",
      "See employer payment history and reliability",
      "Access verified contact information",
    ],
  },
  {
    title: "For Employers",
    items: [
      "Build credibility and attract top talent",
      "Stand out from unverified competitors",
      "Increase response rates from job seekers",
      "Showcase your positive track record",
      "Access premium features with higher scores",
    ],
  },
];

const faqs = [
  {
    question: "How is TrustScore calculated?",
    answer: "TrustScore is calculated using multiple factors including identity verification (25%), reviews and feedback (30%), platform activity (20%), and payment history (25%). The score updates in real-time as new data becomes available.",
  },
  {
    question: "Can I improve my TrustScore?",
    answer: "Yes! You can improve your TrustScore by completing identity verification, maintaining positive interactions with workers, making timely payments, and staying active on the platform. Consistent positive behavior leads to a higher score over time.",
  },
  {
    question: "How often is TrustScore updated?",
    answer: "TrustScore updates in real-time as new information becomes available. Major factors like reviews and payment history are reflected immediately, while verification status updates once the process is complete.",
  },
  {
    question: "Is TrustScore visible to everyone?",
    answer: "Yes, TrustScore is publicly visible to help job seekers make informed decisions. However, the detailed breakdown is only visible to the account owner to maintain privacy while ensuring transparency.",
  },
  {
    question: "What happens if I have a low TrustScore?",
    answer: "A low TrustScore may affect your visibility to job seekers and limit access to certain features. We recommend completing verification steps and addressing any negative feedback to improve your score.",
  },
];

export default function TrustScorePage() {
  return (
    <>
      <Navbar />
      <main className="trustscore-page">
        {/* Hero Section */}
        <section className="trustscore-hero">
          <div className="hero-content">
            <p>
              TrustScore is our proprietary verification system designed to create a safer
              job marketplace. It helps job seekers identify reliable employers and rewards
              businesses that maintain high standards of trust and transparency.
            </p>
            <div className="hero-score-demo">
              <div className="score-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="score-bg" cx="50" cy="50" r="45"/>
                  <circle className="score-progress" cx="50" cy="50" r="45"/>
                </svg>
                <div className="score-value">
                  <span className="score-number">92</span>
                  <span className="score-label">Excellent</span>
                </div>
              </div>
              <div className="score-info">
                <h3>Example TrustScore</h3>
                <p>A score of 92 indicates a highly trusted employer with verified credentials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="section-header">
            <h2>How TrustScore Works</h2>
            <p>Our comprehensive scoring system evaluates multiple factors to ensure accuracy</p>
          </div>

          <div className="factors-grid">
            {trustFactors.map((factor, index) => (
              <div key={index} className="factor-card">
                <div className="factor-icon">{factor.icon}</div>
                <div className="factor-weight">{factor.weight}</div>
                <h3>{factor.title}</h3>
                <p>{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Score Ranges */}
        <section className="score-ranges">
          <div className="section-header">
            <h2>Understanding Score Ranges</h2>
            <p>Know what each TrustScore range means for your job search</p>
          </div>

          <div className="ranges-container">
            {scoreRanges.map((range, index) => (
              <div key={index} className="range-card">
                <div className="range-header" style={{ borderColor: range.color }}>
                  <span className="range-value" style={{ color: range.color }}>{range.range}</span>
                  <span className="range-label" style={{ backgroundColor: range.color }}>{range.label}</span>
                </div>
                <p>{range.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-header">
            <h2>Benefits of TrustScore</h2>
            <p>How TrustScore creates value for everyone in the marketplace</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <ul>
                  {benefit.items.map((item, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about TrustScore</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
