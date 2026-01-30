"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./partners.css";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="coming-soon-page">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Partners and Sponsors</h1>
          <p className="coming-soon-subtitle">Coming Soon</p>
          <p className="coming-soon-description">
            We're working on something amazing! Our partners and sponsors page will showcase
            the incredible organizations helping African talent connect with opportunities.
          </p>
          <Link href="/" className="back-home-btn">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
