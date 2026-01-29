"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./article.css";

// Article content database
const articleContent: Record<string, Record<string, { title: string; content: React.ReactNode }>> = {
  "getting-started": {
    "create-your-account": {
      title: "Create Your Account",
      content: (
        <>
          <p>Getting started with Ogera is quick and easy. Follow these simple steps to create your account and begin your journey to finding the perfect remote job.</p>

          <h2>Step 1: Visit the Sign Up Page</h2>
          <p>Click the "Sign Up" button in the top right corner of the homepage. You'll be directed to our registration page.</p>

          <h2>Step 2: Enter Your Information</h2>
          <p>Fill in the required fields:</p>
          <ul>
            <li><strong>Email Address:</strong> Use a valid email you check regularly</li>
            <li><strong>Password:</strong> Create a strong password with at least 8 characters</li>
            <li><strong>Full Name:</strong> Enter your legal name as it appears on official documents</li>
          </ul>

          <h2>Step 3: Verify Your Email</h2>
          <p>Check your inbox for a verification email from Ogera. Click the verification link to activate your account. If you don't see it, check your spam folder.</p>

          <h2>Step 4: Complete Your Profile</h2>
          <p>Once verified, you'll be prompted to complete your profile. Add your skills, experience, and a professional photo to increase your chances of getting hired.</p>

          <div className="tip-box">
            <strong>Pro Tip:</strong> A complete profile gets 3x more views from employers!
          </div>
        </>
      ),
    },
    "set-up-your-profile": {
      title: "Set Up Your Profile",
      content: (
        <>
          <p>Your profile is your digital resume. A well-crafted profile helps you stand out to potential employers and increases your chances of landing your dream remote job.</p>

          <h2>Profile Photo</h2>
          <p>Upload a professional headshot. Studies show profiles with photos get 14x more views. Use a clear, well-lit image where your face is visible.</p>

          <h2>Professional Headline</h2>
          <p>Write a compelling headline that summarizes your expertise. For example: "Senior React Developer | 5+ Years Experience | Remote Work Specialist"</p>

          <h2>About Section</h2>
          <p>Write a brief summary (2-3 paragraphs) about yourself:</p>
          <ul>
            <li>Your professional background</li>
            <li>Key skills and expertise</li>
            <li>What you're looking for in your next role</li>
            <li>Your remote work experience</li>
          </ul>

          <h2>Skills & Expertise</h2>
          <p>Add relevant skills that match the jobs you're targeting. Include both technical skills and soft skills.</p>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Use keywords from job postings you're interested in to improve your visibility in search results.
          </div>
        </>
      ),
    },
    "explore-features": {
      title: "Explore Features",
      content: (
        <>
          <p>Ogera offers a comprehensive suite of features designed to help you find and land your perfect remote job. Here's an overview of what you can do on our platform.</p>

          <h2>Job Search</h2>
          <p>Use our powerful search engine to find remote jobs that match your skills and preferences. Filter by:</p>
          <ul>
            <li>Job category and industry</li>
            <li>Experience level</li>
            <li>Salary range</li>
            <li>Company size</li>
            <li>Time zone requirements</li>
          </ul>

          <h2>Saved Searches</h2>
          <p>Save your favorite search criteria and get notified when new matching jobs are posted.</p>

          <h2>Application Tracking</h2>
          <p>Keep track of all your applications in one place. See status updates, interview schedules, and employer responses.</p>

          <h2>Messaging System</h2>
          <p>Communicate directly with employers through our secure messaging platform.</p>

          <h2>Profile Analytics</h2>
          <p>Track who's viewing your profile and how your applications are performing.</p>
        </>
      ),
    },
    "step-by-step-guides": {
      title: "Step-by-Step Guides",
      content: (
        <>
          <p>Follow our comprehensive guides to make the most of your Ogera experience.</p>

          <h2>Guide 1: Finding Your First Remote Job</h2>
          <ol>
            <li>Complete your profile with all relevant information</li>
            <li>Set up job alerts for your target roles</li>
            <li>Apply to at least 5 jobs per week</li>
            <li>Customize each application</li>
            <li>Follow up on applications after one week</li>
          </ol>

          <h2>Guide 2: Preparing for Remote Interviews</h2>
          <ol>
            <li>Test your video and audio equipment</li>
            <li>Choose a quiet, well-lit space</li>
            <li>Research the company thoroughly</li>
            <li>Prepare questions to ask</li>
            <li>Have your resume and portfolio ready</li>
          </ol>

          <h2>Guide 3: Negotiating Remote Work Terms</h2>
          <ol>
            <li>Research market rates for your role</li>
            <li>Consider the full compensation package</li>
            <li>Discuss equipment and home office allowance</li>
            <li>Clarify time zone expectations</li>
            <li>Get everything in writing</li>
          </ol>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Bookmark these guides and revisit them as you progress through your job search journey.
          </div>
        </>
      ),
    },
  },
  "account-management": {
    "update-profile-info": {
      title: "Update Profile Info",
      content: (
        <>
          <p>Keep your profile up-to-date to ensure employers see your latest achievements and experience.</p>

          <h2>How to Update Your Profile</h2>
          <ol>
            <li>Log in to your Ogera account</li>
            <li>Click on your profile picture in the top right</li>
            <li>Select "Profile Settings" from the dropdown</li>
            <li>Edit any section by clicking the pencil icon</li>
            <li>Click "Save Changes" when done</li>
          </ol>

          <h2>What to Update Regularly</h2>
          <ul>
            <li><strong>Work Experience:</strong> Add new roles and achievements</li>
            <li><strong>Skills:</strong> Include new technologies or certifications</li>
            <li><strong>Portfolio:</strong> Showcase recent projects</li>
            <li><strong>Availability:</strong> Update your status if it changes</li>
          </ul>

          <h2>Profile Visibility</h2>
          <p>Control who can see your profile in the Privacy Settings section. Options include:</p>
          <ul>
            <li>Public (visible to all employers)</li>
            <li>Registered users only</li>
            <li>Hidden (only visible when you apply)</li>
          </ul>
        </>
      ),
    },
    "change-password": {
      title: "Change Password",
      content: (
        <>
          <p>Keep your account secure by regularly updating your password.</p>

          <h2>Steps to Change Your Password</h2>
          <ol>
            <li>Go to Account Settings</li>
            <li>Click on "Security"</li>
            <li>Select "Change Password"</li>
            <li>Enter your current password</li>
            <li>Enter your new password twice</li>
            <li>Click "Update Password"</li>
          </ol>

          <h2>Password Requirements</h2>
          <ul>
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Includes at least one number</li>
            <li>Has at least one special character (!@#$%^&*)</li>
          </ul>

          <h2>Forgot Your Password?</h2>
          <p>Click "Forgot Password" on the login page. Enter your email address and we'll send you a reset link.</p>

          <div className="warning-box">
            <strong>Security Note:</strong> Never share your password with anyone. Ogera staff will never ask for your password.
          </div>
        </>
      ),
    },
    "notification-settings": {
      title: "Notification Settings",
      content: (
        <>
          <p>Customize how and when you receive notifications from Ogera.</p>

          <h2>Email Notifications</h2>
          <p>Choose which emails you want to receive:</p>
          <ul>
            <li><strong>Job Alerts:</strong> New jobs matching your saved searches</li>
            <li><strong>Application Updates:</strong> Status changes on your applications</li>
            <li><strong>Messages:</strong> New messages from employers</li>
            <li><strong>Newsletter:</strong> Tips and platform updates</li>
          </ul>

          <h2>Push Notifications</h2>
          <p>Enable browser or mobile push notifications for real-time alerts:</p>
          <ul>
            <li>Instant message notifications</li>
            <li>Interview reminders</li>
            <li>Application deadline alerts</li>
          </ul>

          <h2>Frequency Settings</h2>
          <p>Control how often you receive digest emails:</p>
          <ul>
            <li>Instant (receive immediately)</li>
            <li>Daily digest</li>
            <li>Weekly summary</li>
          </ul>
        </>
      ),
    },
    "security-settings": {
      title: "Security Settings",
      content: (
        <>
          <p>Protect your Ogera account with our comprehensive security features.</p>

          <h2>Two-Factor Authentication (2FA)</h2>
          <p>Add an extra layer of security to your account:</p>
          <ol>
            <li>Go to Account Settings → Security</li>
            <li>Click "Enable 2FA"</li>
            <li>Choose your method (SMS or Authenticator app)</li>
            <li>Follow the setup instructions</li>
            <li>Save your backup codes in a safe place</li>
          </ol>

          <h2>Login History</h2>
          <p>Review recent login activity to spot any unauthorized access. Check the date, time, location, and device used for each login.</p>

          <h2>Active Sessions</h2>
          <p>See all devices currently logged into your account. You can log out of any session remotely.</p>

          <h2>Account Recovery</h2>
          <p>Set up account recovery options:</p>
          <ul>
            <li>Backup email address</li>
            <li>Phone number verification</li>
            <li>Security questions</li>
          </ul>
        </>
      ),
    },
  },
  "job-applications": {
    "search-for-jobs": {
      title: "Search for Jobs",
      content: (
        <>
          <p>Find your perfect remote opportunity using Ogera's powerful job search tools.</p>

          <h2>Basic Search</h2>
          <p>Use the search bar on the homepage to enter keywords, job titles, or company names. Press Enter or click Search to see results.</p>

          <h2>Advanced Filters</h2>
          <p>Refine your search with filters:</p>
          <ul>
            <li><strong>Job Type:</strong> Full-time, Part-time, Contract, Freelance</li>
            <li><strong>Experience Level:</strong> Entry, Mid, Senior, Executive</li>
            <li><strong>Salary Range:</strong> Set minimum and maximum expectations</li>
            <li><strong>Industry:</strong> Tech, Marketing, Design, Finance, etc.</li>
            <li><strong>Company Size:</strong> Startup, SMB, Enterprise</li>
            <li><strong>Time Zone:</strong> Americas, Europe, Asia-Pacific</li>
          </ul>

          <h2>Save Your Search</h2>
          <p>Click the "Save Search" button to store your filter combination. You'll receive alerts when new jobs match your criteria.</p>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Use Boolean operators (AND, OR, NOT) in your search for more precise results.
          </div>
        </>
      ),
    },
    "submit-applications": {
      title: "Submit Applications",
      content: (
        <>
          <p>Learn how to submit compelling job applications that get noticed.</p>

          <h2>One-Click Apply</h2>
          <p>For jobs with the "Quick Apply" badge, you can apply instantly using your Ogera profile. Just click the button and confirm your submission.</p>

          <h2>Custom Applications</h2>
          <p>Some employers require additional information:</p>
          <ol>
            <li>Click "Apply Now" on the job listing</li>
            <li>Review your profile information</li>
            <li>Upload any required documents</li>
            <li>Answer screening questions if any</li>
            <li>Write a personalized cover letter</li>
            <li>Click "Submit Application"</li>
          </ol>

          <h2>Application Tips</h2>
          <ul>
            <li>Customize your resume for each application</li>
            <li>Address specific requirements in the job posting</li>
            <li>Highlight relevant achievements with numbers</li>
            <li>Proofread everything before submitting</li>
          </ul>

          <div className="warning-box">
            <strong>Important:</strong> Once submitted, applications cannot be edited. Double-check all information before applying.
          </div>
        </>
      ),
    },
    "track-status": {
      title: "Track Status",
      content: (
        <>
          <p>Stay organized and informed about all your job applications in one place.</p>

          <h2>Application Dashboard</h2>
          <p>Access your applications dashboard from the main menu. Here you'll see all your applications organized by status:</p>
          <ul>
            <li><strong>Submitted:</strong> Application received by employer</li>
            <li><strong>Under Review:</strong> Employer is reviewing your application</li>
            <li><strong>Interview:</strong> You've been selected for an interview</li>
            <li><strong>Offer:</strong> You've received a job offer</li>
            <li><strong>Rejected:</strong> Application was not successful</li>
          </ul>

          <h2>Application Timeline</h2>
          <p>Click on any application to see its full timeline, including:</p>
          <ul>
            <li>Date and time of submission</li>
            <li>When your application was viewed</li>
            <li>Any status changes</li>
            <li>Messages from the employer</li>
          </ul>

          <h2>Email Notifications</h2>
          <p>Receive instant email updates whenever your application status changes. Manage these in your notification settings.</p>
        </>
      ),
    },
    "contact-employers": {
      title: "Contact Employers",
      content: (
        <>
          <p>Communicate effectively with potential employers through Ogera's messaging system.</p>

          <h2>When to Message Employers</h2>
          <ul>
            <li>After submitting an application (follow-up)</li>
            <li>To ask clarifying questions about a role</li>
            <li>To schedule or confirm interviews</li>
            <li>To respond to employer inquiries</li>
          </ul>

          <h2>How to Send a Message</h2>
          <ol>
            <li>Go to your application or the employer's profile</li>
            <li>Click the "Message" button</li>
            <li>Write your message</li>
            <li>Attach any relevant files if needed</li>
            <li>Click "Send"</li>
          </ol>

          <h2>Messaging Best Practices</h2>
          <ul>
            <li>Be professional and concise</li>
            <li>Use proper grammar and spelling</li>
            <li>Respond within 24 hours</li>
            <li>Keep conversations on the platform for security</li>
          </ul>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Employers can see your response time. Quick responses show professionalism and interest.
          </div>
        </>
      ),
    },
  },
  "profile-optimization": {
    "add-work-experience": {
      title: "Add Work Experience",
      content: (
        <>
          <p>Your work experience section is one of the most important parts of your profile. Here's how to make it shine.</p>

          <h2>Adding a New Position</h2>
          <ol>
            <li>Go to your profile and click "Add Experience"</li>
            <li>Enter the company name</li>
            <li>Add your job title</li>
            <li>Select start and end dates</li>
            <li>Write a description of your responsibilities</li>
            <li>Add key achievements and metrics</li>
          </ol>

          <h2>Writing Effective Descriptions</h2>
          <ul>
            <li>Start each bullet with an action verb</li>
            <li>Include quantifiable achievements when possible</li>
            <li>Focus on results, not just responsibilities</li>
            <li>Highlight remote work experience</li>
          </ul>

          <h2>Example</h2>
          <div className="example-box">
            <p><strong>Before:</strong> "Managed social media accounts"</p>
            <p><strong>After:</strong> "Grew social media following by 150% in 6 months, resulting in 40% increase in website traffic and $50K in additional revenue"</p>
          </div>
        </>
      ),
    },
    "upload-portfolio": {
      title: "Upload Portfolio",
      content: (
        <>
          <p>Showcase your best work with a compelling portfolio that demonstrates your skills.</p>

          <h2>Supported File Types</h2>
          <ul>
            <li>Images: JPG, PNG, GIF</li>
            <li>Documents: PDF</li>
            <li>External links: Behance, Dribbble, GitHub, etc.</li>
          </ul>

          <h2>How to Add Portfolio Items</h2>
          <ol>
            <li>Navigate to the Portfolio section of your profile</li>
            <li>Click "Add Project"</li>
            <li>Upload images or add external links</li>
            <li>Add a title and description</li>
            <li>Tag relevant skills</li>
            <li>Set visibility (public or select applications)</li>
          </ol>

          <h2>Portfolio Best Practices</h2>
          <ul>
            <li>Quality over quantity - show your 5-10 best pieces</li>
            <li>Include a variety of work types</li>
            <li>Explain your role and the project outcome</li>
            <li>Keep descriptions concise but informative</li>
            <li>Update regularly with new projects</li>
          </ul>
        </>
      ),
    },
    "showcase-skills": {
      title: "Showcase Skills",
      content: (
        <>
          <p>Highlight your skills effectively to match with the right opportunities.</p>

          <h2>Adding Skills</h2>
          <ol>
            <li>Go to the Skills section of your profile</li>
            <li>Click "Add Skill"</li>
            <li>Start typing to search from our skill database</li>
            <li>Select your proficiency level</li>
            <li>Add endorsements or certifications if available</li>
          </ol>

          <h2>Skill Categories</h2>
          <ul>
            <li><strong>Technical Skills:</strong> Programming languages, tools, frameworks</li>
            <li><strong>Soft Skills:</strong> Communication, leadership, problem-solving</li>
            <li><strong>Industry Skills:</strong> Domain-specific knowledge</li>
            <li><strong>Tools:</strong> Software and platforms you're proficient in</li>
          </ul>

          <h2>Skill Endorsements</h2>
          <p>Get endorsements from colleagues and past employers to validate your skills. The more endorsements, the higher your skills rank in search results.</p>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Review job postings in your target area and add any matching skills you have.
          </div>
        </>
      ),
    },
    "write-compelling-bio": {
      title: "Write Compelling Bio",
      content: (
        <>
          <p>Your bio is your chance to tell your story. Make it memorable and authentic.</p>

          <h2>Bio Structure</h2>
          <ol>
            <li><strong>Opening Hook:</strong> Start with something engaging</li>
            <li><strong>Your Expertise:</strong> What you're great at</li>
            <li><strong>Your Value:</strong> What you bring to teams</li>
            <li><strong>Your Goal:</strong> What you're looking for</li>
          </ol>

          <h2>What to Include</h2>
          <ul>
            <li>Years of experience in your field</li>
            <li>Key achievements and specializations</li>
            <li>Remote work experience and preferences</li>
            <li>What makes you unique</li>
            <li>A touch of personality</li>
          </ul>

          <h2>Example Bio</h2>
          <div className="example-box">
            <p>"As a product designer with 7 years of experience, I've helped startups and Fortune 500 companies create user experiences that drive results. I specialize in design systems and accessibility, having led projects that increased user engagement by 200%. Remote work enthusiast since 2018, I thrive in async environments and love collaborating across time zones. Currently seeking a senior role where I can mentor others while tackling complex design challenges."</p>
          </div>

          <h2>Tips for Success</h2>
          <ul>
            <li>Write in first person</li>
            <li>Keep it between 150-300 words</li>
            <li>Avoid jargon and buzzwords</li>
            <li>Proofread carefully</li>
          </ul>
        </>
      ),
    },
  },
  "payment-billing": {
    "payment-methods": {
      title: "Payment Methods",
      content: (
        <>
          <p>Manage your payment methods for premium subscriptions and services on Ogera.</p>

          <h2>Accepted Payment Methods</h2>
          <ul>
            <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
            <li>PayPal</li>
            <li>Bank Transfer (for annual plans)</li>
          </ul>

          <h2>Adding a Payment Method</h2>
          <ol>
            <li>Go to Account Settings</li>
            <li>Click "Payment & Billing"</li>
            <li>Select "Add Payment Method"</li>
            <li>Choose your payment type</li>
            <li>Enter your payment details</li>
            <li>Click "Save"</li>
          </ol>

          <h2>Managing Payment Methods</h2>
          <p>You can:</p>
          <ul>
            <li>Set a default payment method</li>
            <li>Update card information</li>
            <li>Remove saved payment methods</li>
            <li>View payment method details</li>
          </ul>

          <div className="warning-box">
            <strong>Security:</strong> All payment information is encrypted and stored securely. We never store your full card number.
          </div>
        </>
      ),
    },
    "billing-cycles": {
      title: "Billing Cycles",
      content: (
        <>
          <p>Understand how billing works for Ogera premium plans.</p>

          <h2>Available Plans</h2>
          <ul>
            <li><strong>Monthly:</strong> Billed every 30 days</li>
            <li><strong>Quarterly:</strong> Billed every 90 days (10% discount)</li>
            <li><strong>Annual:</strong> Billed yearly (20% discount)</li>
          </ul>

          <h2>Billing Date</h2>
          <p>Your billing date is set when you first subscribe. You'll be charged on the same date each billing cycle.</p>

          <h2>Changing Your Plan</h2>
          <p>You can upgrade, downgrade, or cancel your plan at any time:</p>
          <ul>
            <li><strong>Upgrades:</strong> Take effect immediately, prorated charges apply</li>
            <li><strong>Downgrades:</strong> Take effect at the end of your current billing cycle</li>
            <li><strong>Cancellations:</strong> Access continues until the end of your paid period</li>
          </ul>

          <h2>Auto-Renewal</h2>
          <p>Plans renew automatically unless cancelled. You'll receive a reminder email 7 days before each renewal.</p>
        </>
      ),
    },
    "transaction-history": {
      title: "Transaction History",
      content: (
        <>
          <p>View and manage all your payment transactions on Ogera.</p>

          <h2>Accessing Your History</h2>
          <ol>
            <li>Go to Account Settings</li>
            <li>Click "Payment & Billing"</li>
            <li>Select "Transaction History"</li>
          </ol>

          <h2>Transaction Details</h2>
          <p>For each transaction, you can view:</p>
          <ul>
            <li>Transaction date and time</li>
            <li>Description (what you paid for)</li>
            <li>Amount charged</li>
            <li>Payment method used</li>
            <li>Transaction status</li>
            <li>Invoice/receipt</li>
          </ul>

          <h2>Downloading Invoices</h2>
          <p>Click on any transaction to download a PDF invoice for your records or expense reporting.</p>

          <h2>Filtering Transactions</h2>
          <p>Use filters to find specific transactions:</p>
          <ul>
            <li>Date range</li>
            <li>Transaction type</li>
            <li>Payment method</li>
            <li>Amount</li>
          </ul>
        </>
      ),
    },
    "resolve-issues": {
      title: "Resolve Issues",
      content: (
        <>
          <p>Having payment problems? Here's how to resolve common billing issues.</p>

          <h2>Payment Declined</h2>
          <p>If your payment was declined:</p>
          <ol>
            <li>Check your card details are correct</li>
            <li>Ensure sufficient funds are available</li>
            <li>Contact your bank if needed</li>
            <li>Try a different payment method</li>
          </ol>

          <h2>Unexpected Charges</h2>
          <p>If you see a charge you don't recognize:</p>
          <ol>
            <li>Check your transaction history for details</li>
            <li>Review your active subscriptions</li>
            <li>Contact support with the transaction ID</li>
          </ol>

          <h2>Refund Requests</h2>
          <p>Request a refund within 14 days of purchase:</p>
          <ol>
            <li>Go to the transaction in your history</li>
            <li>Click "Request Refund"</li>
            <li>Provide a reason</li>
            <li>Submit your request</li>
          </ol>
          <p>Refunds are processed within 5-10 business days.</p>

          <h2>Contact Billing Support</h2>
          <p>For issues you can't resolve, contact our billing team at billing@ogera.com with:</p>
          <ul>
            <li>Your account email</li>
            <li>Transaction ID (if applicable)</li>
            <li>Description of the issue</li>
          </ul>
        </>
      ),
    },
  },
  "technical-support": {
    "login-problems": {
      title: "Login Problems",
      content: (
        <>
          <p>Having trouble logging in? Try these solutions to common login issues.</p>

          <h2>Forgot Password</h2>
          <ol>
            <li>Click "Forgot Password" on the login page</li>
            <li>Enter your registered email address</li>
            <li>Check your inbox for the reset link</li>
            <li>Create a new password</li>
          </ol>

          <h2>Account Locked</h2>
          <p>After 5 failed login attempts, your account is temporarily locked for security. Wait 30 minutes or click "Unlock Account" and verify your identity via email.</p>

          <h2>Email Not Recognized</h2>
          <p>Make sure you're using the email you registered with. Check for typos and try different email addresses you may have used.</p>

          <h2>Two-Factor Authentication Issues</h2>
          <p>If you've lost access to your 2FA device:</p>
          <ol>
            <li>Use a backup code (if saved)</li>
            <li>Contact support with identity verification</li>
          </ol>

          <h2>Still Can't Log In?</h2>
          <p>Contact our support team with your registered email address and a description of the issue.</p>
        </>
      ),
    },
    "browser-compatibility": {
      title: "Browser Compatibility",
      content: (
        <>
          <p>Ensure the best Ogera experience by using a supported browser.</p>

          <h2>Supported Browsers</h2>
          <ul>
            <li>Google Chrome (recommended) - version 90+</li>
            <li>Mozilla Firefox - version 88+</li>
            <li>Microsoft Edge - version 90+</li>
            <li>Safari - version 14+</li>
          </ul>

          <h2>Mobile Browsers</h2>
          <ul>
            <li>Chrome for Android</li>
            <li>Safari for iOS</li>
            <li>Samsung Internet</li>
          </ul>

          <h2>Known Issues</h2>
          <ul>
            <li><strong>Internet Explorer:</strong> Not supported. Please upgrade to Edge.</li>
            <li><strong>Older browser versions:</strong> May experience display or functionality issues.</li>
          </ul>

          <h2>Troubleshooting Browser Issues</h2>
          <ol>
            <li>Clear your browser cache and cookies</li>
            <li>Disable browser extensions temporarily</li>
            <li>Try incognito/private browsing mode</li>
            <li>Update your browser to the latest version</li>
          </ol>
        </>
      ),
    },
    "performance-issues": {
      title: "Performance Issues",
      content: (
        <>
          <p>Experiencing slow loading or other performance problems? Try these fixes.</p>

          <h2>Slow Page Loading</h2>
          <ol>
            <li>Check your internet connection speed</li>
            <li>Clear browser cache and cookies</li>
            <li>Disable unnecessary browser extensions</li>
            <li>Try a different browser</li>
          </ol>

          <h2>Images Not Loading</h2>
          <ul>
            <li>Check if images are blocked by your browser or extensions</li>
            <li>Disable ad blockers temporarily</li>
            <li>Clear image cache</li>
          </ul>

          <h2>Features Not Working</h2>
          <ol>
            <li>Ensure JavaScript is enabled</li>
            <li>Check if your browser is up to date</li>
            <li>Disable any script-blocking extensions</li>
            <li>Try refreshing the page (Ctrl/Cmd + F5)</li>
          </ol>

          <h2>Mobile Performance</h2>
          <ul>
            <li>Close unused apps running in the background</li>
            <li>Ensure you have a stable connection (WiFi recommended)</li>
            <li>Update the Ogera app if applicable</li>
          </ul>
        </>
      ),
    },
    "contact-tech-support": {
      title: "Contact Tech Support",
      content: (
        <>
          <p>Can't solve your technical issue? Our support team is here to help.</p>

          <h2>Before Contacting Support</h2>
          <p>Please have this information ready:</p>
          <ul>
            <li>Your account email</li>
            <li>Browser name and version</li>
            <li>Operating system</li>
            <li>Description of the issue</li>
            <li>Screenshots if applicable</li>
            <li>Steps to reproduce the problem</li>
          </ul>

          <h2>Contact Methods</h2>
          <ul>
            <li><strong>Live Chat:</strong> Available 24/7 via the chat icon</li>
            <li><strong>Email:</strong> support@ogera.com</li>
            <li><strong>Help Center:</strong> Search for solutions</li>
          </ul>

          <h2>Response Times</h2>
          <ul>
            <li><strong>Live Chat:</strong> Typically under 5 minutes</li>
            <li><strong>Email:</strong> Within 24 hours</li>
            <li><strong>Complex Issues:</strong> May require escalation (2-3 business days)</li>
          </ul>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Include as much detail as possible in your initial message to speed up resolution.
          </div>
        </>
      ),
    },
  },
  "platform-features": {
    "job-search-filters": {
      title: "Job Search Filters",
      content: (
        <>
          <p>Master Ogera's search filters to find your perfect remote job faster.</p>

          <h2>Available Filters</h2>

          <h3>Job Type</h3>
          <ul>
            <li>Full-time</li>
            <li>Part-time</li>
            <li>Contract</li>
            <li>Freelance</li>
            <li>Internship</li>
          </ul>

          <h3>Experience Level</h3>
          <ul>
            <li>Entry Level (0-2 years)</li>
            <li>Mid Level (3-5 years)</li>
            <li>Senior (6-10 years)</li>
            <li>Executive (10+ years)</li>
          </ul>

          <h3>Salary Range</h3>
          <p>Set minimum and maximum salary expectations. Toggle between annual and hourly rates.</p>

          <h3>Time Zone</h3>
          <ul>
            <li>Americas (UTC-10 to UTC-3)</li>
            <li>Europe (UTC-1 to UTC+3)</li>
            <li>Asia-Pacific (UTC+5 to UTC+12)</li>
            <li>Flexible/Async</li>
          </ul>

          <h2>Combining Filters</h2>
          <p>Use multiple filters together to narrow your search. The more specific, the more relevant your results.</p>
        </>
      ),
    },
    "saved-searches": {
      title: "Saved Searches",
      content: (
        <>
          <p>Save your search criteria and never miss a matching opportunity.</p>

          <h2>Creating a Saved Search</h2>
          <ol>
            <li>Perform a search with your desired filters</li>
            <li>Click "Save This Search"</li>
            <li>Give your search a name</li>
            <li>Choose notification preferences</li>
            <li>Click "Save"</li>
          </ol>

          <h2>Managing Saved Searches</h2>
          <p>Access your saved searches from the dashboard:</p>
          <ul>
            <li><strong>Edit:</strong> Update filters or name</li>
            <li><strong>Run:</strong> Execute the search instantly</li>
            <li><strong>Delete:</strong> Remove searches you no longer need</li>
            <li><strong>Pause/Resume:</strong> Temporarily stop notifications</li>
          </ul>

          <h2>Alert Frequency</h2>
          <p>Choose how often you want to be notified:</p>
          <ul>
            <li>Instant (as soon as jobs are posted)</li>
            <li>Daily digest</li>
            <li>Weekly summary</li>
          </ul>

          <div className="tip-box">
            <strong>Pro Tip:</strong> Create multiple saved searches with different criteria to cover all your interests.
          </div>
        </>
      ),
    },
    "messaging-system": {
      title: "Messaging System",
      content: (
        <>
          <p>Communicate securely with employers through Ogera's built-in messaging system.</p>

          <h2>Features</h2>
          <ul>
            <li>Real-time messaging</li>
            <li>Read receipts</li>
            <li>File attachments</li>
            <li>Message search</li>
            <li>Conversation archiving</li>
          </ul>

          <h2>Sending Messages</h2>
          <ol>
            <li>Go to an employer's profile or your application</li>
            <li>Click "Send Message"</li>
            <li>Type your message</li>
            <li>Attach files if needed (max 10MB)</li>
            <li>Click "Send"</li>
          </ol>

          <h2>Message Inbox</h2>
          <p>Access your inbox from the navigation menu. Messages are organized by:</p>
          <ul>
            <li>All Messages</li>
            <li>Unread</li>
            <li>Archived</li>
            <li>By Application</li>
          </ul>

          <h2>Notifications</h2>
          <p>Get notified of new messages via:</p>
          <ul>
            <li>In-app notifications</li>
            <li>Email (customizable)</li>
            <li>Push notifications (if enabled)</li>
          </ul>
        </>
      ),
    },
    "tips-and-tricks": {
      title: "Tips and Tricks",
      content: (
        <>
          <p>Get the most out of Ogera with these insider tips.</p>

          <h2>Profile Tips</h2>
          <ul>
            <li>Update your profile at least once a month</li>
            <li>Add a video introduction for 2x more views</li>
            <li>Request endorsements from past colleagues</li>
            <li>Use industry keywords in your headline</li>
          </ul>

          <h2>Job Search Tips</h2>
          <ul>
            <li>Apply within the first 24 hours of a posting</li>
            <li>Set up multiple saved searches</li>
            <li>Check the "Featured Jobs" section daily</li>
            <li>Follow companies you're interested in</li>
          </ul>

          <h2>Application Tips</h2>
          <ul>
            <li>Customize each application</li>
            <li>Highlight remote work experience</li>
            <li>Include your timezone availability</li>
            <li>Follow up after one week if no response</li>
          </ul>

          <h2>Hidden Features</h2>
          <ul>
            <li><strong>Keyboard shortcuts:</strong> Press "?" to see all shortcuts</li>
            <li><strong>Quick apply:</strong> Press "A" on any job listing</li>
            <li><strong>Save job:</strong> Press "S" to bookmark</li>
            <li><strong>Advanced search:</strong> Use quotes for exact phrases</li>
          </ul>
        </>
      ),
    },
  },
  "contact-support": {
    "email-support": {
      title: "Email Support",
      content: (
        <>
          <p>Reach our support team via email for detailed assistance.</p>

          <h2>Email Addresses</h2>
          <ul>
            <li><strong>General Support:</strong> support@ogera.com</li>
            <li><strong>Billing Questions:</strong> billing@ogera.com</li>
            <li><strong>Technical Issues:</strong> tech@ogera.com</li>
            <li><strong>Partnerships:</strong> partners@ogera.com</li>
          </ul>

          <h2>What to Include</h2>
          <p>To help us assist you faster, please include:</p>
          <ul>
            <li>Your registered email address</li>
            <li>A clear description of your issue</li>
            <li>Any relevant screenshots</li>
            <li>Steps you've already tried</li>
            <li>Your browser/device information</li>
          </ul>

          <h2>Response Time</h2>
          <p>We aim to respond to all emails within 24 hours during business days.</p>

          <h2>Follow-up</h2>
          <p>If you haven't received a response within 48 hours, please check your spam folder and reply to your original email.</p>
        </>
      ),
    },
    "live-chat": {
      title: "Live Chat",
      content: (
        <>
          <p>Get instant help through our live chat support.</p>

          <h2>Accessing Live Chat</h2>
          <p>Click the chat icon in the bottom right corner of any page to start a conversation.</p>

          <h2>Availability</h2>
          <ul>
            <li><strong>Live Agents:</strong> Monday-Friday, 9 AM - 6 PM EST</li>
            <li><strong>AI Assistant:</strong> Available 24/7 for common questions</li>
          </ul>

          <h2>What We Can Help With</h2>
          <ul>
            <li>Account issues</li>
            <li>Navigation questions</li>
            <li>Feature explanations</li>
            <li>Quick troubleshooting</li>
            <li>Billing inquiries</li>
          </ul>

          <h2>Tips for Faster Help</h2>
          <ul>
            <li>Be specific about your issue</li>
            <li>Have your account information ready</li>
            <li>Share screenshots when relevant</li>
            <li>Check our help articles first for common issues</li>
          </ul>
        </>
      ),
    },
    "response-times": {
      title: "Response Times",
      content: (
        <>
          <p>Know what to expect when you contact Ogera support.</p>

          <h2>By Channel</h2>
          <table className="info-table">
            <thead>
              <tr>
                <th>Channel</th>
                <th>Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Live Chat</td>
                <td>Under 5 minutes</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Within 24 hours</td>
              </tr>
              <tr>
                <td>Social Media</td>
                <td>Within 4 hours</td>
              </tr>
            </tbody>
          </table>

          <h2>By Issue Type</h2>
          <table className="info-table">
            <thead>
              <tr>
                <th>Issue Type</th>
                <th>Resolution Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simple questions</td>
                <td>Same session</td>
              </tr>
              <tr>
                <td>Account issues</td>
                <td>1-2 business days</td>
              </tr>
              <tr>
                <td>Technical issues</td>
                <td>2-3 business days</td>
              </tr>
              <tr>
                <td>Billing disputes</td>
                <td>3-5 business days</td>
              </tr>
            </tbody>
          </table>

          <h2>Priority Support</h2>
          <p>Premium members receive priority support with faster response times.</p>
        </>
      ),
    },
    "business-hours": {
      title: "Business Hours",
      content: (
        <>
          <p>Know when our support team is available to help.</p>

          <h2>Support Hours</h2>
          <ul>
            <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</li>
            <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>

          <h2>Holiday Schedule</h2>
          <p>We observe major US holidays. Limited support is available on:</p>
          <ul>
            <li>New Year's Day</li>
            <li>Memorial Day</li>
            <li>Independence Day</li>
            <li>Labor Day</li>
            <li>Thanksgiving</li>
            <li>Christmas Day</li>
          </ul>

          <h2>After Hours</h2>
          <p>Outside business hours, you can:</p>
          <ul>
            <li>Use our AI chat assistant for common questions</li>
            <li>Send an email (response next business day)</li>
            <li>Browse our help articles</li>
          </ul>

          <h2>Time Zone Converter</h2>
          <p>EST (Eastern Standard Time) is:</p>
          <ul>
            <li>PST: -3 hours</li>
            <li>GMT/UTC: +5 hours</li>
            <li>CET: +6 hours</li>
            <li>IST: +10.5 hours</li>
          </ul>
        </>
      ),
    },
  },
};

// Icons for article pages
const categoryIcons: Record<string, React.ReactNode> = {
  "getting-started": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  "account-management": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  "job-applications": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  "profile-optimization": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  "payment-billing": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  "technical-support": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  "platform-features": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  ),
  "contact-support": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
};

