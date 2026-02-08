"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Features.css";

const hiringSteps = [
  {
    title: "Post a job for free",
    description: "Describe what you need done and the skills required. Your job post reaches thousands of qualified professionals.",
    cta: { label: "Post a Job", href: "/dashboard" },
    gif: "/images/features/post-job.gif",
  },
  {
    title: "Get proposals and hire",
    description: "Review proposals from top talent, compare profiles and ratings, then hire the best match for your project.",
    cta: { label: "Browse Talent", href: "/dashboard" },
    gif: "/images/features/get-proposals.gif",
  },
  {
    title: "Pay when work is done",
    description: "Only release payment when you're satisfied with the work. Our escrow system keeps your funds safe.",
    cta: { label: "Learn More", href: "/dashboard" },
    gif: "/images/features/pay-secure.gif",
  }
];

const findingSteps = [
  {
    title: "Create your free profile",
    description: "Showcase your skills, experience, and portfolio. Stand out to employers with a professional profile.",
    cta: { label: "Create Profile", href: "/dashboard" },
    gif: "/images/features/create-profile.gif",
  },
  {
    title: "Browse and apply to jobs",
    description: "Search thousands of opportunities that match your skills. Apply with one click and track your applications.",
    cta: { label: "Find Jobs", href: "/dashboard" },
    gif: "/images/features/browse-jobs.gif",
  },
  {
    title: "Get hired and get paid",
    description: "Start working on projects you love and receive secure payments directly to your account.",
    cta: { label: "Get Started", href: "/dashboard" },
    gif: "/images/features/get-paid.gif",
  }
];

function Features() {
  const [activeTab, setActiveTab] = useState<"hiring" | "finding">("finding");
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const currentSteps = activeTab === "hiring" ? hiringSteps : findingSteps;

  // Scroll into view detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Re-trigger card animation on tab switch
  useEffect(() => {
    setAnimateCards(false);
    const raf = requestAnimationFrame(() => setAnimateCards(true));
    return () => cancelAnimationFrame(raf);
  }, [activeTab]);

  return (
    <div className="how-it-works-wrapper">
      <section className="how-it-works" ref={sectionRef}>
        <div className="how-it-works-header">
          <h2>How it works</h2>
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "hiring" ? "active" : ""}`}
              onClick={() => setActiveTab("hiring")}
            >
              For hiring
            </button>
            <button
              className={`tab-btn ${activeTab === "finding" ? "active" : ""}`}
              onClick={() => setActiveTab("finding")}
            >
              For finding work
            </button>
          </div>
        </div>

        <div className={`steps-container${animateCards ? ' animate-in' : ''}`}>
          {currentSteps.map((step, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`step-card${animateCards ? ' card-enter' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-visual has-gif">
                <img src={step.gif} alt={step.title} className="step-gif" />
              </div>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <Link href={step.cta.href} className="step-hover-btn">
                  {step.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Features;
