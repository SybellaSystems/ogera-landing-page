"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import "./faq.css";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-linear-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
        <div className="absolute top-0 left-0 right-0 h-[250px] bg-linear-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>

        <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
          <div className="faq-container">
            <h1 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h1>

            <div className="faq-content">
              <p className="mb-6">
                Find answers to the most commonly asked questions about Ogera.
                If you don&apos;t find what you&apos;re looking for, please
                contact our support team for personalized assistance.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="what-is-ogera">
                  <AccordionTrigger>What is Ogera?</AccordionTrigger>
                  <AccordionContent>
                    Ogera is a global remote job marketplace that connects
                    talented professionals with companies offering remote work
                    opportunities. We streamline the job search and hiring
                    process, making it easier for candidates to find their ideal
                    remote positions and for companies to discover top talent
                    worldwide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="is-ogera-free">
                  <AccordionTrigger>Is Ogera free to use?</AccordionTrigger>
                  <AccordionContent>
                    Creating an account and browsing job listings on Ogera is
                    completely free for job seekers. We offer premium features
                    for enhanced visibility and advanced tools. For employers,
                    we have various subscription plans based on hiring needs and
                    company size. Check our pricing page for detailed
                    information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="create-account">
                  <AccordionTrigger>
                    How do I create an account?
                  </AccordionTrigger>
                  <AccordionContent>
                    Click the &quot;Sign Up&quot; button on our homepage,
                    provide your email address, create a secure password, and
                    verify your email. Once verified, complete your profile with
                    your work experience, education, skills, and preferences. A
                    complete profile increases your visibility to potential
                    employers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="apply-jobs">
                  <AccordionTrigger>How do I apply for jobs?</AccordionTrigger>
                  <AccordionContent>
                    Browse available positions using our search filters, click
                    on jobs that interest you, and review the job description
                    carefully. When ready, click the &quot;Apply&quot; button,
                    attach your resume if required, and submit a personalized
                    cover letter. You can track all your applications in your
                    dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hiring-process">
                  <AccordionTrigger>
                    How long does the hiring process take?
                  </AccordionTrigger>
                  <AccordionContent>
                    The timeline varies by employer and position. Typically, you
                    can expect to hear back within 1-2 weeks after applying.
                    Some companies respond within days, while others may take
                    longer. You&apos;ll receive notifications about your
                    application status through email and your Ogera dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="work-anywhere">
                  <AccordionTrigger>Can I work from anywhere?</AccordionTrigger>
                  <AccordionContent>
                    Most positions on Ogera are fully remote, allowing you to
                    work from anywhere with a reliable internet connection.
                    However, some roles may have timezone requirements or
                    geographic restrictions due to legal or business reasons.
                    Check each job posting for specific location requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reset-password">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    Click on &quot;Forgot Password&quot; on the login page,
                    enter your registered email address, and you&apos;ll receive
                    a password reset link. Click the link in the email and
                    follow the instructions to create a new password. For
                    security, reset links expire after 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-support">
                  <AccordionTrigger>How do I contact support?</AccordionTrigger>
                  <AccordionContent>
                    You can reach our support team through multiple channels:
                    email us at support@ogera.com, use the live chat feature on
                    our website, or submit a support ticket through your account
                    dashboard. We typically respond within 24 hours during
                    business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="information-security">
                  <AccordionTrigger>Is my information secure?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We use industry-standard encryption and security
                    protocols to protect your data. Your information is never
                    shared with third parties without your consent. Review our
                    Privacy Policy and Safety &amp; Trust page for detailed
                    information about our security practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delete-account">
                  <AccordionTrigger>Can I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can delete your account at any time from your
                    account settings. Navigate to Settings &gt; Account &gt;
                    Delete Account. Please note that this action is permanent
                    and will remove all your data, including applications, saved
                    jobs, and profile information. We recommend downloading your
                    data before deletion.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
