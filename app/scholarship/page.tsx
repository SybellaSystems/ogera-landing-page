"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./scholarship.css";

export default function ScholarshipPage() {
  return (
    <>
      <Navbar />
      <main className="coming-soon-page">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 12L2 7V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7L12 12Z" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="14" r="2" fill="#7F56D9"/>
            </svg>
          </div>
          <h1>Scholarship Gateway</h1>
          <p className="coming-soon-subtitle">Coming Soon</p>
          <p className="coming-soon-description">
            Discover scholarship opportunities designed to help African students and professionals
            advance their education and careers. Stay tuned!
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
