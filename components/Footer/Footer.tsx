"use client";

import Link from "next/link";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <Link href="/" className="footer-brand">
            <img src="/ogera.png" alt="Ogera Logo" className="footer-logo" />
            <div className="footer-brand-text">
              <h3>Ogera</h3>
              <span className="footer-slogan">Find Jobs You Can Trust</span>
            </div>
          </Link>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link href="/help-center">Help Center</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/safety-trust">Safety & Trust</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SybellaSystem. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
