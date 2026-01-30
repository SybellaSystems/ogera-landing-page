"use client";

import Navbar from "@/components/Navbar/Navbar";
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
  return (
    <>
      <Navbar />
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
                src="/ogera.png"
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
            <h3>Become a Partner</h3>
            <p>Join us in connecting African talent with global opportunities.</p>
          </div>
          <div className="info-card">
            <h3>Technology Integration</h3>
            <p>We leverage cutting-edge technology to power our platform.</p>
          </div>
          <div className="info-card">
            <h3>Sponsor Programs</h3>
            <p>Support scholarships and training programs for job seekers.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
