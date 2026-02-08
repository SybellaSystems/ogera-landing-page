"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './JobTypes.css';

function JobTypes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const jobTypes = [
    {
      title: "Freelance",
      description: "Work on flexible projects from anywhere. Perfect for students who want to earn while sharpening real-world skills.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Part-time",
      description: "Short-hour jobs that fit into your schedule. No need to sacrifice your studies—balance school and income with ease.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Internship",
      description: "Kickstart your career with internships from trusted companies. Gain hands-on experience and build a professional network while you study.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
        </svg>
      )
    },
    {
      title: "OgeraWin",
      description: "Exclusive Ogera-only tasks and challenges. Compete, showcase your skills, and earn extra rewards for being among the best.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20h10c0-.76-.85-1.25-2.03-1.79C14.47 17.98 14 17.55 14 17v-2.34" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="job-types"
      className={`job-types-section${isVisible ? ' jt-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="job-types-container">
        {/* Left Content */}
        <div className="job-types-content">
          <div className="jt-header">
            <span className="jt-badge">Job Types</span>
            <h2 className="section-title">
              What Kind of Jobs Can You Find on <span className="title-accent">Ogera</span>?
            </h2>
          </div>

          <div className="job-types-list">
            {jobTypes.map((job, index) => (
              <div
                key={index}
                className="job-type-card jt-card-enter"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="job-type-icon-wrap">
                  {job.icon}
                </div>
                <div className="job-type-text">
                  <h3 className="job-type-title">{job.title}</h3>
                  <p className="job-type-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Visual */}
        <div className="job-types-visual">
          <div className="job-circles-container">
            <div className="job-circle circle-j">
              <span>J</span>
            </div>
            <div className="job-circle circle-o">
              <span>O</span>
            </div>
            <div className="job-circle circle-b">
              <span>B</span>
            </div>
            <div className="job-circle circle-s">
              <span>S</span>
            </div>
          </div>
          <Link href="/jobs" className="get-started-btn">Browse Jobs</Link>
        </div>
      </div>
    </section>
  );
}

export default JobTypes;
