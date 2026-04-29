"use client";

import { useState, useRef, useEffect } from "react";

function parseCookies(): Record<string, string> {
  return document.cookie.split(";").reduce((acc, c) => {
    const [k, v] = c.trim().split("=");
    if (k) acc[k.trim()] = decodeURIComponent(v || "");
    return acc;
  }, {} as Record<string, string>);
}

function getInitials(name: string): string {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

interface Props {
  appUrl: string;
  mobile?: boolean;
  onClose?: () => void;
}

export default function NavbarAuth({ appUrl, mobile = false, onClose }: Props) {
  // Lazy initializer: runs synchronously on first client render.
  // Since this component is loaded with ssr:false, document.cookie is always available.
  const [{ isLoggedIn, userName, userImage }] = useState(() => {
    const c = parseCookies();
    return {
      isLoggedIn: c["ogera_logged_in"] === "true",
      userName: c["ogera_user_name"] || "",
      userImage: c["ogera_user_image"] || "",
    };
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    // 1) Ask the backend to invalidate the refreshToken httpOnly cookie.
    //    This is what actually logs the user out of the dashboard session —
    //    without this, they'd still be logged in on app.ogera... next time they visit.
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ogera-be-1.onrender.com/api";
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // best-effort; fall through to cookie cleanup either way
    }

    // 2) Clear the shared hint cookies. We need to clear both the host-scoped
    //    AND the domain-scoped variants because we don't know which one set them.
    const clear = (name: string) => {
      document.cookie = `${name}=; path=/; max-age=0`;
      document.cookie = `${name}=; path=/; max-age=0; Domain=.ogera.sybellasystems.co.rw`;
    };
    clear("ogera_logged_in");
    clear("ogera_user_name");
    clear("ogera_user_image");

    onClose?.();
    window.location.reload();
  };

  const firstName = userName.split(" ")[0] || "User";

  /* ── Mobile ── */
  if (mobile) {
    return (
      <>
        {isLoggedIn && (
          <div className="mobile-user-header">
            <div className="nav-avatar nav-avatar-lg">
              {userImage
                ? <img src={userImage} alt={userName} className="nav-avatar-img" />
                : <span className="nav-avatar-initials">{getInitials(userName)}</span>}
            </div>
            <p className="mobile-user-name">{userName}</p>
          </div>
        )}

        <div className="modal-auth">
          {isLoggedIn ? (
            <>
              <a href={`${appUrl}/dashboard`} className="modal-signup-btn-full" onClick={onClose}>Dashboard</a>
              <a href={`${appUrl}/dashboard/profile`} className="modal-login-link" onClick={onClose}>My Profile</a>
              <button className="modal-logout-btn" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <a href={`${appUrl}/auth/login`} className="modal-login-link" onClick={onClose}>Log In</a>
              <a href={`${appUrl}/auth/register`} className="modal-signup-btn-full" onClick={onClose}>Sign Up</a>
            </>
          )}
        </div>
      </>
    );
  }

  /* ── Desktop ── */
  return isLoggedIn ? (
    <div className="nav-user-menu" ref={dropdownRef}>
      <button
        className="nav-user-trigger"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="User menu"
      >
        <div className="nav-avatar">
          {userImage
            ? <img src={userImage} alt={userName} className="nav-avatar-img" />
            : <span className="nav-avatar-initials">{getInitials(userName)}</span>}
        </div>
        <span className="nav-user-name">{firstName}</span>
        <svg className={`nav-chevron ${dropdownOpen ? "open" : ""}`} width="14" height="14"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="nav-dropdown">
          <div className="nav-dropdown-header">
            <div className="nav-dropdown-avatar">
              {userImage
                ? <img src={userImage} alt={userName} className="nav-avatar-img" />
                : <span className="nav-avatar-initials">{getInitials(userName)}</span>}
            </div>
            <div>
              <p className="nav-dropdown-name">{userName}</p>
            </div>
          </div>
          <div className="nav-dropdown-divider" />
          <a href={`${appUrl}/dashboard`} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </a>
          <a href={`${appUrl}/dashboard/profile`} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            My Profile
          </a>
          <div className="nav-dropdown-divider" />
          <button className="nav-dropdown-item nav-dropdown-logout" onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </button>
        </div>
      )}
    </div>
  ) : (
    <>
      <a href={`${appUrl}/auth/login`} className="login">Login</a>
      <a href={`${appUrl}/auth/register`} className="signup">Signup</a>
    </>
  );
}
