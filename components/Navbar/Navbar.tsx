"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ["home", "partners", "scholarship", "leaderboard", "trustscore"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    // Close menu first and restore body scroll
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";

    // Small delay to ensure menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection(targetId);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <img
            src="/ogera.png"
            alt="Ogera Logo"
            className="logo-image"
          />
          <div className="logo-text">
            <div className="logo">Ogera</div>
            <span className="slogan">Find Jobs You Can Trust</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={(e) => handleNavClick(e, "home")}>Home</a></li>
          <li><a href="#partners" className={activeSection === "partners" ? "active" : ""} onClick={(e) => handleNavClick(e, "partners")}>Partners and Sponsors</a></li>
          <li><a href="#scholarship" className={activeSection === "scholarship" ? "active" : ""} onClick={(e) => handleNavClick(e, "scholarship")}>Scholarship Gateway</a></li>
          <li><a href="#leaderboard" className={activeSection === "leaderboard" ? "active" : ""} onClick={(e) => handleNavClick(e, "leaderboard")}>Leaderboard</a></li>
          <li><a href="#trustscore" className={activeSection === "trustscore" ? "active" : ""} onClick={(e) => handleNavClick(e, "trustscore")}>About TrustScore</a></li>
        </ul>

        <div className="nav-actions desktop-actions">
          <button className="login">
            <a href="/auth/login">Login</a>
          </button>
          <button className="signup">
            <a href="/auth/register">Signup</a>
          </button>
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`modal-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-modal ${isMenuOpen ? "active" : ""}`}>
        <ul className="modal-nav-links">
          <li>
            <button type="button" onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("partners")}>Partners and Sponsors</button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("scholarship")}>Scholarship Gateway</button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("leaderboard")}>Leaderboard</button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("trustscore")}>About TrustScore</button>
          </li>
        </ul>

        <div className="modal-divider"></div>

        {/* Auth Actions */}
        <div className="modal-auth">
          <a href="/auth/login" className="modal-login-link">Log In</a>
          <a href="/auth/register" className="modal-signup-btn-full">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
