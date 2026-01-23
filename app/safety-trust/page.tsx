"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./safety-trust.css";

export default function SafetyTrustPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="safety-container">
          <h1>Safety & Trust</h1>

        <div className="safety-content">
          <p>
            Your safety and trust are our top priorities. At Ogera, we are committed to
            maintaining a secure, transparent, and trustworthy platform for all users.
            Learn about our safety measures, security practices, and how we protect your
            information and interests.
          </p>

          <section>
            <h2>Data Protection</h2>
            <p>
              We implement industry-leading security measures to protect your personal
              information. All data is encrypted both in transit and at rest. We never
              sell your information to third parties and strictly control access to your
              data. Our systems undergo regular security audits and compliance checks.
            </p>
          </section>

          <section>
            <h2>Verified Employers</h2>
            <p>
              All companies on Ogera go through a verification process before posting jobs.
              We verify business credentials, check company legitimacy, and monitor for
              suspicious activity. This helps ensure that job postings are from genuine
              employers looking to hire qualified candidates.
            </p>
          </section>

          <section>
            <h2>Secure Payments</h2>
            <p>
              All payment transactions on Ogera are processed through secure, PCI-compliant
              payment gateways. We never store complete credit card information on our
              servers. Your financial data is protected with bank-level encryption, and
              we support secure payment methods including mobile money services.
            </p>
          </section>

          <section>
            <h2>Privacy Controls</h2>
            <p>
              You have full control over your privacy settings. Choose what information
              is visible on your profile, who can contact you, and how your data is used.
              You can download your data, request deletion, or modify your preferences
              at any time through your account settings.
            </p>
          </section>

          <section>
            <h2>Reporting & Moderation</h2>
            <p>
              Report suspicious activity, inappropriate content, or potential scams through
              our reporting system. Our moderation team reviews reports promptly and takes
              appropriate action. We have zero tolerance for fraudulent behavior, harassment,
              or violations of our community guidelines.
            </p>
          </section>

          <section>
            <h2>Identity Verification</h2>
            <p>
              We offer optional identity verification for users who want to build additional
              trust. Verified profiles receive a trust badge and may have better visibility
              to employers. The verification process is secure, confidential, and helps
              maintain the integrity of our platform.
            </p>
          </section>

          <section>
            <h2>Safe Communication</h2>
            <p>
              All communication between users and employers should occur through Ogera's
              platform messaging system. This allows us to monitor for scams, protect you
              from fraud, and provide support if issues arise. Be cautious of requests to
              move conversations off-platform early in the hiring process.
            </p>
          </section>

          <section>
            <h2>Trust & Safety Resources</h2>
            <p>
              Access our comprehensive safety guides, recognize common scams, learn best
              practices for remote work, and understand warning signs of fraudulent job
              postings. Stay informed and protect yourself. Report concerns to
              safety@ogera.com for immediate assistance.
            </p>
          </section>
        </div>
      </div>
      </main>

      <footer className="main-footer">
        <div className="footer-links">
          <Link href="/terms">Terms and Conditions</Link>
          <span>|</span>
          <Link href="/privacy-policy">Privacy policy</Link>
          <span>|</span>
          <Link href="/#contact">Contact Us</Link>
        </div>
      </footer>

      <Footer />
    </div>
    </>
  );
}
