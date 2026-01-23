"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Step = "email" | "otp" | "reset" | "success";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Validation checks
  const isEmailValid = email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isOtpComplete = otp.every(digit => digit !== "");
  const isPasswordValid = password.length >= 8 && password === confirmPassword;

  // Resend timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Redirect to login after success
  useEffect(() => {
    if (step === "success") {
      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, router]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call to send OTP
    console.log("Sending OTP to:", email);
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      setResendTimer(60);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const focusIndex = Math.min(pastedData.length, 5);
    otpRefs.current[focusIndex]?.focus();
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setIsLoading(true);
    // Simulate API call to verify OTP
    console.log("Verifying OTP:", otpValue);
    setTimeout(() => {
      setIsLoading(false);
      setStep("reset");
    }, 1000);
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    setIsLoading(true);
    // Simulate API call to resend OTP
    console.log("Resending OTP to:", email);
    setTimeout(() => {
      setIsLoading(false);
      setResendTimer(60);
      setOtp(["", "", "", "", "", ""]);
    }, 1000);
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    // Simulate API call to reset password
    console.log("Resetting password for:", email);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1000);
  };

  const renderStepContent = () => {
    switch (step) {
      case "email":
        return (
          <>
            <div className="welcome-section">
              <h1>Forgot Password?</h1>
              <p>No worries! Enter your email address and we'll send you a verification code.</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button type="submit" className={`submit-btn ${isEmailValid ? 'active' : ''}`} disabled={isLoading || !isEmailValid}>
                {isLoading ? "Sending..." : "Send Code"}
              </button>
            </form>

            <p className="back-to-login">
              Remember your password? <Link href="/auth/login">Sign In</Link>
            </p>
          </>
        );

      case "otp":
        return (
          <>
            <div className="welcome-section">
              <h1>Enter Verification Code</h1>
              <p>We've sent a 6-digit code to <strong>{email}</strong>. Enter it below to continue.</p>
            </div>

            <form onSubmit={handleOtpSubmit} className="auth-form">
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { otpRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onPaste={handleOtpPaste}
                    className="otp-input"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className={`submit-btn ${isOtpComplete ? 'active' : ''}`} disabled={isLoading || !isOtpComplete}>
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>

              <p className="resend-text">
                Didn't receive the code?{" "}
                {resendTimer > 0 ? (
                  <span className="timer">Resend in {resendTimer}s</span>
                ) : (
                  <button type="button" className="resend-btn" onClick={handleResendOtp} disabled={isLoading}>
                    Resend Code
                  </button>
                )}
              </p>
            </form>

            <button type="button" className="change-email-btn" onClick={() => setStep("email")}>
              Change email address
            </button>
          </>
        );

      case "reset":
        return (
          <>
            <div className="welcome-section">
              <h1>Reset Your Password</h1>
              <p>Create a new, strong password for your account. Make sure it's at least 8 characters long.</p>
            </div>

            <form onSubmit={handleResetSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
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

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
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

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className={`submit-btn ${isPasswordValid ? 'active' : ''}`} disabled={isLoading || !isPasswordValid}>
                {isLoading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        );

      case "success":
        return (
          <div className="success-state">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Password Reset Successful!</h1>
            <p>Your password has been successfully reset. You will be redirected to the login page shortly.</p>
            <Link href="/auth/login" className="signin-btn">Sign In Now</Link>
          </div>
        );
    }
  };

  return (
    <div className="forgot-container">
      {/* Left Side - Form */}
      <div className="forgot-left">
        <div className="forgot-form-wrapper">
          {step !== "success" && (
            <button
              type="button"
              className="back-btn"
              onClick={() => {
                if (step === "email") {
                  router.back();
                } else if (step === "otp") {
                  setStep("email");
                } else if (step === "reset") {
                  setStep("otp");
                }
              }}
              aria-label="Go back"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}

          <Link href="/" className="logo">
            <img src="/ogera.png" alt="Ogera" className="logo-icon" />
            <div className="logo-content">
              <span className="logo-text">Ogera</span>
              <span className="logo-slogan">Find Jobs You Can Trust</span>
            </div>
          </Link>

          {renderStepContent()}
        </div>
      </div>


      <style>{`
        html, body {
          background: #fff !important;
          margin: 0;
          padding: 0;
          min-height: 100%;
          -webkit-text-size-adjust: 100%;
        }

        .forgot-container {
          min-height: 100vh;
          min-height: -webkit-fill-available;
          display: flex;
          background: #fff;
          font-family: 'Lateef', Arial, Helvetica, sans-serif;
        }

        .forgot-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          padding-top: max(40px, env(safe-area-inset-top));
          padding-bottom: max(40px, env(safe-area-inset-bottom));
          padding-left: max(40px, env(safe-area-inset-left));
          padding-right: max(40px, env(safe-area-inset-right));
          overflow-y: auto;
          box-sizing: border-box;
        }

        .forgot-form-wrapper {
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
          color: #7F56D9;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 24px;
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
          margin-bottom: 28px;
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

        .auth-form {
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
          border-color: #7F56D9;
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

        /* OTP Input */
        .otp-container {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .otp-input {
          width: 48px;
          height: 56px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          transition: all 0.2s ease;
          color: #000;
        }

        .otp-input:focus {
          border-color: #7F56D9;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }

        .error-message {
          color: #dc2626;
          font-size: 0.85rem;
          margin: -8px 0 0 0;
          text-align: center;
        }

        .submit-btn {
          padding: 14px 24px;
          background: #d1d5db;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: not-allowed;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .submit-btn.active {
          background: #7F56D9;
          cursor: pointer;
        }

        .submit-btn.active:hover:not(:disabled) {
          background: #6941B0;
        }

        .submit-btn:disabled {
          cursor: not-allowed;
        }

        .submit-btn.active:disabled {
          opacity: 0.7;
        }

        .resend-text {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .timer {
          color: #9ca3af;
        }

        .resend-btn {
          background: none;
          border: none;
          color: #7F56D9;
          font-weight: 600;
          cursor: pointer;
          font-size: inherit;
          padding: 0;
        }

        .resend-btn:hover:not(:disabled) {
          text-decoration: underline;
        }

        .resend-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .change-email-btn {
          background: none;
          border: none;
          color: #7F56D9;
          font-size: 0.85rem;
          cursor: pointer;
          margin-top: 16px;
          padding: 0;
          text-decoration: underline;
          font-weight: 500;
        }

        .change-email-btn:hover {
          color: #6941B0;
        }

        .back-to-login {
          text-align: center;
          margin-top: 24px;
          color: #666;
          font-size: 0.9rem;
        }

        .back-to-login a {
          color: #7F56D9;
          text-decoration: none;
          font-weight: 600;
        }

        .back-to-login a:hover {
          text-decoration: underline;
        }

        /* Success State */
        .success-state {
          text-align: center;
        }

        .success-icon {
          margin-bottom: 24px;
        }

        .success-state h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
        }

        .success-state p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .signin-btn {
          display: inline-block;
          padding: 14px 32px;
          background: #7F56D9;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .signin-btn:hover {
          background: #6941B0;
        }

        @media (max-width: 968px) {
          .forgot-left {
            width: 100%;
            padding: 40px 30px;
            padding-top: max(40px, env(safe-area-inset-top));
            padding-bottom: max(40px, env(safe-area-inset-bottom));
          }

          .forgot-form-wrapper {
            max-width: 450px;
          }
        }

        @media (max-width: 768px) {
          .forgot-left {
            padding: 32px 24px;
          }
        }

        @media (max-width: 640px) {
          .forgot-left {
            padding: 30px 20px;
          }

          .forgot-form-wrapper {
            max-width: 100%;
          }

          .welcome-section h1,
          .success-state h1 {
            font-size: 1.5rem;
          }

          .welcome-section p,
          .success-state p {
            font-size: 0.9rem;
          }

          .form-group label {
            font-size: 0.85rem;
          }

          .form-group input {
            padding: 12px 14px;
            font-size: 0.95rem;
          }

          .submit-btn,
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

          .success-icon svg {
            width: 56px;
            height: 56px;
          }

          .otp-input {
            width: 42px;
            height: 50px;
            font-size: 1.3rem;
          }

          .otp-container {
            gap: 8px;
          }
        }

        @media (max-width: 400px) {
          .forgot-left {
            padding: 24px 16px;
            padding-top: max(24px, env(safe-area-inset-top));
            padding-bottom: max(24px, env(safe-area-inset-bottom));
          }

          .welcome-section h1,
          .success-state h1 {
            font-size: 1.35rem;
          }

          .logo {
            margin-bottom: 20px;
          }

          .welcome-section {
            margin-bottom: 24px;
          }

          .auth-form {
            gap: 16px;
          }

          .back-to-login {
            margin-top: 20px;
            font-size: 0.85rem;
          }

          .otp-input {
            width: 38px;
            height: 46px;
            font-size: 1.2rem;
          }

          .otp-container {
            gap: 6px;
          }
        }

        /* iPhone 6/7/8/SE 2nd gen (375px) */
        @media (max-width: 375px) {
          .forgot-left {
            padding: 20px 14px;
          }

          .welcome-section h1,
          .success-state h1 {
            font-size: 1.25rem;
          }

          .welcome-section p,
          .success-state p {
            font-size: 0.85rem;
          }

          .otp-input {
            width: 36px;
            height: 44px;
            font-size: 1.1rem;
          }

          .otp-container {
            gap: 5px;
          }

          .form-group input {
            padding: 11px 12px;
            font-size: 0.9rem;
          }

          .submit-btn,
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

          .forgot-container {
            height: auto;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow-y: auto;
          }

          .forgot-left {
            padding: 16px 12px;
            padding-top: max(16px, env(safe-area-inset-top));
            padding-bottom: max(16px, env(safe-area-inset-bottom));
            min-height: auto;
            align-items: flex-start;
          }

          .forgot-form-wrapper {
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

          .welcome-section h1,
          .success-state h1 {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }

          .welcome-section p,
          .success-state p {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .auth-form {
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

          .otp-container {
            gap: 4px;
          }

          .otp-input {
            width: 36px;
            height: 44px;
            font-size: 16px; /* Prevents zoom on iOS */
            border-radius: 6px;
          }

          .error-message {
            font-size: 0.7rem;
          }

          .submit-btn,
          .signin-btn {
            padding: 12px 14px;
            font-size: 0.9rem;
            margin-top: 4px;
            border-radius: 6px;
            min-height: 44px; /* Touch-friendly */
          }

          .resend-text {
            font-size: 0.75rem;
          }

          .resend-btn {
            min-height: 32px;
            padding: 4px 8px;
          }

          .change-email-btn {
            font-size: 0.75rem;
            margin-top: 12px;
            min-height: 32px;
            padding: 4px 0;
          }

          .back-to-login {
            margin-top: 14px;
            font-size: 0.75rem;
            padding-bottom: 10px;
          }

          .success-icon {
            margin-bottom: 16px;
          }

          .success-icon svg {
            width: 48px;
            height: 48px;
          }
        }

        /* Landscape mode for small devices */
        @media (max-height: 500px) and (orientation: landscape) {
          .forgot-container {
            height: auto;
            min-height: 100vh;
          }

          .forgot-left {
            padding: 20px;
            align-items: flex-start;
          }

          .logo {
            margin-bottom: 12px;
          }

          .welcome-section {
            margin-bottom: 16px;
          }

          .auth-form {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
