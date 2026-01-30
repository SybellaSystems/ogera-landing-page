"use client";

import { useState } from "react";
import "./Features.css";

function Features() {
  const [activeTab, setActiveTab] = useState<"hiring" | "finding">("finding");

  const hiringSteps = [
    {
      image: "",
      title: "Post a job for free",
      gradient: true
    },
    {
      image: "",
      title: "Get proposals and hire"
    },
    {
      image: "",
      title: "Pay when work is done"
    }
  ];

  const findingSteps = [
    {
      image: "",
      title: "Create your free profile",
      gradient: true
    },
    {
      image: "",
      title: "Browse and apply to jobs"
    },
    {
      image: "",
      title: "Get hired and get paid"
    }
  ];

  const currentSteps = activeTab === "hiring" ? hiringSteps : findingSteps;

  return (
    <section className="how-it-works">
      <div className="how-it-works-header">
        <h2>How it works</h2>
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "hiring" ? "active" : ""}`}
            onClick={() => setActiveTab("hiring")}
          >
            For hiring
          </button>
          <button
            className={`tab-btn ${activeTab === "finding" ? "active" : ""}`}
            onClick={() => setActiveTab("finding")}
          >
            For finding work
          </button>
        </div>
      </div>

      <div className="steps-container">
        {currentSteps.map((step, index) => (
          <div key={index} className="step-card">
            <div className={`step-image ${step.gradient ? "with-gradient" : ""}`}>
              {step.image && <img src={step.image} alt={step.title} />}
            </div>
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
