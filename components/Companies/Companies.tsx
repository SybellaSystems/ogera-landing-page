"use client"

import { useState } from 'react';

import './Companies.css';

function Companies() {
  const companies = [
    {
      name: "XYZ company",
      type: "Tech-innovator company",
      rating: "4.6",
      reviews: "30,000",
      image: "https://via.placeholder.com/150/E8E5D8/000000?text=Owl"
    },
    {
      name: "XYZ company",
      type: "Tech-innovator company",
      rating: "4",
      reviews: "18,000",
      image: "https://via.placeholder.com/150/FFFFFF/0066CC?text=Logo"
    },
    {
      name: "XYZ company",
      type: "Tech-innovator company",
      rating: "4.7",
      reviews: "35,000",
      image: "https://via.placeholder.com/150/FFFFFF/4A5568?text=Logo"
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
    <section className="companies-section">
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