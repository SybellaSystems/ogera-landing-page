"use client";

import { useState, type ReactNode } from "react";
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

const sectionContent: Record<string, { heading: string; content: ReactNode }> = {
  "user-responsibilities": {
    heading: "User Responsibilities",
    content: (
      <>
        <p>
          Users must provide accurate and genuine information when creating an account
          on Ogera. Providing misleading or fake data may result in immediate account
          suspension or permanent termination. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities that occur
          under your account.
        </p>
        <p>
          You agree to use the platform only for lawful purposes and in accordance with
          these Terms. You are solely responsible for your conduct and any data, text,
          files, information, usernames, images, or other materials that you submit, post,
          or display on or through the platform.
        </p>
        <p>
          Users must be at least 18 years of age or have parental consent to use the
          platform. By registering, you confirm that you meet this age requirement. You
          agree to promptly update your account information if any changes occur.
        </p>
        <p>
          You must not share your account credentials with any third party. If you become
          aware of any unauthorized use of your account, you must notify Ogera immediately
          at support@ogera.com. Ogera will not be liable for any loss or damage arising
          from your failure to maintain the security of your account.
        </p>
      </>
    ),
  },
  "platform-usage": {
    heading: "Platform Usage",
    content: (
      <>
        <p>
          You agree not to misuse the platform or engage in harmful activities or abuse.
          This includes but is not limited to: attempting to gain unauthorized access to
          other users&apos; accounts, interfering with the proper functioning of the platform,
          or engaging in any fraudulent activities.
        </p>
        <p>
          The platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no
          warranties regarding the availability, reliability, or functionality of any
          features. We reserve the right to modify, suspend, or discontinue any feature
          or service without prior notice.
        </p>
        <p>
          You may not use automated tools, bots, scrapers, or any other means to access
          the platform for any purpose without our express written permission. Rate
          limiting and access restrictions may be applied at our discretion.
        </p>
        <p>
          Ogera reserves the right to restrict or limit access to certain features based
          on your account type, geographic location, or usage patterns. We may implement
          usage quotas and fair use policies to ensure equitable access for all users.
        </p>
        <p>
          Any feedback, suggestions, or improvements you provide to Ogera regarding the
          platform may be used by us without any obligation to compensate you. By
          submitting feedback, you grant Ogera a perpetual, worldwide, royalty-free license
          to use and incorporate such feedback.
        </p>
      </>
    ),
  },
  "job-listings": {
    heading: "Job Listings and Applications",
    content: (
      <>
        <p>
          Employers must ensure all job listings are legitimate, accurately represent the
          position, and comply with applicable employment laws. This includes providing
          truthful information about compensation, job duties, location, and required
          qualifications. Job seekers must submit truthful applications and resumes.
        </p>
        <p>
          Ogera reserves the right to remove any fraudulent, misleading, or discriminatory
          listings or applications without prior notice. Listings that violate local labor
          laws or contain discriminatory requirements will be immediately removed.
        </p>
        <p>
          Ogera does not guarantee the accuracy of job listings or the qualifications of
          applicants. Users should independently verify all information before making
          employment decisions. Ogera acts solely as a platform connecting employers and
          job seekers and is not a party to any employment agreement.
        </p>
        <p>
          Employers are solely responsible for their hiring decisions and must comply with
          all applicable anti-discrimination laws. Job listings must not discriminate based
          on race, color, religion, sex, national origin, age, disability, or any other
          protected characteristic.
        </p>
        <p>
          Job seekers acknowledge that applying to a listing does not guarantee an interview
          or employment. Response times and hiring decisions are entirely at the discretion
          of the employer. Ogera does not mediate disputes between employers and applicants.
        </p>
      </>
    ),
  },
  "payments-fees": {
    heading: "Payments and Fees",
    content: (
      <>
        <p>
          Payments are handled by third-party payment processors including Stripe and
          PayPal. Ogera does not store your payment card details directly. By making a
          payment, you agree to the terms of service of the respective payment processor.
        </p>
        <p>
          Ogera does not handle payment disputes directly. Any disputes regarding charges
          should first be directed to our support team. If unresolved, you may contact
          your payment provider. Chargebacks initiated without first contacting Ogera may
          result in account suspension.
        </p>
        <p>
          Subscription fees are billed in advance on a monthly or annual basis depending
          on your chosen plan. All fees are non-refundable unless otherwise stated in
          writing or required by applicable law. Users are responsible for all applicable
          taxes associated with their use of the platform.
        </p>
        <p>
          Ogera reserves the right to change pricing at any time. Existing subscribers will
          be notified at least 30 days before any price increase takes effect. If you do not
          agree to the new pricing, you may cancel your subscription before the next billing
          cycle.
        </p>
        <p>
          Free trial periods, if offered, will automatically convert to a paid subscription
          unless cancelled before the trial ends. You will receive a reminder email before
          any automatic conversion occurs.
        </p>
      </>
    ),
  },
  "account-security": {
    heading: "Account Security",
    content: (
      <>
        <p>
          You are responsible for keeping your login credentials secure at all times. This
          includes using a strong, unique password and not reusing passwords from other
          services. Notify us immediately at support@ogera.com if you suspect unauthorized
          access to your account.
        </p>
        <p>
          We strongly recommend enabling two-factor authentication (2FA) where available.
          Accounts with 2FA enabled receive additional security protections and priority
          support in case of security incidents.
        </p>
        <p>
          Ogera implements industry-standard security measures including encryption of data
          in transit and at rest, regular security audits, and intrusion detection systems.
          However, no system is completely secure, and we cannot guarantee absolute security
          of your data.
        </p>
        <p>
          If we detect suspicious activity on your account, we may temporarily lock your
          account and require identity verification before restoring access. This is done
          to protect your account from unauthorized use.
        </p>
        <p>
          You agree not to attempt to circumvent any security measures implemented by Ogera.
          Any attempt to exploit vulnerabilities, perform unauthorized penetration testing,
          or bypass access controls will result in immediate account termination and may be
          reported to law enforcement.
        </p>
      </>
    ),
  },
  "intellectual-property": {
    heading: "Intellectual Property",
    content: (
      <>
        <p>
          All content on the Ogera platform, including but not limited to logos, trademarks,
          text, graphics, user interface designs, photographs, audio, video, software, and
          source code, is the property of Ogera or its content suppliers and is protected by
          international intellectual property laws.
        </p>
        <p>
          Users may not reproduce, distribute, modify, create derivative works of, publicly
          display, publicly perform, republish, download, store, or transmit any content from
          the platform without explicit written permission from Ogera.
        </p>
        <p>
          By posting content on Ogera (such as job listings, profile information, or reviews),
          you grant Ogera a non-exclusive, worldwide, royalty-free license to use, display,
          reproduce, and distribute such content in connection with operating and promoting
          the platform.
        </p>
        <p>
          If you believe that any content on the platform infringes your intellectual property
          rights, please contact us at legal@ogera.com with a detailed description of the
          alleged infringement. We will investigate and take appropriate action in accordance
          with applicable laws.
        </p>
        <p>
          The Ogera name, logo, and all related names, logos, product and service names,
          designs, and slogans are trademarks of Ogera. You must not use such marks without
          our prior written permission.
        </p>
      </>
    ),
  },
  "prohibited-conduct": {
    heading: "Prohibited Conduct",
    content: (
      <>
        <p>
          Users may not use the platform for any illegal purposes or in violation of any
          applicable local, state, national, or international laws. This includes but is
          not limited to fraud, money laundering, identity theft, or trafficking.
        </p>
        <p>
          The following activities are strictly prohibited: posting offensive, abusive,
          defamatory, or discriminatory content; harassing, threatening, or intimidating
          other users; impersonating any person or entity; and posting spam or unsolicited
          commercial communications.
        </p>
        <p>
          Users may not attempt to scrape, harvest, or collect data from the platform using
          automated means. This includes using bots, crawlers, spiders, or any other
          automated tools to access or extract data without authorization.
        </p>
        <p>
          Posting fake reviews, manipulating the TrustScore system, creating multiple
          accounts to circumvent restrictions, or engaging in any form of platform
          manipulation is strictly forbidden and will result in permanent ban.
        </p>
        <p>
          Violations of these rules may result in immediate account termination without
          warning, forfeiture of any paid subscription fees, and legal action where
          appropriate. Ogera reserves the right to cooperate with law enforcement agencies
          in investigating suspected criminal activity.
        </p>
      </>
    ),
  },
  "limitation-liability": {
    heading: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Ogera shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages arising from
          or related to your use of the platform. This includes damages for loss of profits,
          goodwill, data, or other intangible losses.
        </p>
        <p>
          Ogera does not guarantee the accuracy, completeness, or reliability of any job
          listings, employer profiles, user reviews, or other user-generated content on the
          platform. Use of such information is at your own risk.
        </p>
        <p>
          In no event shall Ogera&apos;s total liability to you exceed the amount you have paid
          to Ogera in the twelve (12) months preceding the event giving rise to the claim,
          or one hundred dollars ($100), whichever is greater.
        </p>
        <p>
          Ogera is not responsible for any actions taken by employers or job seekers outside
          the platform. We do not conduct background checks on users unless explicitly stated.
          Users are advised to exercise caution and due diligence in all interactions.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion or limitation of certain damages. In
          such jurisdictions, our liability shall be limited to the maximum extent permitted
          by law. Nothing in these terms shall limit liability for fraud, gross negligence,
          or willful misconduct.
        </p>
      </>
    ),
  },
  "termination": {
    heading: "Termination",
    content: (
      <>
        <p>
          Ogera may suspend or terminate your account at any time if you violate these Terms
          of Service, engage in prohibited conduct, or if we reasonably believe your account
          poses a risk to other users or the platform. Termination may occur without prior
          notice in cases of severe violations.
        </p>
        <p>
          Users may delete their accounts at any time through the account settings page or
          by contacting support@ogera.com. Upon account deletion, your profile information
          and activity history will be permanently removed within 30 days, subject to our
          data retention policies.
        </p>
        <p>
          Upon termination, you will immediately lose access to all account data, saved
          job listings, application history, and any premium features. Any unused portion
          of a paid subscription will not be refunded unless required by applicable law.
        </p>
        <p>
          Certain provisions of these Terms shall survive termination, including but not
          limited to: Intellectual Property, Limitation of Liability, and any obligations
          that by their nature should survive termination.
        </p>
        <p>
          If your account is terminated due to a violation, you may not create a new account
          without explicit written permission from Ogera. Attempts to circumvent a ban by
          creating new accounts will result in further action.
        </p>
      </>
    ),
  },
  "changes-terms": {
    heading: "Changes to Terms",
    content: (
      <>
        <p>
          We reserve the right to modify, update, or replace these Terms of Service at any
          time at our sole discretion. Material changes will be communicated to users via
          email notification or a prominent notice on the platform at least 14 days before
          the changes take effect.
        </p>
        <p>
          Your continued use of the platform after any changes to these Terms constitutes
          your acceptance of the new terms. If you do not agree to the modified terms, you
          must stop using the platform and may request account deletion.
        </p>
        <p>
          We encourage you to periodically review these Terms to stay informed about your
          rights and obligations. The &quot;Last Updated&quot; date at the top of this page indicates
          when the most recent changes were made.
        </p>
        <p>
          For minor changes that do not materially affect your rights (such as grammatical
          corrections or formatting updates), we may update the Terms without prior notice.
          However, any changes that affect your rights, obligations, or the scope of services
          will always be communicated in advance.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid by a court
          of competent jurisdiction, that provision shall be limited or eliminated to the
          minimum extent necessary, and the remaining provisions shall remain in full force
          and effect.
        </p>
      </>
    ),
  },
};

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
  };

  const currentContent = sectionContent[activeSection];

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

            <div className="terms-body">
              <h1>Terms of Service</h1>
              <p className="terms-updated">Updated January 2026</p>

              <section className="terms-active-section">
                <h2>{currentContent.heading}</h2>
                <hr />
                {currentContent.content}
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
