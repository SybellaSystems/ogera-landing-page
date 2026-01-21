"use client";


import { useState } from 'react';
import './Hero.css';

function Hero() {
  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-blue animate-line line-1">Find your dream</span>
            <br />
            <span className="title-dark animate-line line-2">Remote Jobs</span>
            <br />
            <span className="title-blue animate-line line-3">with the most</span>
            <br />
            <span className="title-blue animate-line line-4">trusted companies</span>
          </h1>

          <p className="hero-subtitle">
            Stress less . browse and apply to expert verfied,
            <br />
            Scam-free jobs near you and aboard
          </p>

          <button className="hero-cta" onClick={scrollToSearch}>
            Start your remote job search now
          </button>
        </div>

        <div className="hero-visual">
          <span className="plus-decoration plus-1">+</span>
          <span className="plus-decoration plus-2">+</span>
          <span className="plus-decoration plus-3">+</span>
          <span className="plus-decoration plus-4">+</span>
          <span className="plus-decoration plus-5">+</span>

          <div className="hero-image-wrapper">
            <div className="hero-frame"></div>

            <div className="badge badge-remote">100% Remote job</div>
            <div className="badge badge-celebrating">celebrating</div>
            <div className="badge badge-benefits">Great Benefits</div>

            <div className="circle-decoration circle-gray"></div>
            <div className="circle-decoration circle-blue"></div>
            <div className="circle-decoration circle-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
