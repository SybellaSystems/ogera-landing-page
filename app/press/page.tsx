"use client";

import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./press.css";

export default function PressPage() {
  return (
    <div className="press-page">
      <div className="press-container">
        <Link href="/" className="home-link">
          <span className="home-icon">←</span> Back to Home
        </Link>
        <h1>Press & Media</h1>

        <div className="press-content">
          <p>
            Welcome to the Ogera press room. Here you'll find the latest news, press releases,
            media kits, and resources about Ogera. For media inquiries, interviews, or additional
            information, please contact our communications team at press@ogera.com.
          </p>

          <section>
            <h2>About Ogera</h2>
            <p>
              Ogera is a global remote job marketplace that connects talented professionals
              with companies offering remote work opportunities worldwide. Founded to democratize
              access to remote employment, Ogera serves thousands of users across multiple
              continents, facilitating meaningful connections between exceptional talent and
              forward-thinking companies.
            </p>
          </section>

          <section>
            <h2>Latest News</h2>
            <p>
              Stay updated with Ogera's latest announcements, product launches, partnerships,
              and milestones. We regularly share updates about new features, market expansion,
              funding rounds, and strategic initiatives. Subscribe to our newsletter or follow
              our social media channels to receive real-time updates about Ogera's growth
              and impact.
            </p>
          </section>

          <section>
            <h2>Press Releases</h2>
            <p>
              Access our official press releases covering major company announcements,
              including product launches, partnerships, expansion into new markets, funding
              announcements, executive appointments, and significant milestones. All press
              releases are available for publication with proper attribution to Ogera.
            </p>
          </section>

          <section>
            <h2>Media Kit</h2>
            <p>
              Download our comprehensive media kit containing high-resolution logos, brand
              guidelines, product screenshots, executive headshots, company fact sheet, and
              key statistics. Our media kit is designed to help journalists, bloggers, and
              content creators accurately represent Ogera in their coverage. Available in
              multiple formats for print and digital use.
            </p>
          </section>

          <section>
            <h2>Leadership Team</h2>
            <p>
              Meet the leadership team driving Ogera's vision forward. Our executives bring
              decades of combined experience in technology, recruitment, product development,
              and business strategy. They are available for interviews, speaking engagements,
              and expert commentary on remote work trends, digital transformation, and the
              future of employment.
            </p>
          </section>

          <section>
            <h2>Industry Insights</h2>
            <p>
              Ogera's leadership team regularly shares insights on remote work trends,
              hiring best practices, workforce transformation, and the future of employment.
              We publish research reports, white papers, and thought leadership articles.
              Our experts are available to provide commentary on industry trends and
              employment market dynamics.
            </p>
          </section>

          <section>
            <h2>Awards & Recognition</h2>
            <p>
              Ogera has been recognized by leading technology publications, business
              journals, and industry organizations for innovation in the remote work space.
              Our platform has received accolades for user experience, social impact, and
              contribution to the future of work. We're proud to be leaders in democratizing
              access to remote employment opportunities.
            </p>
          </section>

          <section>
            <h2>Media Coverage</h2>
            <p>
              Ogera has been featured in major technology publications, business news outlets,
              and industry-specific media. Our story of transforming remote work has resonated
              with journalists worldwide. We maintain an archive of significant media coverage
              and are happy to provide additional context or follow-up information for
              published stories.
            </p>
          </section>

          <section>
            <h2>Speaking Opportunities</h2>
            <p>
              Our leadership team is available for speaking engagements at conferences,
              webinars, podcasts, and industry events. Topics include the future of remote
              work, building distributed teams, technology in recruitment, entrepreneurship,
              and digital transformation. To book a speaker, contact our communications
              team with event details.
            </p>
          </section>

          <section>
            <h2>Contact Press Team</h2>
            <p>
              For media inquiries, interview requests, press kit access, or additional
              information, contact our press team at press@ogera.com. We typically respond
              within 24 hours during business days. For urgent requests, please indicate
              "URGENT" in your subject line. Follow us on social media for real-time updates
              and announcements.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
