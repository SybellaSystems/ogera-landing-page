"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./privacy-policy.css";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>

        <div className="privacy-content">
          <p>
            At Ogera, we are committed to protecting your privacy and ensuring the security
            of your personal information. This Privacy Policy explains how we collect, use,
            store, and protect your data when you use our platform. By using Ogera, you
            agree to the practices described in this policy.
          </p>

          <section>
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address,
              phone number, work experience, education, skills, and profile details. We also
              collect usage data including your IP address, browser type, device information,
              pages visited, and interactions with our platform. Payment information is
              collected through secure third-party processors.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to provide and improve our services, match you with
              relevant job opportunities, communicate with you about your account and
              applications, process payments, ensure platform security, comply with legal
              obligations, and personalize your experience. We analyze usage data to enhance
              platform performance and user experience.
            </p>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We share your profile
              and application data with employers when you apply for jobs. We may share data
              with service providers who help us operate our platform, with law enforcement
              when legally required, and with your consent for specific purposes. All third
              parties are contractually obligated to protect your data.
            </p>
          </section>

          <section>
            <h2>Data Storage and Security</h2>
            <p>
              Your data is stored on secure servers with encryption both in transit and at
              rest. We implement industry-standard security measures including firewalls,
              access controls, and regular security audits. While we strive to protect your
              information, no system is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2>Your Rights and Choices</h2>
            <p>
              You have the right to access, update, or delete your personal information at
              any time through your account settings. You can control privacy settings,
              manage communication preferences, opt out of marketing emails, and request a
              copy of your data. You may also request data deletion, subject to legal
              retention requirements.
            </p>
          </section>

          <section>
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, remember
              your preferences, analyze usage patterns, and provide targeted content. You can
              control cookie settings through your browser, though disabling cookies may
              affect platform functionality. See our Cookie Policy for detailed information.
            </p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              Our platform may contain links to external websites or services. We are not
              responsible for the privacy practices of these third parties. We encourage you
              to review the privacy policies of any external sites you visit. Exercise caution
              when sharing personal information on third-party platforms.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Ogera is not intended for users under 18 years of age. We do not knowingly
              collect personal information from children. If we discover that we have
              inadvertently collected data from a child, we will delete it promptly. Parents
              or guardians who believe their child has provided information should contact us
              immediately.
            </p>
          </section>

          <section>
            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than
              your own. We ensure appropriate safeguards are in place for international data
              transfers, complying with applicable data protection laws including GDPR and
              other regional regulations. We use standard contractual clauses approved by
              relevant authorities.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our
              practices or legal requirements. We will notify you of significant changes via
              email or platform notification. Your continued use of Ogera after changes
              constitutes acceptance of the updated policy. Last updated: January 2026.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data
              practices, please contact our Data Protection Officer at privacy@ogera.com.
              For general inquiries, reach us at support@ogera.com. We are committed to
              addressing your privacy concerns promptly and transparently.
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
