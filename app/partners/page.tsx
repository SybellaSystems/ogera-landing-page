"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/NavbarWrapper";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import "./partners.css";

const partnersTopLeft = [
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
];

const partnersMidLeft = [
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
];

const partnersBottomLeft = [
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
];

const partnersTopRight = [
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
];

const partnersMidRight = [
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
];

const partnersBottomRight = [
  { name: "Sybella", logo: "Sybella" },
  { name: "Ogera", logo: "Ogera" },
  { name: "Sybella", logo: "Sybella" },
];

export default function PartnersPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={showBanner ? "partners-banner-active" : ""}>
      {showBanner && (
        <div className="partners-alert-banner">
          <div className="partners-alert-inner">
            <div className="partners-alert-icon-wrap">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4 4.6c.4-.2.6.1.6.4v14c0 .3-.2.6-.6.4L13 15H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8l8.4-4.4z"/>
                <path d="M5.5 15l1.2 4.5a1.2 1.2 0 0 0 2.3-.3L8 15"/>
              </svg>
            </div>
            <span className="partners-alert-text">
              Join us in shaping the future of work across Africa.{" "}
              <Link href="/contact" className="partners-alert-link">
                Become a Partner
              </Link>
            </span>
          </div>
          <button
            className="partners-alert-close"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss banner"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
      <Navbar solid />
      <main className="partners-page">
        <section className="partners-hero">
          <h1 className="partners-title">Technologies & Partners with Ogera</h1>
          <p className="partners-description">
            Our goals are ambitious and can only be achieved in partnership with others.
            We work with a range of technology partners who help us make changes for
            job seekers and employers across Africa.
          </p>
        </section>

        <section className="partners-honeycomb">
          {/* Left Side */}
          <div className="honeycomb-left">
            <div className="honeycomb-row row-1">
              {partnersTopLeft.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
            <div className="honeycomb-row row-2">
              {partnersMidLeft.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
            <div className="honeycomb-row row-3">
              {partnersBottomLeft.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div className="honeycomb-center">
            <div className="center-cube">
              <Image
                src="/ogera_logo-removebg-preview.png"
                width={80}
                height={80}
                alt="Ogera Logo"
                className="center-logo"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="honeycomb-right">
            <div className="honeycomb-row row-1">
              {partnersTopRight.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
            <div className="honeycomb-row row-2">
              {partnersMidRight.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
            <div className="honeycomb-row row-3">
              {partnersBottomRight.map((partner, i) => (
                <div key={i} className="partner-hex">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="partners-info">
          <div className="info-card">
            <div className="info-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Become a Partner</h3>
            <p>Join us in connecting African talent with global opportunities.</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3>Technology Integration</h3>
            <p>We leverage cutting-edge technology to power our platform.</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>Sponsor Programs</h3>
            <p>Support scholarships and training programs for job seekers.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="partners-cta">
          <div className="partners-cta-inner">
            <div className="partners-cta-text">
              <h2>Interested in Partnering with Ogera?</h2>
              <p>Let&apos;s build the future of work in Africa together. Reach out to explore partnership opportunities.</p>
            </div>
            <div className="partners-cta-buttons">
              <Link href="/contact" className="partners-cta-primary">Get in Touch</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
