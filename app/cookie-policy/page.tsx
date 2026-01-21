"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./cookie-policy.css";

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#083d77] to-[#0066CC] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="cookie-container">
          <h1>Cookie Policy</h1>

        <div className="cookie-content">
          <p>
            This Cookie Policy explains how Ogera uses cookies and similar tracking
            technologies on our platform. By using Ogera, you consent to our use of cookies
            as described in this policy. You can manage your cookie preferences through your
            browser settings at any time.
          </p>

          <section>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help websites remember your preferences, login status, and browsing
              behavior. Cookies enable us to provide a personalized and efficient user
              experience. They can be session cookies (deleted when you close your browser)
              or persistent cookies (remain until expiration or deletion).
            </p>
          </section>

          <section>
            <h2>Types of Cookies We Use</h2>
            <p>
              We use essential cookies required for platform functionality, performance
              cookies to analyze usage and improve our service, functional cookies to
              remember your preferences and settings, targeting cookies for relevant content
              and advertisements, and analytics cookies to understand user behavior. Each
              type serves a specific purpose in enhancing your experience.
            </p>
          </section>

          <section>
            <h2>Essential Cookies</h2>
            <p>
              These cookies are necessary for the platform to function properly. They enable
              core features like user authentication, security, session management, and
              navigation. Without these cookies, certain services cannot be provided. These
              cookies do not collect information for marketing purposes and cannot be
              disabled through our cookie settings.
            </p>
          </section>

          <section>
            <h2>Performance and Analytics Cookies</h2>
            <p>
              We use these cookies to understand how visitors interact with our platform,
              which pages are most popular, and where users encounter errors. This helps us
              improve platform performance and user experience. We may use Google Analytics
              and similar tools that collect anonymous usage data. You can opt out of these
              cookies without affecting platform functionality.
            </p>
          </section>

          <section>
            <h2>Functional Cookies</h2>
            <p>
              These cookies remember your choices and preferences such as language settings,
              timezone, saved searches, and display preferences. They enable personalized
              features and improve your user experience by remembering your settings across
              sessions. Disabling these cookies may result in less personalized functionality.
            </p>
          </section>

          <section>
            <h2>Targeting and Advertising Cookies</h2>
            <p>
              We may use targeting cookies to deliver relevant advertisements and content
              based on your interests and browsing behavior. These cookies help us measure
              advertising effectiveness and provide you with more relevant job recommendations.
              Third-party advertising partners may also use cookies subject to their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages, such
              as analytics providers, social media widgets, and payment processors. We do not
              control these cookies, and they are subject to the respective third party's
              privacy policies. We recommend reviewing their policies to understand their
              cookie practices.
            </p>
          </section>

          <section>
            <h2>Managing Your Cookie Preferences</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers
              allow you to refuse or accept cookies, delete existing cookies, and set
              preferences for certain websites. Note that blocking essential cookies may
              prevent you from accessing certain features. Visit your browser's help section
              for specific instructions on cookie management.
            </p>
          </section>

          <section>
            <h2>Do Not Track Signals</h2>
            <p>
              Some browsers support Do Not Track (DNT) signals. Currently, there is no
              industry standard for responding to DNT signals. We do not alter our data
              collection practices when we receive DNT signals from your browser. We will
              continue to monitor developments in this area and may update our practices
              accordingly.
            </p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in technology,
              legislation, or our business practices. We will notify you of significant
              changes through our platform or via email. Continued use of Ogera after updates
              constitutes acceptance of the revised policy. Last updated: January 2026.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies or this Cookie Policy, please
              contact us at privacy@ogera.com. For general inquiries, reach us at
              support@ogera.com. We are committed to transparency and will address your
              concerns regarding cookies and tracking technologies.
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
