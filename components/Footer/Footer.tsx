"use client";


import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>OGERA</h3>
          <p>
            A global remote job marketplace connecting talent and companies
            seamlessly.
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Community</li>
            <li>Safety & Trust</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SokoHire. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
