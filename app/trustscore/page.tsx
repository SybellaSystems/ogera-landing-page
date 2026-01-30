"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./trustscore.css";

export default function TrustScorePage() {
  return (
    <>
      <Navbar />
      <main className="coming-soon-page">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>About TrustScore</h1>
          <p className="coming-soon-subtitle">Coming Soon</p>
          <p className="coming-soon-description">
            Learn how our TrustScore system helps verify employers and protect job seekers.
            We're building a safer job marketplace for everyone.
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
