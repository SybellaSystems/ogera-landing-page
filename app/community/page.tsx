"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./community.css";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] via-[#e6f0ff] to-white relative">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-br from-[#083d77] to-[#0066CC] z-0"></div>
      
      <main className="flex-1 pt-[60px] pb-10 px-4 relative z-10">
        <div className="community-container">
          <h1>Community</h1>

        <div className="community-content">
          <p>
            Join the vibrant Ogera community! Connect with professionals from around the world,
            share experiences, learn from industry experts, and grow your network. Our community
            is built on collaboration, support, and mutual success.
          </p>

          <section>
            <h2>Community Guidelines</h2>
            <p>
              We believe in creating a respectful, inclusive, and professional environment.
              Treat all members with courtesy, share knowledge generously, and maintain
              professional conduct in all interactions. Harassment, discrimination, or spam
              will not be tolerated.
            </p>
          </section>

          <section>
            <h2>Discussion Forums</h2>
            <p>
              Participate in our discussion forums covering topics like remote work best
              practices, career development, industry insights, and job search strategies.
              Ask questions, share your expertise, and engage in meaningful conversations
              with peers and mentors.
            </p>
          </section>

          <section>
            <h2>Networking Events</h2>
            <p>
              Attend virtual meetups, webinars, and networking events hosted by Ogera.
              Connect with hiring managers, industry leaders, and fellow job seekers.
              These events provide opportunities to learn, showcase your skills, and
              expand your professional network.
            </p>
          </section>

          <section>
            <h2>Success Stories</h2>
            <p>
              Get inspired by success stories from community members who have landed their
              dream remote jobs through Ogera. Learn about their journeys, challenges they
              overcame, and strategies that worked for them. Share your own success story
              to inspire others.
            </p>
          </section>

          <section>
            <h2>Mentorship Program</h2>
            <p>
              Our mentorship program connects experienced professionals with those starting
              their remote work journey. Whether you're seeking guidance or ready to give
              back, participate in our mentorship initiatives to foster growth and learning
              within the community.
            </p>
          </section>

          <section>
            <h2>Resource Sharing</h2>
            <p>
              Access and contribute to our community resource library. Find helpful articles,
              templates, tools, and guides shared by fellow members. From resume templates to
              interview preparation tips, our community shares valuable resources freely.
            </p>
          </section>

          <section>
            <h2>Local Groups</h2>
            <p>
              Connect with Ogera members in your region or timezone. Join local groups to
              organize meetups, collaborate on projects, or simply connect with nearby
              professionals. Build meaningful relationships that extend beyond the digital space.
            </p>
          </section>

          <section>
            <h2>Get Involved</h2>
            <p>
              Become an active community member! Volunteer as a moderator, organize events,
              contribute content, or participate in community initiatives. Together, we make
              Ogera stronger. Contact community@ogera.com to learn about opportunities to
              contribute.
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
