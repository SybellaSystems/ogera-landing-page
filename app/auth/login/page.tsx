"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt:", { email, password });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-left">
        <div className="login-form-wrapper">
          <button
            type="button"
            className="back-btn"
            onClick={() => router.back()}
            aria-label="Go back"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <Link href="/" className="logo">
            <img src="/ogera.png" alt="Ogera" className="logo-icon" />
            <div className="logo-content">
              <span className="logo-text">Ogera</span>
              <span className="logo-slogan">Find Jobs You Can Trust</span>
            </div>
          </Link>

          <div className="welcome-section">
            <h1>Welcome to Ogera</h1>
            <p>Sign in to access your Ogera account and continue earning while you learn.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Daphne Smith"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <Link href="/auth/forgot-password">Forgot Password ?</Link>
            </div>

            <button type="submit" className="signin-btn" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link href="/auth/register">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Info Panel */}
      <div className="login-right">
        <div className="purple-bg">
          {/* Flowing wave curves */}
          <svg className="wave-svg" viewBox="0 0 400 800" preserveAspectRatio="none">
            <path
              d="M350,0 Q280,150 320,300 Q360,450 300,600 Q240,750 280,800"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="80"
              fill="none"
            />
            <path
              d="M400,0 Q330,200 380,400 Q430,600 350,800"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="100"
              fill="none"
            />
            <path
              d="M300,0 Q200,200 250,400 Q300,600 200,800"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="120"
              fill="none"
            />
            <path
              d="M0,500 Q100,450 200,500 Q300,550 400,480 L400,800 L0,800 Z"
              fill="rgba(255,255,255,0.06)"
            />
            <path
              d="M0,600 Q150,550 250,620 Q350,690 400,600 L400,800 L0,800 Z"
              fill="rgba(255,255,255,0.05)"
            />
          </svg>
          <div className="accent-circle top-circle"></div>
          <div className="accent-circle bottom-circle"></div>
        </div>

        <div className="info-content">
          <div className="slide-content">
            <h2>Empowering Africa's Students</h2>
            <p>Ogera is Africa's premier student job platform that connects ambitious students with flexible, trusted part-time opportunities while ensuring academic excellence through performance tracking and instant mobile money payments.</p>
          </div>

          <div className="slide-footer">
            <p>Ogera is dedicated to solving the critical challenge facing African students</p>
          </div>
        </div>
      </div>

      <style>{`
        html, body {
          background: #fff !important;
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          -webkit-text-size-adjust: 100%;
        }

        .login-container {
          height: 100vh;
          display: flex;
          background: #fff;
          font-family: 'Lateef', Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .login-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          padding-top: max(40px, env(safe-area-inset-top));
          padding-bottom: max(40px, env(safe-area-inset-bottom));
          padding-left: max(40px, env(safe-area-inset-left));
          padding-right: max(40px, env(safe-area-inset-right));
          box-sizing: border-box;
        }

        .login-form-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 16px;
          transition: color 0.2s ease;
          font-family: inherit;
        }

        .back-btn:hover {
          color: #0066CC;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 40px;
          gap: 8px;
        }

        .logo-icon {
          height: 36px;
          width: auto;
          object-fit: contain;
        }

        .logo-content {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
        }

        .logo-slogan {
          font-size: 0.7rem;
          color: #666;
          font-weight: 400;
        }

        .welcome-section {
          margin-bottom: 32px;
        }

        .welcome-section h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px 0;
        }

        .welcome-section p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
        }

        .form-group input {
          padding: 14px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s ease;
          outline: none;
          background: #fff;
          color: #000;
        }

        .form-group input:focus {
          border-color: #0066CC;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }

        .form-group input::placeholder {
          color: #9ca3af;
        }

        .password-input {
          position: relative;
        }

        .password-input input {
          width: 100%;
          padding-right: 48px;
        }

        .toggle-password {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .forgot-password {
          text-align: right;
          margin-top: -8px;
        }

        .forgot-password a {
          color: #0066CC;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        .signin-btn {
          padding: 14px 24px;
          background: #0066CC;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .signin-btn:hover:not(:disabled) {
          background: #0052A3;
        }

        .signin-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .signup-link {
          text-align: center;
          margin-top: 24px;
          color: #666;
          font-size: 0.9rem;
        }

        .signup-link a {
          color: #0066CC;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }

        /* Right Side */
        .login-right {
          flex: 1;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          border-radius: 25px 0 0 25px;
          background: linear-gradient(180deg, #3399FF 0%, #0066CC 40%, #0052A3 100%);
        }

        .purple-bg {
          position: absolute;
          inset: 0;
        }

        .wave-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        .accent-circle {
          position: absolute;
          border-radius: 50%;
        }

        .top-circle {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(51,153,255,0.6) 0%, rgba(0,102,204,0.3) 50%, transparent 70%);
          top: -80px;
          right: -80px;
        }

        .bottom-circle {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,82,163,0.5) 0%, rgba(0,82,163,0.2) 50%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }

        .info-content {
          position: relative;
          z-index: 1;
          padding: 40px;
          color: white;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          width: 100%;
          max-width: 480px;
        }

        .slide-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 32px;
          margin-top: 80px;
        }

        .slide-content h2 {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }

        .slide-content p {
          font-size: 0.95rem;
          line-height: 1.7;
          opacity: 0.95;
          margin: 0;
        }

        .slide-footer {
          margin-top: auto;
          padding-bottom: 40px;
        }

        .slide-footer p {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
          opacity: 0.95;
        }

        @media (max-width: 968px) {
          .login-right {
            display: none;
          }

          .login-left {
            width: 100%;
            padding: 40px 30px;
            padding-top: max(40px, env(safe-area-inset-top));
            padding-bottom: max(40px, env(safe-area-inset-bottom));
          }

          .login-form-wrapper {
            max-width: 450px;
          }
        }

        @media (max-width: 768px) {
          .login-left {
            padding: 32px 24px;
          }
        }

        @media (max-width: 640px) {
          .login-left {
            padding: 30px 20px;
          }

          .login-form-wrapper {
            max-width: 100%;
          }

          .welcome-section h1 {
            font-size: 1.5rem;
          }

          .welcome-section p {
            font-size: 0.9rem;
          }

          .form-group label {
            font-size: 0.85rem;
          }

          .form-group input {
            padding: 12px 14px;
            font-size: 0.95rem;
          }

          .signin-btn {
            padding: 12px 20px;
            font-size: 0.95rem;
          }

          .logo-icon {
            height: 30px;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .logo-slogan {
            font-size: 0.6rem;
          }

          .back-btn {
            font-size: 0.85rem;
            margin-bottom: 12px;
          }
        }

        @media (max-width: 400px) {
          .login-left {
            padding: 24px 16px;
            padding-top: max(24px, env(safe-area-inset-top));
            padding-bottom: max(24px, env(safe-area-inset-bottom));
          }

          .welcome-section h1 {
            font-size: 1.35rem;
          }

          .logo {
            margin-bottom: 30px;
          }

          .welcome-section {
            margin-bottom: 24px;
          }

          .login-form {
            gap: 16px;
          }

          .signup-link {
            margin-top: 20px;
            font-size: 0.85rem;
          }
        }

        /* iPhone 6/7/8/SE 2nd gen (375px) */
        @media (max-width: 375px) {
          .login-left {
            padding: 20px 14px;
          }

          .welcome-section h1 {
            font-size: 1.25rem;
          }

          .welcome-section p {
            font-size: 0.85rem;
          }

          .form-group input {
            padding: 11px 12px;
            font-size: 0.9rem;
          }

          .signin-btn {
            padding: 11px 18px;
            font-size: 0.9rem;
          }
        }

        /* iPhone SE 1st gen and very small screens (320px) */
        @media (max-width: 320px) {
          html, body {
            overflow-y: auto;
          }

          .login-container {
            height: auto;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow-y: auto;
          }

          .login-left {
            padding: 16px 12px;
            padding-top: max(16px, env(safe-area-inset-top));
            padding-bottom: max(16px, env(safe-area-inset-bottom));
            min-height: auto;
            align-items: flex-start;
          }

          .login-form-wrapper {
            width: 100%;
          }

          .logo {
            margin-bottom: 16px;
            gap: 6px;
          }

          .logo-icon {
            height: 24px;
          }

          .logo-text {
            font-size: 1.1rem;
          }

          .logo-slogan {
            font-size: 0.5rem;
          }

          .back-btn {
            font-size: 0.75rem;
            margin-bottom: 10px;
            padding: 4px 0;
          }

          .back-btn svg {
            width: 22px;
            height: 22px;
          }

          .welcome-section {
            margin-bottom: 16px;
          }

          .welcome-section h1 {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }

          .welcome-section p {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .login-form {
            gap: 12px;
          }

          .form-group {
            gap: 4px;
          }

          .form-group label {
            font-size: 0.75rem;
          }

          .form-group input {
            padding: 10px;
            font-size: 16px; /* Prevents zoom on iOS */
            border-radius: 6px;
            min-height: 44px; /* Touch-friendly */
          }

          .password-input input {
            padding-right: 40px;
          }

          .toggle-password {
            right: 8px;
            min-width: 32px;
            min-height: 32px;
          }

          .toggle-password svg {
            width: 18px;
            height: 18px;
          }

          .forgot-password {
            margin-top: -2px;
          }

          .forgot-password a {
            font-size: 0.75rem;
            min-height: 32px;
            display: inline-flex;
            align-items: center;
          }

          .signin-btn {
            padding: 12px 14px;
            font-size: 0.9rem;
            margin-top: 4px;
            border-radius: 6px;
            min-height: 44px; /* Touch-friendly */
          }

          .signup-link {
            margin-top: 14px;
            font-size: 0.75rem;
            padding-bottom: 10px;
          }
        }

        /* Landscape mode for small devices */
        @media (max-height: 500px) and (orientation: landscape) {
          .login-container {
            height: auto;
            min-height: 100vh;
          }

          .login-left {
            padding: 20px;
            align-items: flex-start;
          }

          .logo {
            margin-bottom: 12px;
          }

          .welcome-section {
            margin-bottom: 16px;
          }

          .login-form {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
