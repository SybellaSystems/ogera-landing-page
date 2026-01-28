"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./help-center.css";

export default function HelpCenterPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#5B3BA5] to-[#7F56D9] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="help-container">
          <h1>Help Center</h1>

        <div className="help-content">
          <p>
            Welcome to the Ogera Help Center. Here you'll find answers to common questions,
            guides, and resources to help you get the most out of our platform. Our support
            team is dedicated to ensuring your experience is smooth and productive.
          </p>

          <section>
            <h2>Getting Started</h2>
            <p>
              New to Ogera? Start here to learn the basics. Create your account, set up your
              profile, and explore the platform features. Our step-by-step guides will help
              you navigate through the initial setup process and customize your experience.
            </p>
          </section>

          <section>
            <h2>Account Management</h2>
            <p>
              Learn how to manage your account settings, update your profile information,
              change your password, and configure notification preferences. Keep your account
              secure by enabling two-factor authentication and regularly reviewing your
              security settings.
            </p>
          </section>

          <section>
            <h2>Job Applications</h2>
            <p>
              Discover how to search for jobs, submit applications, track your application
              status, and communicate with employers. Use our advanced filters to find the
              perfect remote opportunities that match your skills and preferences.
            </p>
          </section>

          <section>
            <h2>Profile Optimization</h2>
            <p>
              Make your profile stand out to potential employers. Add your work experience,
              education, skills, and portfolio. Upload a professional photo and write a
              compelling bio that showcases your expertise and career goals.
            </p>
          </section>

          <section>
            <h2>Payment & Billing</h2>
            <p>
              Understand our payment processes, billing cycles, and accepted payment methods.
              Learn how to update your payment information, view transaction history, and
              resolve any billing-related issues. All transactions are secure and encrypted.
            </p>
          </section>

          <section>
            <h2>Technical Support</h2>
            <p>
              Experiencing technical difficulties? Check our troubleshooting guides for common
              issues like login problems, browser compatibility, or slow performance. If you
              can't find a solution, contact our technical support team for assistance.
            </p>
          </section>

          <section>
            <h2>Platform Features</h2>
            <p>
              Explore detailed guides on using Ogera's features including job search filters,
              saved searches, application tracking, messaging system, and notification
              settings. Learn tips and tricks to maximize your productivity on the platform.
            </p>
          </section>

          <section>
            <h2>Contact Support</h2>
            <p>
              Still need help? Our support team is here for you. Email us at support@ogera.com
              or use the live chat feature for immediate assistance. We typically respond
              within 24 hours during business days.
            </p>
          </section>
        </div>
      </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
