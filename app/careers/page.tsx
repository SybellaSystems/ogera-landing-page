"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./careers.css";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#083d77] to-[#0066CC] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="careers-container">
          <h1>Careers at Ogera</h1>

        <div className="careers-content">
          <p>
            Join our mission to transform the future of work. At Ogera, we're building more
            than just a platform - we're creating a movement that empowers millions of
            professionals worldwide. If you're passionate about making a global impact,
            we want to hear from you.
          </p>

          <section>
            <h2>Why Work at Ogera?</h2>
            <p>
              At Ogera, you'll be part of a dynamic team that values innovation, collaboration,
              and impact. We offer competitive compensation, comprehensive benefits, flexible
              remote work arrangements, professional development opportunities, and a culture
              that celebrates diversity and inclusion. Every team member contributes to our
              mission of democratizing remote work.
            </p>
          </section>

          <section>
            <h2>Our Culture</h2>
            <p>
              We foster a culture of transparency, continuous learning, and mutual respect.
              Our team is distributed across multiple time zones, reflecting the global
              nature of our mission. We encourage autonomy, trust our team members to do
              their best work, and provide support when needed. Work-life balance isn't just
              a buzzword here - it's a commitment.
            </p>
          </section>

          <section>
            <h2>Benefits &amp; Perks</h2>
            <p>
              We offer competitive salaries, equity options for key roles, comprehensive
              health insurance, flexible working hours, remote work opportunities, professional
              development budgets, annual team retreats, latest technology and equipment,
              generous paid time off, and parental leave. We invest in our team's growth
              and well-being.
            </p>
          </section>

          <section>
            <h2>Open Positions</h2>
            <p>
              We're currently hiring for roles in software engineering, product management,
              design, marketing, sales, customer success, and operations. Each position
              offers the opportunity to make a meaningful impact on how millions of people
              work. Check our careers portal for current openings and detailed job descriptions.
            </p>
          </section>

          <section>
            <h2>Engineering</h2>
            <p>
              Our engineering team builds the technology that powers global remote work.
              We work with cutting-edge technologies including React, Node.js, TypeScript,
              Python, and cloud infrastructure. We value clean code, scalable architecture,
              and continuous improvement. Join us to solve complex technical challenges at scale.
            </p>
          </section>

          <section>
            <h2>Product &amp; Design</h2>
            <p>
              Shape the future of our platform by understanding user needs and crafting
              exceptional experiences. Our product and design teams work closely with users,
              conduct research, iterate rapidly, and design solutions that delight millions.
              If you're passionate about user-centered design and product innovation, this
              is your place.
            </p>
          </section>

          <section>
            <h2>Growth &amp; Marketing</h2>
            <p>
              Help us reach millions of professionals and companies worldwide. Our growth
              team drives user acquisition, engagement, and retention through data-driven
              strategies. From content marketing to performance advertising, SEO to community
              building, we're looking for creative minds who can scale impact globally.
            </p>
          </section>

          <section>
            <h2>How to Apply</h2>
            <p>
              Ready to join our team? Send your resume and a brief cover letter explaining
              why you're excited about Ogera to careers@ogera.com. Tell us about your
              experience, your passion for remote work, and how you can contribute to our
              mission. We review all applications carefully and will respond within two weeks.
            </p>
          </section>

          <section>
            <h2>Diversity &amp; Inclusion</h2>
            <p>
              We're committed to building a diverse team that reflects the global community
              we serve. We welcome applicants from all backgrounds, experiences, and
              perspectives. Ogera is an equal opportunity employer. We do not discriminate
              based on race, religion, color, national origin, gender, sexual orientation,
              age, marital status, or disability status.
            </p>
          </section>

          <section>
            <h2>Questions?</h2>
            <p>
              Have questions about working at Ogera or our application process? We'd love
              to hear from you. Contact our talent team at careers@ogera.com or connect
              with our team members on LinkedIn. Follow us on social media to get a behind-
              the-scenes look at life at Ogera.
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
