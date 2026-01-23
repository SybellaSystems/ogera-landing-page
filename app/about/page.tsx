"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>

      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="about-container">
          <h1>About Ogera</h1>

        <div className="about-content">
          <p>
            Ogera is a trusted platform connecting job seekers with verified opportunities.
            Our mission is to make the job search process transparent, secure, and accessible
            to everyone. We believe that finding work should be built on trust.
          </p>

          <section>
            <h2>Our Mission</h2>
            <p>
              We are dedicated to creating a world where every job listing is verified and
              every employer is accountable. Ogera uses innovative trust scoring to ensure
              that job seekers can confidently pursue opportunities without fear of scams
              or misleading postings.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>
            <p>
              We envision a global job marketplace where trust is the foundation of every
              connection. By leveraging technology and community feedback, we aim to set
              the standard for transparency in employment platforms worldwide.
            </p>
          </section>

          <section>
            <h2>What We Do</h2>
            <p>
              Ogera provides a platform where employers post verified job listings and
              job seekers can apply with confidence. Our TrustScore system rates employers
              based on their track record, ensuring accountability and helping candidates
              make informed decisions about their career moves.
            </p>
          </section>

          <section>
            <h2>Our Values</h2>
            <p>
              Transparency, integrity, and empowerment are at the core of everything we do.
              We believe in open communication, honest practices, and giving every individual
              the tools they need to succeed in their professional journey.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              Have questions or want to learn more about Ogera? We would love to hear from you.
              Reach out to our team at support@ogera.com or connect with us on social media.
              Together, we can build a more trustworthy job market.
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
