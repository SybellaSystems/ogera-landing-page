"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./leaderboard.css";

export default function LeaderboardPage() {
  return (
    <>
      <Navbar />
      <main className="coming-soon-page">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L8.5 17L9.5 13L6.5 10.5L10.5 10L12 6.5L13.5 10L17.5 10.5L14.5 13L15.5 17L12 15Z" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#7F56D9" strokeWidth="2"/>
            </svg>
          </div>
          <h1>Leaderboard</h1>
          <p className="coming-soon-subtitle">Coming Soon</p>
          <p className="coming-soon-description">
            Track top performers and see how you rank among other professionals.
            Our leaderboard will showcase achievements and help you stay motivated!
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
