"use client";

import "./Contact.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function ContactSection() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="contact">
      {/* --- Contact Information Section --- */}
      <section className="contact-info-section">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">Contact information</p>

        <div className="contact-cards-container">
          {/* Card 1: Location */}
          <div className="contact-card">
            <span className="icon location-icon">
              <MapPinIcon className="h-6 w-6" />
            </span> 

            <div className="card-details">
              <p className="card-header">Find us</p>
              <p className="card-content">Kigali, Rwanda</p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="contact-card">
            <span className="icon call-icon">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <div className="card-details">
              <p className="card-header">Call us</p>
              <p className="card-content">+250 783 123 456</p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="contact-card">
            <span className="icon mail-icon">
              <EnvelopeIcon className="h-6 w-6" />
            </span>
            <div className="card-details">
              <p className="card-header">Mail us</p>
              <p className="card-content">ma@example.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer Section --- */}
      <footer className="main-footer">
        <div className="footer-links">
          <Link href="/terms">Terms and Conditions</Link>
          <span>|</span>
          <Link href="/privacy-policy">Privacy policy</Link>
          <span>|</span>
          {isLandingPage ? (
            <button type="button" onClick={scrollToContact} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}>Contact Us</button>
          ) : (
            <Link href="/#contact">Contact Us</Link>
          )}
        </div>
      </footer>
    </div>
  );
}

export default ContactSection;