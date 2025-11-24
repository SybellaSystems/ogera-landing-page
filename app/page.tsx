import Navbar from "@/components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Companies from "../components/Companies/Companies";
import JobListings from "../components/JobListings/JobListings";
import JobTypes from "../components/JobTypes/JobTypes";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Companies />
      <JobListings />
      <JobTypes />
      <Features />
      <Testimonials />
        <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
