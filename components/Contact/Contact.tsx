"use client";

import "./Contact.css";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function ContactSection() {
  return (
    <section id="contact" className="contact-info-section">
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
            <p className="card-content">Rulindo, Rwanda</p>
          </div>
        </div>

        {/* Card 2: Phone */}
        <div className="contact-card">
          <span className="icon call-icon">
            <PhoneIcon className="h-6 w-6" />
          </span>
          <div className="card-details">
            <p className="card-header">Call us</p>
            <p className="card-content">+250 723 776 020</p>
          </div>
        </div>

        {/* Card 3: Email */}
        <div className="contact-card">
          <span className="icon mail-icon">
            <EnvelopeIcon className="h-6 w-6" />
          </span>
          <div className="card-details">
            <p className="card-header">Mail us</p>
            <p className="card-content">ogera@sybellasystems.co.rw</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;