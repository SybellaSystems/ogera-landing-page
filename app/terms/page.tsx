"use client";

import Footer from "@/components/Footer/Footer";
import "./terms.css";

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms of Service</h1>

        <div className="terms-content">
          <p>
            Welcome to Ogera. By using our platform, you agree to comply with the following
            Terms of Service. These terms govern your usage of job listings, applications,
            academic tracking, and any features available in the application.
          </p>

          <section>
            <h2>1. User Responsibilities</h2>
            <p>
              Users must provide accurate and genuine information. Providing misleading or
              fake data may result in account suspension.
            </p>
          </section>

          <section>
            <h2>2. Platform Usage</h2>
            <p>
              You agree not to misuse the platform or engage in harmful activities or abuse.
            </p>
          </section>

          <section>
            <h2>3. Payments</h2>
            <p>
              Payments are handled by third-party mobile money services. Ogera does not handle
              payment disputes.
            </p>
          </section>

          <section>
            <h2>4. Account Security</h2>
            <p>You are responsible for keeping your login credentials secure.</p>
          </section>

          <section>
            <h2>5. Violations</h2>
            <p>
              Ogera may suspend or terminate accounts violating platform rules without notice.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              All content, design, and functionality of the Ogera platform are owned by Ogera
              or its licensors. You may not reproduce, distribute, or transmit any content
              without prior written permission.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              Ogera is provided "as is" without warranties of any kind. Ogera shall not be
              liable for any indirect, incidental, or consequential damages arising from your
              use of the platform.
            </p>
          </section>

          <section>
            <h2>8. Changes to Terms</h2>
            <p>
              Ogera reserves the right to modify these terms at any time. Continued use of the
              platform following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2>9. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of the jurisdiction in which Ogera operates.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at
              support@ogera.com.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
