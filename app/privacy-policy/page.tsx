"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./privacy-policy.css";

interface Section {
  id: string;
  title: string;
  searchText: string;
  content: ReactNode;
}

const sections: Section[] = [
  {
    id: "info-collect",
    title: "Types of information we collect online",
    searchText: "collect name email phone address work experience education skills profile usage data IP browser device pages payment",
    content: (
      <>
        <p>
          We collect information you provide directly when you create an account, complete your
          profile, or interact with our platform. This includes your full name, email address,
          phone number, physical address, work experience, education history, professional skills,
          certifications, and any other details you choose to share on your profile.
        </p>
        <p>
          We automatically collect certain technical and usage data when you access Ogera. This
          includes your IP address, browser type and version, operating system, device identifiers,
          referring URLs, pages visited, time spent on pages, click patterns, and other interaction
          data. We use cookies and similar tracking technologies to gather this information.
        </p>
        <p>
          When you make payments on our platform, payment information such as credit card numbers,
          billing addresses, and transaction details are collected and processed by our trusted
          third-party payment processors (including Stripe and PayPal). Ogera does not directly
          store your full payment card details on our servers.
        </p>
        <p>
          We may also collect information from third-party sources, such as publicly available
          professional profiles, social media accounts you choose to link, and identity verification
          services. This information helps us verify your identity, prevent fraud, and improve our
          matching algorithms to connect you with relevant opportunities.
        </p>
      </>
    ),
  },
  {
    id: "how-use",
    title: "How we use your information",
    searchText: "use services match job opportunities communicate account applications payments security legal personalize experience analytics",
    content: (
      <>
        <p>
          We use your personal information primarily to provide, maintain, and improve the Ogera
          platform. This includes creating and managing your account, matching you with relevant
          job opportunities based on your skills and preferences, processing your applications,
          and facilitating communication between job seekers and employers.
        </p>
        <p>
          Your information helps us personalize your experience on the platform, including
          customizing job recommendations, tailoring content to your interests, and remembering
          your preferences and settings. We analyze usage patterns to understand how users interact
          with our features and to identify areas for improvement.
        </p>
        <p>
          We use your contact information to communicate with you about your account, applications,
          matches, platform updates, security alerts, and customer support inquiries. We may also
          send promotional communications about new features or opportunities, which you can opt
          out of at any time through your notification settings.
        </p>
        <p>
          Additionally, we use information for security purposes including detecting and preventing
          fraud, abuse, and unauthorized access. We process data to comply with legal obligations,
          enforce our Terms of Service, resolve disputes, and respond to lawful requests from
          authorities. We may also use aggregated, anonymized data for research and analytics.
        </p>
      </>
    ),
  },
  {
    id: "info-sharing",
    title: "Information sharing and disclosure",
    searchText: "share sell third parties employers apply jobs service providers law enforcement consent contractually protect",
    content: (
      <>
        <p>
          Ogera does not sell, rent, or trade your personal information to third parties for
          their marketing purposes. We are committed to protecting your privacy and only share
          your data in the limited circumstances described in this section.
        </p>
        <p>
          When you apply for a job through Ogera, we share your profile information, resume,
          and application materials with the respective employer. This sharing is necessary to
          facilitate the application process. You can control what information is visible to
          employers through your privacy settings.
        </p>
        <p>
          We work with trusted service providers who assist us in operating the platform,
          including cloud hosting providers, email delivery services, analytics tools, payment
          processors, and customer support platforms. These providers are contractually obligated
          to use your data only for the purposes we specify and to maintain appropriate security
          measures.
        </p>
        <p>
          We may disclose your information when required by law, such as in response to a court
          order, subpoena, or government investigation. We may also share data when we believe
          it is necessary to protect the safety, rights, or property of Ogera, our users, or
          the public. In the event of a merger, acquisition, or sale of assets, user data may
          be transferred as part of that transaction, with prior notice to affected users.
        </p>
      </>
    ),
  },
  {
    id: "data-storage",
    title: "Data storage and security",
    searchText: "storage secure servers encryption transit rest firewalls access controls audits security measures protect breach",
    content: (
      <>
        <p>
          Your data is stored on secure servers operated by industry-leading cloud infrastructure
          providers. We use encryption for data both in transit (using TLS 1.3) and at rest
          (using AES-256 encryption). Our infrastructure is designed with multiple layers of
          security to protect against unauthorized access, data loss, and other threats.
        </p>
        <p>
          We implement comprehensive security measures including firewalls, intrusion detection
          and prevention systems, regular vulnerability scanning, penetration testing, and
          access controls based on the principle of least privilege. Our security team continuously
          monitors our systems for potential threats and suspicious activity.
        </p>
        <p>
          Access to personal data within Ogera is restricted to authorized employees and
          contractors who need it to perform their job functions. All personnel with data access
          undergo background checks and are bound by strict confidentiality agreements. We conduct
          regular security training and awareness programs for all staff.
        </p>
        <p>
          While we implement industry-standard security measures and regularly audit our practices,
          no method of electronic transmission or storage is 100% secure. In the event of a data
          breach that affects your personal information, we will notify you and relevant authorities
          within 72 hours as required by applicable data protection laws, and take immediate steps
          to mitigate any harm.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    searchText: "rights access update delete account settings privacy control preferences opt out marketing data copy deletion retention",
    content: (
      <>
        <p>
          You have the right to access your personal information at any time. Through your account
          settings, you can view, download, and export all data we hold about you in a portable,
          machine-readable format. You can also request a comprehensive report of all personal data
          associated with your account by contacting our support team.
        </p>
        <p>
          You can update or correct your personal information at any time through your profile
          settings. If you find any inaccuracies in the data we hold about you, we encourage you
          to update it promptly. You also have the right to restrict or object to certain types
          of processing of your personal data.
        </p>
        <p>
          You may request deletion of your account and associated personal data at any time. Upon
          receiving a deletion request, we will remove your data within 30 days, except where we
          are required by law to retain certain information (such as financial transaction records
          for tax purposes). We will inform you of any data we are legally required to retain.
        </p>
        <p>
          You can manage your communication preferences to opt out of marketing emails, push
          notifications, and promotional messages. You can also control cookie settings, manage
          third-party app connections, and adjust your profile visibility. Note that opting out
          of certain communications may affect your ability to receive important service updates
          and security alerts.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking technologies",
    searchText: "cookies tracking technologies preferences analyze usage patterns targeted content browser settings functionality session persistent analytics",
    content: (
      <>
        <p>
          We use cookies and similar technologies (including web beacons, pixels, and local
          storage) to enhance your experience on Ogera. Cookies are small text files stored on
          your device that help us recognize you, remember your preferences, and understand how
          you use our platform.
        </p>
        <p>
          We use essential cookies that are necessary for the platform to function properly,
          including maintaining your login session, remembering your language preferences, and
          ensuring security. These cookies cannot be disabled without affecting core platform
          functionality.
        </p>
        <p>
          We also use analytics cookies to understand how users navigate and interact with our
          platform, performance cookies to optimize loading times and user experience, and
          preference cookies to remember your settings and choices. These help us continuously
          improve our services and provide you with a more personalized experience.
        </p>
        <p>
          You can control cookie settings through your browser preferences. Most browsers allow
          you to block or delete cookies, though this may impact platform functionality. We
          respect &quot;Do Not Track&quot; browser signals where technically feasible. For more detailed
          information about the specific cookies we use and their purposes, please refer to our
          separate Cookie Policy page.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    searchText: "third party links external websites services responsible privacy practices review policies caution sharing personal information",
    content: (
      <>
        <p>
          Our platform may contain links to external websites, applications, or services that
          are not operated by Ogera. These links are provided for your convenience and
          informational purposes only. We do not endorse or assume responsibility for the
          content, privacy policies, or practices of any third-party sites or services.
        </p>
        <p>
          When you click on a third-party link and leave our platform, our Privacy Policy no
          longer applies. We strongly encourage you to review the privacy policy and terms of
          service of every website you visit, especially before providing any personal information.
          Your interactions with third-party services are governed solely by their own policies.
        </p>
        <p>
          Some features on Ogera may involve third-party integrations, such as social media
          login options, calendar syncing, or document import tools. When you choose to use these
          integrations, you may be sharing information with both Ogera and the third-party service.
          We will clearly inform you when a third-party integration is involved and what data
          will be shared.
        </p>
        <p>
          We regularly review our third-party partners and service providers to ensure they
          maintain adequate privacy and security standards. However, we cannot guarantee the
          security practices of external services. Exercise caution when sharing personal
          information on any platform, and use strong, unique passwords for each service you use.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children&apos;s privacy protection",
    searchText: "children under 18 age knowingly collect personal information delete notify parents guardians consent minors",
    content: (
      <>
        <p>
          Ogera is designed for users who are at least 18 years of age. We do not knowingly
          collect, use, or disclose personal information from individuals under the age of 18.
          Our platform&apos;s content and services, including job listings and professional
          networking features, are intended for adult users in the workforce.
        </p>
        <p>
          By creating an account on Ogera, you represent and warrant that you are at least 18
          years old. If we discover that we have inadvertently collected personal information
          from a user under 18, we will take immediate steps to delete that information from our
          servers and terminate the associated account.
        </p>
        <p>
          Parents or guardians who believe their child under 18 has provided personal information
          to Ogera without their consent should contact us immediately at privacy@ogera.com. We
          will promptly investigate and remove any such information from our systems. We take the
          protection of children&apos;s privacy very seriously.
        </p>
        <p>
          In jurisdictions where the minimum age for data processing consent differs from 18
          (such as 16 under GDPR), we comply with the applicable local requirements. However,
          given the professional nature of our platform, we maintain 18 as our minimum age
          requirement for account creation regardless of local data processing age thresholds.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International data transfers",
    searchText: "international transfer processed countries safeguards GDPR regulations standard contractual clauses regional data protection",
    content: (
      <>
        <p>
          Ogera operates globally, and your information may be transferred to, stored, and
          processed in countries other than your country of residence. These countries may have
          data protection laws that differ from those in your jurisdiction. By using our platform,
          you acknowledge and consent to such transfers.
        </p>
        <p>
          When we transfer personal data internationally, we ensure appropriate safeguards are
          in place to protect your information. These safeguards include Standard Contractual
          Clauses (SCCs) approved by the European Commission, adequacy decisions by relevant
          authorities, and binding corporate rules where applicable.
        </p>
        <p>
          We comply with applicable data protection frameworks including the General Data
          Protection Regulation (GDPR) for users in the European Economic Area, the UK Data
          Protection Act, the California Consumer Privacy Act (CCPA), and other regional privacy
          regulations. We regularly review our compliance posture as new regulations emerge.
        </p>
        <p>
          You have the right to know where your data is being processed and to request information
          about the safeguards in place for international transfers. If you have concerns about
          how your data is being transferred or processed internationally, please contact our
          Data Protection Officer at privacy@ogera.com for detailed information about our transfer
          mechanisms and protections.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    searchText: "update modify change privacy policy periodically practices legal requirements notify email notification continued use acceptance",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our data
          practices, business operations, legal requirements, or industry standards. When we make
          changes, we will update the &quot;Last Updated&quot; date at the top of this policy and, where
          appropriate, provide additional notice of the changes.
        </p>
        <p>
          For material changes that significantly affect how we collect, use, or share your
          personal information, we will provide prominent notice through email notification to
          the address associated with your account, an in-app notification or banner, or a
          prominent notice on our website at least 14 days before the changes take effect.
        </p>
        <p>
          Your continued use of Ogera after any changes to this Privacy Policy constitutes your
          acceptance of the updated terms. If you do not agree with any changes, you should stop
          using the platform and may request account deletion. We encourage you to periodically
          review this page to stay informed about our privacy practices.
        </p>
        <p>
          For minor changes that do not materially affect your rights, such as grammatical
          corrections, formatting updates, or clarifications of existing practices, we may update
          the policy without prior notice. Previous versions of our Privacy Policy are available
          upon request from our support team. Last updated: January 2026.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    searchText: "contact questions concerns privacy policy data practices Data Protection Officer privacy@ogera.com support inquiries",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our
          data practices, we encourage you to reach out to us. Our dedicated privacy team is
          committed to addressing your inquiries promptly and transparently.
        </p>
        <p>
          For privacy-specific inquiries, data access requests, or to exercise your data
          protection rights, please contact our Data Protection Officer directly at
          privacy@ogera.com. We aim to respond to all privacy-related requests within 30 days,
          as required by applicable data protection regulations.
        </p>
        <p>
          For general support questions, account issues, or platform-related inquiries, you can
          reach our customer support team at support@ogera.com. Our support team is available
          Monday through Friday, 9:00 AM to 6:00 PM (EAT), and will respond within 24-48
          business hours.
        </p>
        <p>
          If you are not satisfied with our response to your privacy concern, you have the right
          to lodge a complaint with your local data protection authority. We will cooperate fully
          with any regulatory investigation and work to resolve your concerns in a manner that
          protects your rights and privacy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.searchText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="privacy-page">
        {/* Header */}
        <header className="privacy-header">
          <div className="privacy-header-left">
            <h1>Privacy Policy</h1>
            <p className="privacy-subtitle">
              Our code of conduct and your pledge to be an upstanding member of Ogera.
            </p>
            <div className="privacy-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Sections */}
        <main className="privacy-content">
          {filteredSections.map((section) => (
            <section key={section.id} className="privacy-section">
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
          {filteredSections.length === 0 && (
            <div className="privacy-no-results">
              <p>No sections match your search.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
