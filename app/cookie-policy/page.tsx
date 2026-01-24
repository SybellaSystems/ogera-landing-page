"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./cookie-policy.css";

export default function CookiePolicyPage() {
  const [showManage, setShowManage] = useState(false);
  const [preferences, setPreferences] = useState({
    visitor: false,
    analytics: false,
    advertising: false,
  });

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Navbar />
      <div className="cookie-page">
        <div className="cookie-card">
          {!showManage ? (
            <>
              <h1>Cookies Policy</h1>

              <div className="cookie-text">
                <p>
                  We use our own cookies, as well as those of third parties, for individual as well as
                  repeated sessions, in order to make the navigation of our website easy and safe for
                  our users.
                </p>
                <p>
                  In turn, we use cookies to measure and obtain statistical data about the navigation of
                  the users. You can configure and accept the use of the cookies, and modify your
                  consent options, at any time. You can read more information about our{" "}
                  <Link href="/privacy-policy" className="cookie-link">Privacy Policy</Link>.
                </p>
                <p>
                  We put no restrictions on what you share. However, we have some community guidelines
                  that must be taken into consideration. If you don&apos;t, you may find your thoughts
                  removed and/or your account disabled. Help us to keep Ogera awesome!
                </p>
              </div>

              <div className="cookie-actions">
                <Link href="/" className="cookie-accept-btn">Accept All</Link>
                <button className="cookie-manage-btn" onClick={() => setShowManage(true)}>
                  Manage cookies
                </button>
              </div>
            </>
          ) : (
            <>
              <h1>Cookies Configuration</h1>

              <p className="cookie-config-desc">
                We use our own cookies, as well as those of third parties, for individual as well as
                repeated sessions, in order to make the navigation of our website easy and safe for our
                users.
              </p>

              <div className="cookie-options">
                {/* Strictly necessary */}
                <div className="cookie-option cookie-option-expanded">
                  <div className="cookie-option-header">
                    <div className="cookie-option-left">
                      <svg className="cookie-chevron open" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="cookie-option-title">Strictly necessary cookies</span>
                    </div>
                    <span className="cookie-always-active">Always active</span>
                  </div>
                  <p className="cookie-option-desc">
                    Necessary cookies help make a website usable by enabling basic function
                    like navigation and access to secure areas fo the website. The website
                    cannot function properly without these cookies.
                  </p>
                </div>

                {/* Visitor preferences */}
                <div className="cookie-option">
                  <div className="cookie-option-header">
                    <div className="cookie-option-left">
                      <svg className="cookie-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="cookie-option-title">Visitor preferences</span>
                    </div>
                    <button
                      className={`cookie-toggle ${preferences.visitor ? "active" : ""}`}
                      onClick={() => togglePreference("visitor")}
                      aria-label="Toggle visitor preferences"
                    >
                      <span className="cookie-toggle-knob"></span>
                    </button>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="cookie-option">
                  <div className="cookie-option-header">
                    <div className="cookie-option-left">
                      <svg className="cookie-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="cookie-option-title">Analytics cookies</span>
                    </div>
                    <button
                      className={`cookie-toggle ${preferences.analytics ? "active" : ""}`}
                      onClick={() => togglePreference("analytics")}
                      aria-label="Toggle analytics cookies"
                    >
                      <span className="cookie-toggle-knob"></span>
                    </button>
                  </div>
                </div>

                {/* Advertising cookies */}
                <div className="cookie-option">
                  <div className="cookie-option-header">
                    <div className="cookie-option-left">
                      <svg className="cookie-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="cookie-option-title">Advertising cookies</span>
                    </div>
                    <button
                      className={`cookie-toggle ${preferences.advertising ? "active" : ""}`}
                      onClick={() => togglePreference("advertising")}
                      aria-label="Toggle advertising cookies"
                    >
                      <span className="cookie-toggle-knob"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="cookie-actions">
                <Link href="/" className="cookie-accept-btn">Accept All</Link>
                <button className="cookie-manage-btn" onClick={() => setShowManage(false)}>
                  Save Settings
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
