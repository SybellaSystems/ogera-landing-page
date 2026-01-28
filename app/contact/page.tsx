"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/button";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import "./contact.css";
import Link from "next/link";
import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real implementation this is where we'd send the form data.
  };

  return (
    <>
      <Navbar />

      <div className="contact-page-wrapper">
        {/* Hero / Banner */}
        <section className="contact-hero">
          <div className="contact-hero-overlay" />

          <div className="contact-hero-inner">
            <div className="contact-hero-copy">
              <h1 className="contact-hero-title">Contact Us</h1>
              <p className="contact-hero-subtitle">
                Is it for customer support, a partnership opportunity, or a
                product question? We&apos;re here to help and would love to
                hear from you.
              </p>
            </div>

            <div className="contact-hero-icons">
              <div className="contact-hero-icon-circle">
                <PhoneIcon className="contact-hero-icon" />
              </div>
              <div className="contact-hero-icon-circle">
                <EnvelopeIcon className="contact-hero-icon" />
              </div>
              <div className="contact-hero-icon-circle">
                <MapPinIcon className="contact-hero-icon" />
              </div>
            </div>
          </div>
        </section>

        {/* Main content card */}
        <main className="contact-main">
          <section className="contact-card-shell">
            {/* Left: contact information */}
            <div className="contact-card-left">
              <h2 className="contact-section-title">Ways to reach us</h2>

              <div className="contact-details-block">
                <h3 className="contact-details-heading">Ogera HQ</h3>
                <p className="contact-details-text">
                  KG 123 Street, Kigali, Rwanda
                  <br />
                  Phone: +250 783 123 456
                  <br />
                  Email: support@ogera.com
                </p>
              </div>

              <div className="contact-details-block">
                <h3 className="contact-details-heading">Customer Support</h3>
                <p className="contact-details-text">
                  Monday – Friday, 9:00 AM – 6:00 PM (EAT)
                  <br />
                  We aim to respond to all inquiries within one business day.
                </p>
              </div>

              <div className="contact-map-placeholder">
                <div className="contact-map-header">
                  <span className="contact-map-label">Our office</span>
                  <span className="contact-map-status">View on map</span>
                </div>
                <div className="contact-map-body">
                  <span className="contact-map-pin" />
                  <p className="contact-map-text">
                    Kigali, Rwanda • Growing across Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="contact-card-divider" />

            {/* Right: inquiry form */}
            <div className="contact-card-right">
              <h2 className="contact-section-title">Inquiry form</h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share a few details so we can respond effectively..."
                    required
                  />
                </div>

                <div className="contact-form-footer">
                  <p className="contact-form-note">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy">privacy policy</Link>.
                  </p>

                  <Button type="submit" text="Send message" />
                </div>
              </form>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}


