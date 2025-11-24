"use client";

import "./Contact.css";

function ContactSection() {
  return (
    <div>
      {/* --- Contact Information Section --- */}
      <section className="contact-info-section">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">Contact information</p>

        <div className="contact-cards-container">
          {/* Card 1: Location */}
          <div className="contact-card">
            <span className="icon location-icon">📍</span> 

            <div className="card-details">
              <p className="card-header">Find us</p>
              <p className="card-content">Kigali, Rwanda</p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="contact-card">
            <span className="icon call-icon">📞</span>
            <div className="card-details">
              <p className="card-header">Call us</p>
              <p className="card-content">+250 783 123 456</p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="contact-card">
            <span className="icon mail-icon">✉️</span>
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
          <a href="#">Terms and Conditions</a>
          <span>|</span>
          <a href="#">Privacy policy</a>
          <span>|</span>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default ContactSection;