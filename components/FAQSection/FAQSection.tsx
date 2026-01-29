"use client";

import { useState } from "react";
import "./FAQSection.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Ogera?",
    answer: "Ogera is a global remote job marketplace that connects talented professionals with companies offering remote work opportunities. We streamline the job search and hiring process, making it easier for candidates to find their ideal remote positions."
  },
  {
    question: "Is Ogera free to use?",
    answer: "Creating an account and browsing job listings on Ogera is completely free for job seekers. We offer premium features for enhanced visibility and advanced tools. For employers, we have various subscription plans based on hiring needs."
  },
  {
    question: "How do I apply for jobs?",
    answer: "Browse available positions using our search filters, click on jobs that interest you, and review the job description carefully. When ready, click the \"Apply\" button, attach your resume if required, and submit a personalized cover letter."
  },
  {
    question: "Can I work from anywhere?",
    answer: "Most positions on Ogera are fully remote, allowing you to work from anywhere with a reliable internet connection. However, some roles may have timezone requirements or geographic restrictions due to legal or business reasons."
  },
  {
    question: "How do I get paid for completed work?",
    answer: "Ogera supports multiple payment methods including bank transfers, mobile money, and digital wallets. Once your work is approved by the employer, payments are processed securely within 3-5 business days directly to your preferred account."
  },
  {
    question: "What types of jobs are available on Ogera?",
    answer: "Ogera offers a wide range of remote opportunities including software development, graphic design, virtual assistance, customer support, content writing, data entry, marketing, bookkeeping, and many more across various industries."
  },
  {
    question: "How does Ogera verify employers?",
    answer: "We have a thorough verification process for all employers. We verify business registrations, review company history, and monitor feedback from workers to ensure you only work with legitimate and trustworthy companies."
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use industry-standard encryption and security protocols to protect your data. Your information is never shared with third parties without your consent."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Find answers to common questions about Ogera</p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                className="faq-chevron"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
