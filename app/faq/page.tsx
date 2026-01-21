"use client";

import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./faq.css";

export default function FAQPage() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <Link href="/" className="home-link">
          <span className="home-icon">←</span> Back to Home
        </Link>
        <h1>Frequently Asked Questions</h1>

        <div className="faq-content">
          <p>
            Find answers to the most commonly asked questions about Ogera. If you don't
            find what you're looking for, please contact our support team for personalized
            assistance.
          </p>

          <section>
            <h2>What is Ogera?</h2>
            <p>
              Ogera is a global remote job marketplace that connects talented professionals
              with companies offering remote work opportunities. We streamline the job search
              and hiring process, making it easier for candidates to find their ideal remote
              positions and for companies to discover top talent worldwide.
            </p>
          </section>

          <section>
            <h2>Is Ogera free to use?</h2>
            <p>
              Creating an account and browsing job listings on Ogera is completely free for
              job seekers. We offer premium features for enhanced visibility and advanced
              tools. For employers, we have various subscription plans based on hiring needs
              and company size. Check our pricing page for detailed information.
            </p>
          </section>

          <section>
            <h2>How do I create an account?</h2>
            <p>
              Click the "Sign Up" button on our homepage, provide your email address, create
              a secure password, and verify your email. Once verified, complete your profile
              with your work experience, education, skills, and preferences. A complete
              profile increases your visibility to potential employers.
            </p>
          </section>

          <section>
            <h2>How do I apply for jobs?</h2>
            <p>
              Browse available positions using our search filters, click on jobs that interest
              you, and review the job description carefully. When ready, click the "Apply"
              button, attach your resume if required, and submit a personalized cover letter.
              You can track all your applications in your dashboard.
            </p>
          </section>

          <section>
            <h2>How long does the hiring process take?</h2>
            <p>
              The timeline varies by employer and position. Typically, you can expect to hear
              back within 1-2 weeks after applying. Some companies respond within days, while
              others may take longer. You'll receive notifications about your application
              status through email and your Ogera dashboard.
            </p>
          </section>

          <section>
            <h2>Can I work from anywhere?</h2>
            <p>
              Most positions on Ogera are fully remote, allowing you to work from anywhere
              with a reliable internet connection. However, some roles may have timezone
              requirements or geographic restrictions due to legal or business reasons.
              Check each job posting for specific location requirements.
            </p>
          </section>

          <section>
            <h2>How do I reset my password?</h2>
            <p>
              Click on "Forgot Password" on the login page, enter your registered email
              address, and you'll receive a password reset link. Click the link in the
              email and follow the instructions to create a new password. For security,
              reset links expire after 24 hours.
            </p>
          </section>

          <section>
            <h2>How do I contact support?</h2>
            <p>
              You can reach our support team through multiple channels: email us at
              support@ogera.com, use the live chat feature on our website, or submit a
              support ticket through your account dashboard. We typically respond within
              24 hours during business days.
            </p>
          </section>

          <section>
            <h2>Is my information secure?</h2>
            <p>
              Absolutely. We use industry-standard encryption and security protocols to
              protect your data. Your information is never shared with third parties
              without your consent. Review our Privacy Policy and Safety & Trust page
              for detailed information about our security practices.
            </p>
          </section>

          <section>
            <h2>Can I delete my account?</h2>
            <p>
              Yes, you can delete your account at any time from your account settings.
              Navigate to Settings &gt; Account &gt; Delete Account. Please note that this
              action is permanent and will remove all your data, including applications,
              saved jobs, and profile information. We recommend downloading your data
              before deletion.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