const categoryNames: Record<string, string> = {
  "getting-started": "Getting Started",
  "account-management": "Account Management",
  "job-applications": "Job Applications",
  "profile-optimization": "Profile Optimization",
  "payment-billing": "Payment & Billing",
  "technical-support": "Technical Support",
  "platform-features": "Platform Features",
  "contact-support": "Contact Support",
};

export default function HelpArticlePage() {
  const params = useParams();
  const category = params.category as string;
  const article = params.article as string;
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  const categoryArticles = articleContent[category];
  const articleData = categoryArticles?.[article];

  if (!articleData) {
    return (
      <>
        <Navbar />
        <div className="article-page">
          <div className="article-container">
            <div className="article-not-found">
              <h1>Article Not Found</h1>
              <p>Sorry, we couldn't find the article you're looking for.</p>
              <Link href="/help-center" className="back-link">
                ← Back to Help Center
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get related articles (other articles in the same category)
  const relatedArticles = Object.entries(categoryArticles)
    .filter(([key]) => key !== article)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="article-page">
        {/* Breadcrumb */}
        <div className="article-breadcrumb">
          <div className="breadcrumb-container">
            <Link href="/help-center">Help Center</Link>
            <span className="breadcrumb-separator">›</span>
            <Link href={`/help-center#${category}`}>{categoryNames[category]}</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{articleData.title}</span>
          </div>
        </div>

        <div className="article-container">
          {/* Main Article Content */}
          <article className="article-main">
            <div className="article-header">
              <div className="article-category-icon">
                {categoryIcons[category]}
              </div>
              <div className="article-meta">
                <span className="article-category-name">{categoryNames[category]}</span>
                <h1>{articleData.title}</h1>
              </div>
            </div>

            <div className="article-content">
              {articleData.content}
            </div>

            {/* Article Footer */}
            <div className="article-footer">
              <div className="article-helpful">
                {feedback === null ? (
                  <>
                    <span>Was this article helpful?</span>
                    <div className="helpful-buttons">
                      <button
                        className="helpful-btn yes"
                        onClick={() => setFeedback("yes")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                        </svg>
                        Yes
                      </button>
                      <button
                        className="helpful-btn no"
                        onClick={() => setFeedback("no")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
                        </svg>
                        No
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={`feedback-response ${feedback}`}>
                    <div className="feedback-icon">
                      {feedback === "yes" ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 16v-4"/>
                          <path d="M12 8h.01"/>
                        </svg>
                      )}
                    </div>
                    <div className="feedback-text">
                      {feedback === "yes" ? (
                        <>
                          <strong>Thank you for your feedback!</strong>
                          <p>We&apos;re glad this article was helpful.</p>
                        </>
                      ) : (
                        <>
                          <strong>Thank you for letting us know!</strong>
                          <p>We&apos;ll work on improving this article.</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-section">
              <h3>Related Articles</h3>
              <ul className="related-articles-list">
                {relatedArticles.map(([key, data]) => (
                  <li key={key}>
                    <Link href={`/help-center/${category}/${key}`}>
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Need More Help?</h3>
              <p>Can't find what you're looking for?</p>
              <Link href="/contact" className="contact-support-btn">
                Contact Support
              </Link>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
