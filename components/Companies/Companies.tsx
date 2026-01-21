"use client"

import { useState } from 'react';

import './Companies.css';

function Companies() {
  const companies = [
    {
      name: "GitHub",
      type: "Software Development",
      rating: "4.6",
      reviews: "30,000",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Slack",
      type: "Communication Platform",
      rating: "4.4",
      reviews: "18,000",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
    },
    {
      name: "GitLab",
      type: "DevOps Platform",
      rating: "4.7",
      reviews: "35,000",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    }
  ];

  // Generate star rating
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">★</span>
      );
    }
    
    return <div className="stars">{stars}</div>;
  };

  return (
    <section id="partners" className="companies-section">
      <h2 className="companies-title">Top companies Hiring for Remote jobs</h2>
      
      <div className="companies-grid">
        {companies.map((company, idx) => (
          <div key={idx} className="company-card">
            <div className="company-logo">
              <img src={company.image} alt={company.name} />
            </div>
            
            <h3 className="company-name">{company.name}</h3>
            <p className="company-type">{company.type}</p>
            
            <div className="company-rating">
              <div className="rating-badge">
                <div className="rating-score">{company.rating}</div>
                <div className="rating-text">out of 5</div>
              </div>
              
              <div className="rating-details">
                <div className="reviews-count">{company.reviews} + Reviews</div>
                <StarRating rating={parseFloat(company.rating)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}

export default Companies;