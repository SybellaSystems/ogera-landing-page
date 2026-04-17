"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar/NavbarWrapper";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Companies from "../components/Companies/Companies";
import JobListings from "../components/JobListings/JobListings";
import JobTypes from "../components/JobTypes/JobTypes";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection/FAQSection";

function Home() {
  const [user, setUser] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // -----------------------------
  // Load HubSpot script once
  // -----------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/147717629.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // -----------------------------
  // TRIGGER 1: Show after scrolling
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowForm(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------
  // TRIGGER 2: Show after 2 minutes
  // -----------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 120000); // 2 minutes = 120,000ms

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <Navbar />

      <Hero onGetStarted={handleGetStarted} user={user} />

      <SearchBar />
      <Companies />
      <JobListings />
      <JobTypes />
      <Features />
      <Testimonials />

      {/* -----------------------------
          SMART HUBSPOT FORM SECTION
      ------------------------------ */}
      {!user && showForm && (
        <section style={{ margin: "80px 0", padding: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Join Ogera – Start Your Journey
          </h2>

          <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="ca2efd54-69a7-471b-b66f-73cab72b48c8"
            data-portal-id="147717629"
          />
        </section>
      )}

      <FAQSection />
      <Footer />
    </>
  );
}

export default Home;