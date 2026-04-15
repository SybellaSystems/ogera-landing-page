"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./Navbar.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173";

// ssr:false — renders only on the client, reads cookies synchronously
// in its lazy useState initializer so the correct state (avatar or
// login/signup) is shown on the very first client render with no flash.
const NavbarAuth = dynamic(() => import("./NavbarAuth"), {
  ssr: false,
  loading: () => <div className="nav-auth-placeholder" />,
});

function Navbar({ solid = false }: { solid?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`nav${isScrolled || solid ? " nav-scrolled" : ""}`}>
        <Link href="/" className="logo-container">
          <img src="/ogera_logo-removebg-preview.png" alt="Ogera Logo" className="logo-image" />
        </Link>

        <ul className="nav-links">
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/partners" className={pathname === "/partners" ? "active" : ""}>Partners and Sponsors</Link></li>
          <li><Link href="/scholarship" className={pathname === "/scholarship" ? "active" : ""}>Scholarship Gateway</Link></li>
          <li><Link href="/trustscore" className={pathname === "/trustscore" ? "active" : ""}>About TrustScore</Link></li>
        </ul>

        <div className="nav-actions desktop-actions">
          <NavbarAuth appUrl={APP_URL} />
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </nav>

      <div className={`modal-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>

      <div className={`mobile-modal ${isMenuOpen ? "active" : ""}`}>
        <ul className="modal-nav-links">
          <li><Link href="/" onClick={closeMenu} className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/partners" onClick={closeMenu} className={pathname === "/partners" ? "active" : ""}>Partners and Sponsors</Link></li>
          <li><Link href="/scholarship" onClick={closeMenu} className={pathname === "/scholarship" ? "active" : ""}>Scholarship Gateway</Link></li>
          <li><Link href="/trustscore" onClick={closeMenu} className={pathname === "/trustscore" ? "active" : ""}>About TrustScore</Link></li>
        </ul>

        <div className="modal-divider"></div>

        <NavbarAuth appUrl={APP_URL} mobile onClose={closeMenu} />
      </div>
    </>
  );
}

export default Navbar;
