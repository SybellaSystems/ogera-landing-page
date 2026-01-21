"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AccountType = "student" | "employer";

export default function RegisterPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<AccountType>("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation checks
  const isFullNameValid = fullName.trim().length >= 2;
  const isEmailValid = email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;
  const isPhoneValid = phoneNumber.trim().length >= 10;
  const isNationalIdValid = accountType === "employer" || nationalId.trim().length >= 6;
  const isBusinessIdValid = accountType === "student" || businessId.trim().length >= 3;
  const isFormValid = isFullNameValid && isEmailValid && isPasswordValid && isPhoneValid && isNationalIdValid && isBusinessIdValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    console.log("Register attempt:", { accountType, fullName, email, password, nationalId, businessId, phoneNumber });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="register-container">
      {/* Left Side - Info Panel */}
      <div className="register-left">
        <div className="left-content">
          <Link href="/" className="left-logo">
            <img src="/ogera.png" alt="Ogera" className="left-logo-icon" />
            <div className="left-logo-content">
              <span className="left-logo-text">Ogera</span>
              <span className="left-logo-slogan">Find Jobs You Can Trust</span>
            </div>
          </Link>

          <div className="hero-text">
            <h1>Your Success Story Starts Here</h1>
            <p>Connect with trusted employers, earn money instantly via mobile payments, and maintain your academic excellence - all in one platform designed for African students.</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">"I earned $500 last month while maintaining my 3.8 GPA! Ogera's academic tracking kept me focused."</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://i.pinimg.com/1200x/57/12/89/5712896c06fac1674bd9372323de6f12.jpg" alt="Daphne Park" />
              </div>
              <div className="author-info">
                <span className="author-name">Daphne Park</span>
                <span className="author-role">Computer Science Student</span>
              </div>
            </div>
          </div>

        </div>

        <div className="blue-bg">
          <svg className="wave-svg" viewBox="0 0 400 800" preserveAspectRatio="none">
            <path
              d="M350,0 Q280,150 320,300 Q360,450 300,600 Q240,750 280,800"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="80"
              fill="none"
            />
            <path
              d="M400,0 Q330,200 380,400 Q430,600 350,800"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="100"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="register-right">
        <div className="register-form-wrapper">
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

          <div className="form-header">
            <h1>Create your account with us below</h1>
            <p>Already have an account? <Link href="/auth/login">Sign In</Link></p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="account-type-section">
              <label className="section-label">You're creating an account as?</label>
              <div className="account-type-options">
                <button
                  type="button"
                  className={`account-type-btn ${accountType === "student" ? "active" : ""}`}
                  onClick={() => setAccountType("student")}
                >
                  <span className="radio-circle"></span>
                  As a Student
                </button>
                <button
                  type="button"
                  className={`account-type-btn ${accountType === "employer" ? "active" : ""}`}
                  onClick={() => setAccountType("employer")}
                >
                  <span className="radio-circle"></span>
                  As a Employer
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
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
                  placeholder="Create your password"
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

            {accountType === "student" && (
              <div className="form-group">
                <label htmlFor="nationalId">National ID Number</label>
                <input
                  type="text"
                  id="nationalId"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  placeholder="Enter your national id number"
                  required={accountType === "student"}
                />
              </div>
            )}

            {accountType === "employer" && (
              <div className="form-group">
                <label htmlFor="businessId">Business registration ID</label>
                <input
                  type="text"
                  id="businessId"
                  value={businessId}
                  onChange={(e) => setBusinessId(e.target.value)}
                  placeholder="Enter your business registration id"
                  required={accountType === "employer"}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <button type="submit" className="signup-btn">
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
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

        .register-container {
          height: 100vh;
          display: flex;
          background: #fff;
          font-family: 'Lateef', Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        /* Left Side */
        .register-left {
          flex: 0 0 45%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #3399FF 0%, #0066CC 40%, #0052A3 100%);
        }

        .blue-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .wave-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          right: 0;
          top: 0;
        }

        .left-content {
          position: relative;
          z-index: 1;
          padding: 40px;
          color: white;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: 60px;
          padding-bottom: 40px;
        }

        .left-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          gap: 8px;
          margin-bottom: 60px;
        }

        .left-logo-icon {
          height: 32px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .left-logo-content {
          display: flex;
          flex-direction: column;
        }

        .left-logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
        }

        .left-logo-slogan {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 400;
        }

        .hero-text {
          margin-bottom: 40px;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 20px 0;
        }

        .hero-text p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
          margin: 0;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          margin-top: auto;
        }

        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 16px 0;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-fallback {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
        }

        .avatar-fallback.hidden {
          display: none;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .author-role {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        /* Right Side */
        .register-right {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px;
          padding-top: max(40px, env(safe-area-inset-top));
          padding-bottom: max(40px, env(safe-area-inset-bottom));
          overflow-y: auto;
          box-sizing: border-box;
        }

        .register-form-wrapper {
          width: 100%;
          max-width: 440px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 16px;
          transition: color 0.2s ease;
        }

        .back-btn:hover {
          color: #0066CC;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          gap: 10px;
          margin-bottom: 24px;
        }

        .logo-icon {
          height: 36px;
          width: auto;
        }

        .logo-content {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0066CC;
        }

        .logo-slogan {
          font-size: 0.7rem;
          color: #666;
          font-weight: 400;
        }

        .form-header {
          margin-top: 16px;
          margin-bottom: 28px;
        }

        .form-header h1 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .form-header p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .form-header a {
          color: #0066CC;
          text-decoration: underline;
          font-weight: 500;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .section-label {
          font-size: 0.9rem;
          color: #374151;
          margin-bottom: 10px;
          display: block;
        }

        .account-type-section {
          margin-bottom: 4px;
        }

        .account-type-options {
          display: flex;
          gap: 12px;
        }

        .account-type-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          font-size: 0.9rem;
          color: #374151;
          transition: all 0.2s ease;
        }

        .account-type-btn:hover {
          border-color: #0066CC;
        }

        .account-type-btn.active {
          border-color: #0066CC;
          color: #0066CC;
          background: rgba(0, 102, 204, 0.02);
        }

        .radio-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #d1d5db;
          position: relative;
          transition: all 0.2s ease;
        }

        .account-type-btn.active .radio-circle {
          border-color: #0066CC;
        }

        .account-type-btn.active .radio-circle::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0066CC;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
        }

        .form-group input {
          padding: 12px 14px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s ease;
          outline: none;
          background: #fff;
          color: #000;
        }

        .form-group input:focus {
          border-color: #0066CC;
          box-shadow: none;
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

        .signup-btn {
          padding: 14px 48px;
          background: #0066CC;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
          width: fit-content;
          align-self: flex-start;
        }

        .signup-btn:hover {
          background: #0052A3;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .register-left {
            flex: 0 0 40%;
          }

          .hero-text h1 {
            font-size: 2rem;
          }
        }

        @media (max-width: 968px) {
          html, body {
            overflow-y: auto;
            height: auto;
          }

          .register-container {
            height: auto;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow-y: auto;
          }

          .register-left {
            display: none;
          }

          .register-right {
            width: 100%;
            padding: 40px 30px;
            padding-top: max(40px, env(safe-area-inset-top));
            padding-bottom: max(40px, env(safe-area-inset-bottom));
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow-y: visible;
          }

          .register-form-wrapper {
            max-width: 450px;
            padding-bottom: 20px;
          }
        }

        @media (max-width: 640px) {
          .register-right {
            padding: 30px 20px;
            padding-top: max(30px, env(safe-area-inset-top));
            padding-bottom: max(30px, env(safe-area-inset-bottom));
          }

          .register-form-wrapper {
            max-width: 100%;
            padding-bottom: 20px;
          }

          .form-header h1 {
            font-size: 1.4rem;
          }

          .account-type-options {
            flex-direction: column;
            gap: 10px;
          }

          .form-group input {
            padding: 11px 12px;
            font-size: 16px;
            min-height: 44px;
          }

          .signup-btn {
            padding: 14px 24px;
            font-size: 1rem;
            min-height: 48px;
            width: 100%;
          }

          .register-form {
            gap: 14px;
          }
        }

        @media (max-width: 400px) {
          .register-right {
            padding: 24px 16px;
            padding-top: max(24px, env(safe-area-inset-top));
            padding-bottom: max(24px, env(safe-area-inset-bottom));
          }

          .register-form-wrapper {
            padding-bottom: 24px;
          }

          .logo-icon {
            height: 32px;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .form-header h1 {
            font-size: 1.25rem;
          }

          .register-form {
            gap: 12px;
          }

          .signup-btn {
            width: 100%;
            padding: 14px 20px;
            min-height: 48px;
          }
        }

        /* iPhone 6/7/8/SE 2nd gen (375px) */
        @media (max-width: 375px) {
          .register-right {
            padding: 20px 14px;
            padding-top: max(20px, env(safe-area-inset-top));
            padding-bottom: max(20px, env(safe-area-inset-bottom));
          }

          .logo {
            margin-bottom: 20px;
          }

          .logo-icon {
            height: 30px;
          }

          .logo-text {
            font-size: 1.25rem;
          }

          .logo-slogan {
            font-size: 0.65rem;
          }

          .form-header {
            margin-top: 12px;
            margin-bottom: 20px;
          }

          .form-header h1 {
            font-size: 1.2rem;
          }

          .form-group input {
            padding: 10px 12px;
            font-size: 16px;
            min-height: 44px;
          }

          .signup-btn {
            width: 100%;
            padding: 14px 18px;
            font-size: 1rem;
            min-height: 48px;
          }

          .account-type-btn {
            padding: 12px 14px;
            font-size: 0.85rem;
          }
        }

        /* iPhone SE 1st gen (320px) */
        @media (max-width: 320px) {
          html, body {
            overflow-y: auto;
          }

          .register-container {
            height: auto;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow-y: auto;
          }

          .register-right {
            padding: 16px 12px;
            padding-top: max(16px, env(safe-area-inset-top));
            padding-bottom: max(16px, env(safe-area-inset-bottom));
            min-height: auto;
            align-items: flex-start;
          }

          .register-form-wrapper {
            width: 100%;
          }

          .logo {
            margin-bottom: 16px;
            gap: 8px;
          }

          .logo-icon {
            height: 28px;
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-slogan {
            font-size: 0.6rem;
          }

          .back-btn {
            margin-bottom: 8px;
            padding: 4px 0;
          }

          .back-btn svg {
            width: 22px;
            height: 22px;
          }

          .form-header {
            margin-top: 8px;
            margin-bottom: 16px;
          }

          .form-header h1 {
            font-size: 1.1rem;
            margin-bottom: 6px;
          }

          .form-header p {
            font-size: 0.8rem;
          }

          .register-form {
            gap: 10px;
          }

          .form-group {
            gap: 3px;
          }

          .form-group label {
            font-size: 0.75rem;
          }

          .form-group input {
            padding: 10px;
            font-size: 16px;
            border-radius: 6px;
            min-height: 44px;
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

          .account-type-section {
            margin-bottom: 0;
          }

          .section-label {
            font-size: 0.75rem;
            margin-bottom: 8px;
          }

          .account-type-btn {
            padding: 10px 12px;
            font-size: 0.8rem;
            gap: 8px;
          }

          .radio-circle {
            width: 16px;
            height: 16px;
          }

          .account-type-btn.active .radio-circle::after {
            width: 8px;
            height: 8px;
          }

          .signup-btn {
            width: 100%;
            padding: 14px;
            font-size: 1rem;
            margin-top: 8px;
            border-radius: 6px;
            min-height: 48px;
          }

          .register-form-wrapper {
            padding-bottom: 24px;
          }
        }

        @media (max-height: 500px) and (orientation: landscape) {
          .register-container {
            height: auto;
            min-height: 100vh;
          }

          .register-right {
            padding: 20px;
            align-items: flex-start;
          }

          .form-header {
            margin-bottom: 16px;
          }

          .register-form {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
