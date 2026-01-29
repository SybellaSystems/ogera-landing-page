"use client";

import { useState, useEffect } from 'react';
import './Hero.css';
import ParticleCanvas from './ParticleCanvas';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'companies';

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === fullText) {
      // Pause before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      // Pause before starting to type again
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
      {/* Particle Background */}
      <div className="particle-container">
        <ParticleCanvas
          particleCount={250}
          maxDistance={100}
          speed={0.4}
        />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-blue animate-line line-1">Find your dream</span>
            <br />
            <span className="title-dark animate-line line-2">Remote Jobs</span>
            <br />
            <span className="title-blue animate-line line-3">with the most</span>
            <br />
            <span className="title-blue animate-line line-4">
              trusted <span className="typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </span>
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
