"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./contact.css";
import Link from "next/link";
import { FormEvent, useState, useRef, useEffect } from "react";

// African countries with dial codes
const countries = [
  { code: 'RW', name: 'Rwanda', dial: '+250', flag: '🇷🇼' },
  { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪' },
  { code: 'UG', name: 'Uganda', dial: '+256', flag: '🇺🇬' },
  { code: 'TZ', name: 'Tanzania', dial: '+255', flag: '🇹🇿' },
  { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬' },
  { code: 'GH', name: 'Ghana', dial: '+233', flag: '🇬🇭' },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
  { code: 'ET', name: 'Ethiopia', dial: '+251', flag: '🇪🇹' },
  { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
  { code: 'MA', name: 'Morocco', dial: '+212', flag: '🇲🇦' },
  { code: 'DZ', name: 'Algeria', dial: '+213', flag: '🇩🇿' },
  { code: 'TN', name: 'Tunisia', dial: '+216', flag: '🇹🇳' },
  { code: 'SN', name: 'Senegal', dial: '+221', flag: '🇸🇳' },
  { code: 'CI', name: 'Ivory Coast', dial: '+225', flag: '🇨🇮' },
  { code: 'CM', name: 'Cameroon', dial: '+237', flag: '🇨🇲' },
  { code: 'CD', name: 'DR Congo', dial: '+243', flag: '🇨🇩' },
  { code: 'AO', name: 'Angola', dial: '+244', flag: '🇦🇴' },
  { code: 'MZ', name: 'Mozambique', dial: '+258', flag: '🇲🇿' },
  { code: 'ZW', name: 'Zimbabwe', dial: '+263', flag: '🇿🇼' },
  { code: 'BW', name: 'Botswana', dial: '+267', flag: '🇧🇼' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real implementation this is where we'd send the form data.
    console.log('Form submitted:', { ...formData, countryCode: selectedCountry.dial });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Navbar />

      <div className="contact-page-wrapper">
        <main className="contact-main">
          <div className="contact-container">
            {/* Left Side - Contact Information */}
            <div className="contact-info-section">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-description">
                Email, call, or complete the form to learn how
                Ogera can solve your hiring and job search needs.
              </p>

              <div className="contact-details">
                <a href="mailto:info@ogera.com" className="contact-email">info@ogera.com</a>
                <a href="tel:+250783123456" className="contact-phone">+250 783 123 456</a>
                <span className="contact-support-label">Customer Support</span>
              </div>

              {/* Support Categories */}
              <div className="contact-categories">
                <div className="contact-category">
                  <h3>Customer Support</h3>
                  <p>
                    Our support team is available
                    around the clock to address any
                    concerns or queries you may have.
                  </p>
                </div>

                <div className="contact-category">
                  <h3>Feedback and Suggestions</h3>
                  <p>
                    We value your feedback and are
                    continuously working to improve
                    Ogera. Your input is crucial in
                    shaping the future of Ogera.
                  </p>
                </div>

                <div className="contact-category">
                  <h3>Media Inquiries</h3>
                  <p>
                    For media-related questions or
                    press inquiries, please contact us
                    at media@ogera.com.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form Card */}
            <div className="contact-form-card">
              <div className="form-card-header">
                <h2>Get in Touch</h2>
                <p>You can reach us anytime</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="fullName">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone <span className="required">*</span></label>
                  <div className="phone-input-wrapper" ref={dropdownRef}>
                    <div
                      className={`country-code ${isDropdownOpen ? 'active' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="flag">{selectedCountry.flag}</span>
                      <span>{selectedCountry.dial}</span>
                      <svg className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <div className="country-dropdown">
                        {countries.map((country) => (
                          <div
                            key={country.code}
                            className={`country-option ${selectedCountry.code === country.code ? 'selected' : ''}`}
                            onClick={() => handleCountrySelect(country)}
                          >
                            <span className="flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                            <span className="country-dial">{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>

                <p className="form-terms">
                  By contacting us, you agree to our{" "}
                  <Link href="/terms">Terms of service</Link> and{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
