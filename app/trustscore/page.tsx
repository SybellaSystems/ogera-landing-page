"use client";

import { useState, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./trustscore.css";

const trustDimensions = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "Intelligence",
    description: "Measures cognitive abilities like reasoning, problem-solving, and adaptability.",
    weight: "40%",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    ),
    title: "Experience",
    description: "Reflects applied knowledge, resilience, and real-world contributions.",
    weight: "35%",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Interaction",
    description: "Captures communication skills, social intelligence, and collaboration.",
    weight: "25%",
  },
];

const scoreDescriptions = [
  {
    range: "85-100",
    label: "Exceptional",
    color: "#22C55E",
    description: "Outstanding ability across all dimensions, trusted for leadership and innovation.",
  },
  {
    range: "70-84",
    label: "Competent",
    color: "#84CC16",
    description: "Reliable and skilled with strong application of knowledge and good communication.",
  },
  {
    range: "55-69",
    label: "Developing",
    color: "#F59E0B",
    description: "Shows potential; requires further growth in experience and interaction.",
  },
  {
    range: "Below 55",
    label: "Emerging",
    color: "#EF4444",
    description: "Limited demonstrated capability; needs significant development and engagement.",
  },
];

const benefits = [
  {
    title: "For Individuals",
    items: [
      "Receive a holistic assessment of your capabilities",
      "Identify areas for growth and development",
      "Build credibility with transparent metrics",
      "Track your progress over time",
      "Enhance your professional profile",
    ],
  },
  {
    title: "For Organizations",
    items: [
      "Evaluate candidates comprehensively",
      "Identify high-potential talent",
      "Promote growth and development",
      "Encourage trust and transparency",
      "Make data-driven decisions",
    ],
  },
];

const faqs = [
  {
    question: "How is the TrustScore calculated?",
    answer: "It's computed using three primary factors: Intelligence (40%), Experience (35%), and Interaction (25%). The score updates dynamically with new data.",
  },
  {
    question: "Can I improve my TrustScore?",
    answer: "Yes! By enhancing your skills, gaining practical experience, and engaging positively with others, you can increase your score over time.",
  },
  {
    question: "What does my TrustScore mean?",
    answer: "It reflects your overall ability, reliability, and social competence, helping others understand your potential and track record.",
  },
  {
    question: "Is TrustScore confidential?",
    answer: "The overall score is visible publicly, but detailed breakdowns are private and accessible only to you.",
  },
  {
    question: "What if I have a low TrustScore?",
    answer: "Focus on improving your skills, gaining experience, and engaging positively to boost your trustworthiness and score.",
  },
];

export default function TrustScorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!gridRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 24;
    gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!gridRef.current) return;
    gridRef.current.style.transform = "translate(0px, 0px)";
  }, []);

  return (
    <>
      <Navbar />
      <main className="trustscore-page">
        {/* Hero Section */}
        <section className="trustscore-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="trustscore-hero-grid" ref={gridRef} />
          <div className="hero-content">
            <h1>Building Trust in Every Capability</h1>
            <p>
              The TrustScore™ System provides a comprehensive, data-driven assessment of human potential. It evaluates Intelligence, Experience, and Interaction to offer a unified view of trustworthiness and growth.
            </p>
            <div className="hero-score-demo">
              <div className="score-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="score-bg" cx="50" cy="50" r="45"/>
                  <circle className="score-progress" cx="50" cy="50" r="45"/>
                </svg>
                <div className="score-value">
                  <span className="score-number">78</span>
                  <span className="score-label">Competent</span>
                </div>
              </div>
              <div className="score-info">
                <h3>Example TrustScore</h3>
                <p>A score of 78 indicates a reliable individual with strong capabilities and good communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="section-header">
            <h2>How TrustScore Works</h2>
            <p>Evaluating human capability across three core dimensions: Intelligence, Experience, and Interaction.</p>
          </div>

          <div className="factors-grid">
            {trustDimensions.map((dim, index) => (
              <div key={index} className="factor-card">
                <div className="factor-icon">{dim.icon}</div>
                <div className="factor-weight">{dim.weight}</div>
                <h3>{dim.title}</h3>
                <p>{dim.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Score Ranges */}
        <section className="score-ranges">
          <div className="section-header">
            <h2>Understanding Score Ranges</h2>
            <p>Interpret what each TrustScore range signifies about human capability and trustworthiness.</p>
          </div>

          <div className="ranges-container">
            {scoreDescriptions.map((desc, index) => (
              <div key={index} className="range-card">
                <div className="range-header" style={{ borderColor: desc.color }}>
                  <span className="range-value" style={{ color: desc.color }}>{desc.range}</span>
                  <span className="range-label" style={{ backgroundColor: desc.color }}>{desc.label}</span>
                </div>
                <p>{desc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-header">
            <h2>Benefits of the TrustScore System</h2>
            <p>Creating value for individuals and organizations through transparent, holistic evaluation.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <ul>
                  {benefit.items.map((item, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
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
        <section className="trustscore-faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Learn more about the TrustScore™ System and how it measures human capability.</p>
          </div>

          <div className="trustscore-faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`trustscore-faq-item${openFaq === index ? " open" : ""}`}>
                <button
                  className="trustscore-faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="trustscore-faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="trustscore-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}