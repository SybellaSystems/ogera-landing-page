"use client";

import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <Link href="/" className="home-link">
          <span className="home-icon">←</span> Back to Home
        </Link>
        <h1>About Us</h1>

        <div className="about-content">
          <p>
            Ogera is a revolutionary global remote job marketplace that connects talented
            professionals with companies seeking top-tier remote talent. Founded with a
            vision to transform the future of work, we bridge the gap between exceptional
            talent and forward-thinking companies across the globe.
          </p>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to democratize access to remote work opportunities worldwide.
              We believe that talent knows no borders, and everyone deserves the opportunity
              to find meaningful work regardless of their geographic location. We empower
              professionals to build fulfilling careers while enabling companies to tap into
              a diverse global talent pool.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>
            <p>
              We envision a world where work is defined by skills, passion, and impact rather
              than physical location. Through our platform, we aim to create a borderless
              workforce where opportunities are accessible to all, companies thrive with
              diverse teams, and professionals achieve work-life balance through flexible
              remote arrangements.
            </p>
          </section>

          <section>
            <h2>Our Story</h2>
            <p>
              Ogera was born from the recognition that the traditional job market was evolving.
              As remote work became the new normal, we saw an opportunity to build a platform
              that truly understands both the needs of modern professionals and the requirements
              of innovative companies. Today, we serve thousands of users across multiple
              continents.
            </p>
          </section>

          <section>
            <h2>What We Do</h2>
            <p>
              We provide a comprehensive platform for remote job discovery, application, and
              hiring. Our advanced matching algorithms connect qualified candidates with
              relevant opportunities. We verify employers, ensure secure transactions, provide
              career resources, and support both job seekers and employers throughout their
              journey.
            </p>
          </section>

          <section>
            <h2>Our Values</h2>
            <p>
              Integrity, transparency, and inclusivity are at the core of everything we do.
              We prioritize user privacy and data security. We celebrate diversity and foster
              an environment of respect and equality. We continuously innovate to improve our
              platform, and we are committed to creating positive social impact through
              accessible employment opportunities.
            </p>
          </section>

          <section>
            <h2>Global Reach</h2>
            <p>
              With users spanning multiple continents and time zones, Ogera has become a
              trusted name in the remote work ecosystem. We facilitate connections across
              Africa, Europe, Asia, Americas, and beyond. Our platform supports multiple
              languages and currencies, making global hiring seamless and accessible.
            </p>
          </section>

          <section>
            <h2>Our Team</h2>
            <p>
              Behind Ogera is a diverse team of passionate professionals dedicated to
              revolutionizing remote work. Our team includes software engineers, product
              designers, career experts, customer success specialists, and business development
              professionals who work tirelessly to deliver an exceptional platform experience.
            </p>
          </section>

          <section>
            <h2>Join Our Journey</h2>
            <p>
              Whether you're a talented professional seeking remote opportunities or a
              company looking to hire exceptional remote talent, Ogera is your partner in
              success. Join thousands of users who have already discovered the power of
              borderless work. Together, we're building the future of work. Contact us at
              hello@ogera.com to learn more.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
