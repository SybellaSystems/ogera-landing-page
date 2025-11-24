"use client";


import { useState } from 'react';
import './JobListings.css';

function JobListings() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const jobs = [
    {
      category: "Customer Service and Support",
      company: "Stellar business groupe",
      requirement: "English speaks CS",
      time: "6 hours ago"
    },
    {
      category: "Writing, Editing & Content",
      company: "Robertson groupe",
      requirement: "Content Writing",
      time: "2 hours ago"
    },
    {
      category: "Information technology(IT)",
      company: "AJ project",
      requirement: "Automation Expert",
      time: "54 min ago"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % jobs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + jobs.length) % jobs.length);
  };

interface Job {
    category: string;
    company: string;
    requirement: string;
    time: string;
}

const goToSlide = (index: number): void => {
    setCurrentSlide(index);
};

  return (
    <section className="job-listings-section">
      <h2 className="listings-title">Remote Job listings</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="jobs-carousel">
          <div 
            className="jobs-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {jobs.map((job, index) => (
              <div key={index} className="job-card-wrapper">
                <div className="job-card">
                  <div className="job-header">
                    <h3 className="job-category">{job.category}</h3>
                    <button className="arrow-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="job-body">
                    <div className="company-info">
                      <div className="company-avatar"></div>
                      <div>
                        <p className="company-name">{job.company}</p>
                        <p className="job-requirement">{job.requirement}</p>
                      </div>
                    </div>
                    
                    <div className="job-time">
                      <svg className="clock-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#0066CC" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="time-text">{job.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {jobs.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button className="show-more-btn">Show more Jobs</button>

      
    </section>
  );
}

export default JobListings;