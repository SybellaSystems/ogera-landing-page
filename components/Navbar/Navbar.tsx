"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Navbar.css";

function Navbar({ solid = false }: { solid?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav className={`nav${isScrolled || solid ? " nav-scrolled" : ""}`}>
        <Link href="/" className="logo-container">
          <img
            src="/ogera_logo-removebg-preview.png"
            alt="Ogera Logo"
            className="logo-image"
          />
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link href="/partners" className={pathname === "/partners" ? "active" : ""}>Partners and Sponsors</Link>
          </li>
          <li>
            <Link href="/scholarship" className={pathname === "/scholarship" ? "active" : ""}>Scholarship Gateway</Link>
          </li>
          <li>
            <Link href="/trustscore" className={pathname === "/trustscore" ? "active" : ""}>About TrustScore</Link>
          </li>
        </ul>

        <div className="nav-actions desktop-actions">
          <a href="https://ogera-frontend.vercel.app/" className="login">Login</a>
          <a href="https://ogera-frontend.vercel.app/auth/register" className="signup">Signup</a>
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
            <Link href="/" onClick={closeMenu} className={pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link href="/partners" onClick={closeMenu} className={pathname === "/partners" ? "active" : ""}>Partners and Sponsors</Link>
          </li>
          <li>
            <Link href="/scholarship" onClick={closeMenu} className={pathname === "/scholarship" ? "active" : ""}>Scholarship Gateway</Link>
          </li>
          <li>
            <Link href="/trustscore" onClick={closeMenu} className={pathname === "/trustscore" ? "active" : ""}>About TrustScore</Link>
          </li>
        </ul>

        <div className="modal-divider"></div>

        {/* Auth Actions */}
        <div className="modal-auth">
          <a href="http://45.83.40.83:5173/auth/login" className="modal-login-link">Log In</a>
          <a href="http://45.83.40.83:5173/auth/register" className="modal-signup-btn-full">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
