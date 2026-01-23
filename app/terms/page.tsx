"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./terms.css";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
        <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>
        
        <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
          <div className="terms-container">
            <h1>Terms of Service</h1>

            <div className="terms-content">
              <p>
                Welcome to Ogera. By using our platform, you agree to comply with the following
                Terms of Service. These terms govern your usage of job listings, applications,
                and any features available in the application.
              </p>

              <section>
                <h2>1. User Responsibilities</h2>
                <p>
                  Users must provide accurate and genuine information. Providing misleading or
                  fake data may result in account suspension. You are responsible for maintaining
                  the confidentiality of your account credentials and for all activities that
                  occur under your account.
                </p>
              </section>

              <section>
                <h2>2. Platform Usage</h2>
                <p>
                  You agree not to misuse the platform or engage in harmful activities or abuse.
                  This includes but is not limited to: attempting to gain unauthorized access,
                  interfering with the proper functioning of the platform, or engaging in any
                  fraudulent activities.
                </p>
              </section>

              <section>
                <h2>3. Job Listings and Applications</h2>
                <p>
                  Employers must ensure all job listings are legitimate and accurately represent
                  the position. Job seekers must submit truthful applications and resumes.
                  Ogera reserves the right to remove any fraudulent or misleading listings or
                  applications without prior notice.
                </p>
              </section>

              <section>
                <h2>4. Payments and Fees</h2>
                <p>
                  Payments are handled by third-party payment processors. Ogera does not handle
                  payment disputes directly. Any subscription fees or service charges are
                  non-refundable unless otherwise stated. Users are responsible for all
                  applicable taxes.
                </p>
              </section>

              <section>
                <h2>5. Account Security</h2>
                <p>
                  You are responsible for keeping your login credentials secure. Notify us
                  immediately if you suspect unauthorized access to your account. We recommend
                  using strong passwords and enabling two-factor authentication where available.
                </p>
              </section>

              <section>
                <h2>6. Intellectual Property</h2>
                <p>
                  All content on the Ogera platform, including logos, text, graphics, and
                  software, is the property of Ogera or its content suppliers and is protected
                  by intellectual property laws. Users may not reproduce, distribute, or create
                  derivative works without explicit permission.
                </p>
              </section>

              <section>
                <h2>7. Prohibited Conduct</h2>
                <p>
                  Users may not use the platform for illegal purposes, post offensive or
                  discriminatory content, spam other users, or attempt to scrape or harvest
                  data. Violations may result in immediate account termination and legal action.
                </p>
              </section>

              <section>
                <h2>8. Limitation of Liability</h2>
                <p>
                  Ogera is not liable for any indirect, incidental, or consequential damages
                  arising from your use of the platform. We do not guarantee the accuracy or
                  reliability of job listings or user-generated content. Use the platform at
                  your own risk.
                </p>
              </section>

              <section>
                <h2>9. Termination</h2>
                <p>
                  Ogera may suspend or terminate accounts violating platform rules without
                  notice. Users may also delete their accounts at any time. Upon termination,
                  you lose access to all account data and content.
                </p>
              </section>

              <section>
                <h2>10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Users
                  will be notified of significant changes via email or platform notification.
                  Continued use of the platform after changes constitutes acceptance of the
                  new terms.
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
