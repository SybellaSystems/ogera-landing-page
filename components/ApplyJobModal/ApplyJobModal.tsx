"use client";

import { useState } from "react";
import { applyForJobFromLanding, type ApiJob } from "@/lib/api";
import "./apply-modal.css";

interface Props {
  job: ApiJob;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function ApplyJobModal({ job, isOpen, onClose, onSuccess }: Props) {
  const [coverLetter, setCoverLetter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const result = await applyForJobFromLanding(job.job_id, {
      cover_letter: coverLetter.trim() || undefined,
    });

    setSubmitting(false);

    if (result.ok) {
      setSuccess(true);
      setCoverLetter("");
      onSuccess?.();
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2200);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="ajm-overlay" onClick={onClose}>
      <div className="ajm-card" onClick={(e) => e.stopPropagation()}>
        <div className="ajm-header">
          <div>
            <h2 className="ajm-title">Apply for Job</h2>
            <p className="ajm-subtitle">{job.job_title}</p>
          </div>
          <button className="ajm-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {success ? (
          <div className="ajm-success">
            <div className="ajm-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Application sent!</h3>
            <p>The employer will review your application and get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="ajm-body">
            <div className="ajm-info">
              <div className="ajm-info-row">
                <span className="ajm-info-label">Location</span>
                <span className="ajm-info-value">{job.location}</span>
              </div>
              <div className="ajm-info-row">
                <span className="ajm-info-label">Budget</span>
                <span className="ajm-info-value">${job.budget?.toLocaleString?.() || job.budget}</span>
              </div>
              <div className="ajm-info-row">
                <span className="ajm-info-label">Category</span>
                <span className="ajm-info-value">{job.category}</span>
              </div>
            </div>

            <label className="ajm-label">
              Cover Letter <span className="ajm-optional">(optional)</span>
            </label>
            <textarea
              className="ajm-textarea"
              rows={6}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Tell the employer why you're a great fit..."
            />

            {error && <div className="ajm-error">{error}</div>}

            <div className="ajm-actions">
              <button type="button" className="ajm-cancel" onClick={onClose} disabled={submitting}>
                Cancel
              </button>
              <button type="submit" className="ajm-submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
