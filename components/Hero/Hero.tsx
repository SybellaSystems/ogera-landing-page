"use client";


import { useState } from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-blue">Find your dream</span>
            <br />
            <span className="title-black">Remote Jobs</span>
            <br />
            <span className="title-blue">with the most</span>
            <br />
            <span className="title-blue">trusted companies</span>
          </h1>
          
          <p className="hero-subtitle">
            Stress less . browse and apply to expert verfied,
            <br />
            Scam-free jobs near you and aboard
          </p>
          
          <button className="hero-cta">
            Start your remote job search now
          </button>
        </div>

        {/* Right Visual Elements */}
        <div className="hero-visual">
          {/* Decorative Plus Signs */}
          <div className="plus-decoration plus-1">+</div>
          <div className="plus-decoration plus-2">+</div>
          <div className="plus-decoration plus-3">+</div>
          <div className="plus-decoration plus-4">+</div>
          <div className="plus-decoration plus-5">+</div>
          
          {/* Main Image Container */}
          <div className="hero-image-wrapper">
            <div className="badge badge-remote">100% Remote job</div>
            <div className="badge badge-benefits">Great Benefits</div>
            
            {/* Large Decorative Circles */}
            <div className="circle-decoration circle-gray"></div>
            <div className="circle-decoration circle-blue"></div>
            <div className="circle-decoration circle-accent"></div>
            
            {/* Main Hero Image */}
            <div className="hero-image">
  <img 
    src="/" 
    alt="Happy remote worker celebrating" 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
    }}
  />
</div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Hero;