"use client";

import { useState, useEffect } from 'react';
import './Hero.css';
import GridCanvas from './GridCanvas';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'companies';

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      const timeout = setTimeout(() => setIsDeleting(false), pauseTime);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <GridCanvas />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-blue animate-line line-1">Find your dream</span>
            <br />
            <span className="title-light animate-line line-2">Remote Jobs</span>
            <br />
            <span className="title-blue animate-line line-3">with the most</span>
            <br />
            <span className="title-blue animate-line line-4">
              trusted <span className="typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <div className="hero-actions">
            <button className="hero-cta" onClick={scrollToSearch}>
              Start your remote job search now
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-sphere-wrapper">
            <div className="hero-sphere"></div>
            <div className="hero-sphere-ring"></div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="hero-marquee">
        <div className="marquee-track">
          <span className="marquee-item">✦ Remote Jobs</span>
          <span className="marquee-item">✦ Verified Companies</span>
          <span className="marquee-item">✦ Scam-Free Jobs</span>
          <span className="marquee-item">✦ Global Opportunities</span>
          <span className="marquee-item">✦ Career Growth</span>
          <span className="marquee-item">✦ Trusted Platform</span>
          <span className="marquee-item">✦ Remote Jobs</span>
          <span className="marquee-item">✦ Verified Companies</span>
          <span className="marquee-item">✦ Scam-Free Jobs</span>
          <span className="marquee-item">✦ Global Opportunities</span>
          <span className="marquee-item">✦ Career Growth</span>
          <span className="marquee-item">✦ Trusted Platform</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
