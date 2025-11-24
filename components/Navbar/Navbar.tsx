"use client";


import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">Ogera</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Scholarship Gateway</li>
        <li>About TrustScore</li>
        <li>Leaderboard</li>
        <li>Partners and Sponsors</li>
      </ul>

      <div className="nav-actions">
        <button className="login">
            <a href="/auth/login">Login</a>
            
            </button>
        <button className="signup">
            <a href="/auth/register">Signup</a>
            </button>
      </div>
    </nav>
  );
}

export default Navbar;
