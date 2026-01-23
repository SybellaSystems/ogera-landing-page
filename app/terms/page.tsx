"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./terms.css";

const sections = [
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "platform-usage", title: "Platform Usage" },
  { id: "job-listings", title: "Job Listings and Applications" },
  { id: "payments-fees", title: "Payments and Fees" },
  { id: "account-security", title: "Account Security" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "prohibited-conduct", title: "Prohibited Conduct" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "changes-terms", title: "Changes to Terms" },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bodyRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="terms-page">
        <main className="terms-main">
          <div className="terms-card">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle table of contents"
            >
              <span className={`terms-hamburger ${sidebarOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <aside className={`terms-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
              <ul>
                {sections.map((section, index) => (
                  <li key={section.id} className={activeSection === section.id ? "active" : ""}>
                    <a href={`#${section.id}`} onClick={(e) => { e.preventDefault(); handleClick(section.id); }}>
                      <span className="section-number">{index + 1}</span>
                      <span className="section-title">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="terms-body" ref={bodyRef}>
              <h1>Terms of Service</h1>
              <p className="terms-updated">Updated January 2026</p>

              <section id="user-responsibilities">
                <h2>User Responsibilities</h2>
                <hr />
                <p>
                  Users must provide accurate and genuine information. Providing misleading or
                  fake data may result in account suspension. You are responsible for maintaining
                  the confidentiality of your account credentials and for all activities that
                  occur under your account.
                </p>
                <p>
                  You agree to use the platform only for lawful purposes and in accordance with
                  these Terms. You are solely responsible for your conduct and any data, text,
                  or other materials that you submit, post, or display on or through the platform.
                </p>
              </section>

              <section id="platform-usage">
                <h2>Platform Usage</h2>
                <hr />
                <p>
                  You agree not to misuse the platform or engage in harmful activities or abuse.
                  This includes but is not limited to: attempting to gain unauthorized access,
                  interfering with the proper functioning of the platform, or engaging in any
                  fraudulent activities.
                </p>
                <p>
                  The platform is provided on an &quot;as is&quot; basis. We make no warranties regarding
                  the availability, reliability, or functionality of any features. We reserve the
                  right to modify or discontinue any feature without prior notice.
                </p>
              </section>

              <section id="job-listings">
                <h2>Job Listings and Applications</h2>
                <hr />
                <p>
                  Employers must ensure all job listings are legitimate and accurately represent
                  the position. Job seekers must submit truthful applications and resumes.
                  Ogera reserves the right to remove any fraudulent or misleading listings or
                  applications without prior notice.
                </p>
                <p>
                  Ogera does not guarantee the accuracy of job listings or the qualifications of
                  applicants. Users should independently verify all information before making
                  employment decisions.
                </p>
              </section>

              <section id="payments-fees">
                <h2>Payments and Fees</h2>
                <hr />
                <p>
                  Payments are handled by third-party payment processors. Ogera does not handle
                  payment disputes directly. Any subscription fees or service charges are
                  non-refundable unless otherwise stated. Users are responsible for all
                  applicable taxes.
                </p>
              </section>

              <section id="account-security">
                <h2>Account Security</h2>
                <hr />
                <p>
                  You are responsible for keeping your login credentials secure. Notify us
                  immediately if you suspect unauthorized access to your account. We recommend
                  using strong passwords and enabling two-factor authentication where available.
                </p>
              </section>

              <section id="intellectual-property">
                <h2>Intellectual Property</h2>
                <hr />
                <p>
                  All content on the Ogera platform, including logos, text, graphics, and
                  software, is the property of Ogera or its content suppliers and is protected
                  by intellectual property laws. Users may not reproduce, distribute, or create
                  derivative works without explicit permission.
                </p>
              </section>

              <section id="prohibited-conduct">
                <h2>Prohibited Conduct</h2>
                <hr />
                <p>
                  Users may not use the platform for illegal purposes, post offensive or
                  discriminatory content, spam other users, or attempt to scrape or harvest
                  data. Violations may result in immediate account termination and legal action.
                </p>
              </section>

              <section id="limitation-liability">
                <h2>Limitation of Liability</h2>
                <hr />
                <p>
                  Ogera is not liable for any indirect, incidental, or consequential damages
                  arising from your use of the platform. We do not guarantee the accuracy or
                  reliability of job listings or user-generated content. Use the platform at
                  your own risk.
                </p>
              </section>

              <section id="termination">
                <h2>Termination</h2>
                <hr />
                <p>
                  Ogera may suspend or terminate accounts violating platform rules without
                  notice. Users may also delete their accounts at any time. Upon termination,
                  you lose access to all account data and content.
                </p>
              </section>

              <section id="changes-terms">
                <h2>Changes to Terms</h2>
                <hr />
                <p>
                  We reserve the right to modify these Terms of Service at any time. Users
                  will be notified of significant changes via email or platform notification.
                  Continued use of the platform after changes constitutes acceptance of the
                  new terms.
                </p>
              </section>
            </div>
          </div>

          <div className="terms-actions">
            <a href="mailto:support@ogera.com" className="terms-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Send copy to my email
            </a>
            <Link href="/" className="terms-agree-btn">I AGREE</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
