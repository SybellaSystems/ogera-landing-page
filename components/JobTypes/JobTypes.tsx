"use client";


import { useState } from 'react';

import './JobTypes.css';

function JobTypes() {
  const jobTypes = [
    {
      title: "Freelance",
      description: "Work on flexible projects from anywhere. Perfect for students who want to earn while sharpening real-world skills."
    },
    {
      title: "Part-time",
      description: "Short-hour jobs that fit into your schedule. No need to sacrifice your studies—balance school and income with ease."
    },
    {
      title: "Internship",
      description: "Kickstart your career with internships from trusted companies. Gain hands-on experience and build a professional network while you study."
    },
    {
      title: "OgeraWin",
      description: "Exclusive Ogera-only tasks and challenges. Compete, showcase your skills, and earn extra rewards for being among the best."
    }
  ];

  return (
    <section className="job-types-section">
      <div className="job-types-container">
        {/* Left Content */}
        <div className="job-types-content">
          <h2 className="section-title">
            What Kind of Jobs Can You Find on Ogera?
          </h2>

          <div className="job-types-list">
            {jobTypes.map((job, index) => (
              <div key={index} className="job-type-item">
                <div className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#0066CC"/>
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="job-type-text">
                  <h3 className="job-type-title">{job.title}</h3>
                  <p className="job-type-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="get-started-btn">Get Started</button>
        </div>

        {/* Right Visual */}
        <div className="job-types-visual">
          {/* Decorative Stars */}
          <div className="star-group star-group-1">
            <span className="star star-blue">★</span>
            <span className="star star-cyan">★</span>
            <span className="star star-pink">★</span>
          </div>
          
          <div className="star-group star-group-2">
            <span className="star star-blue">★</span>
            <span className="star star-green">★</span>
            <span className="star star-red">★</span>
          </div>

          {/* Blob shapes */}
          <div className="blob-container">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            
            {/* Image Container */}
            <div className="image-frame">
              <div className="placeholder-img">
                <span>Replace with your image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobTypes;