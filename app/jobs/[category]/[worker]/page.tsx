"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById, workersByCategory, getWorkerBySlug, profileImage } from '@/data/workers';
import './worker-profile.css';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
const MINUTES = ['00','15','30','45'];

const MONTH_OPTIONS = MONTHS.map((m, i) => ({ label: m, value: String(i + 1) }));
const DAY_OPTIONS = DAYS.map(d => ({ label: String(d), value: String(d) }));
const HOUR_OPTIONS = HOURS.map(h => ({ label: String(h), value: String(h) }));
const MINUTE_OPTIONS = MINUTES.map(m => ({ label: m, value: m }));
const PERIOD_OPTIONS = [{ label: 'AM', value: 'AM' }, { label: 'PM', value: 'PM' }];

function ModalDropdown({ value, onChange, placeholder, options, small }: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: { label: string; value: string }[];
  small?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div className={`dropdown-wrap${small ? ' dropdown-sm' : ''}`} ref={ref}>
      <button type="button" className={`dropdown-trigger${value ? ' has-value' : ''}`} onClick={() => setOpen(!open)}>
        <span>{selected ? selected.label : placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              className={`dropdown-item${opt.value === value ? ' active' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorkerProfilePage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  const worker = params.worker as string;

  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [interviewDay, setInterviewDay] = useState('');
  const [interviewMonth, setInterviewMonth] = useState('');
  const [interviewYear, setInterviewYear] = useState('');
  const [interviewHour, setInterviewHour] = useState('');
  const [interviewMinute, setInterviewMinute] = useState('');
  const [interviewPeriod, setInterviewPeriod] = useState('AM');
  const [interviewMessage, setInterviewMessage] = useState('');
  const [interviewSent, setInterviewSent] = useState(false);
  const [yearOptions, setYearOptions] = useState<{ label: string; value: string }[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set year options on client only to avoid hydration mismatch
  useEffect(() => {
    const y = new Date().getFullYear();
    setYearOptions([
      { label: String(y), value: String(y) },
      { label: String(y + 1), value: String(y + 1) },
    ]);
  }, []);

  const categoryData = getCategoryById(category);
  const workerData = getWorkerBySlug(category, worker);
  const allWorkers = workersByCategory[category] || [];
  const otherWorkers = allWorkers.filter((w) => w.slug !== worker).slice(0, 3);

  const isDateComplete = interviewDay && interviewMonth && interviewYear;
  const isTimeComplete = interviewHour && interviewMinute;

  const resetForm = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setInterviewDay('');
    setInterviewMonth('');
    setInterviewYear('');
    setInterviewHour('');
    setInterviewMinute('');
    setInterviewPeriod('AM');
    setInterviewMessage('');
    setInterviewSent(false);
  }, []);

  const handleSendInvitation = useCallback(() => {
    setInterviewSent(true);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setInterviewDay('');
      setInterviewMonth('');
      setInterviewYear('');
      setInterviewHour('');
      setInterviewMinute('');
      setInterviewPeriod('AM');
      setInterviewMessage('');
      setInterviewSent(false);
      setIsInterviewModalOpen(false);
    }, 2000);
  }, []);

  const handleCloseModal = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setInterviewDay('');
    setInterviewMonth('');
    setInterviewYear('');
    setInterviewHour('');
    setInterviewMinute('');
    setInterviewPeriod('AM');
    setInterviewMessage('');
    setInterviewSent(false);
    setIsInterviewModalOpen(false);
  }, []);

  // Clean up on unmount or worker change
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = '';
    };
  }, [worker]);

  useEffect(() => {
    if (isInterviewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isInterviewModalOpen]);

  if (!categoryData || !workerData) {
    return (
      <div className="worker-profile-page">
        <div className="profile-top-bar">
          <button className="profile-back-btn" onClick={() => router.back()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </button>
        </div>
        <div className="profile-not-found">
          <h1>Worker not found</h1>
          <p>The professional you are looking for does not exist.</p>
          <Link href="/" className="back-to-home-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="worker-profile-page">
        <div className="profile-top-bar">
          <button className="profile-back-btn" onClick={() => router.back()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </button>
        </div>

        <div className="profile-container">
          {/* Main Profile Layout */}
          <div className="profile-main">
            {/* Sidebar */}
            <aside className="profile-sidebar">
              <div className="profile-image-wrapper">
                <img src={profileImage} alt={workerData.name} width={200} height={200} />
              </div>
              <div className="profile-actions">
                <button className="action-btn-interview" onClick={() => setIsInterviewModalOpen(true)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Invite to Interview
                </button>
              </div>
            </aside>

            {/* Details */}
            <div className="profile-details">
              <h1 className="profile-worker-name">{workerData.name}</h1>
              <p className="profile-worker-title">{workerData.title}</p>
              <div className="profile-worker-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{workerData.location}</span>
              </div>

              {/* Stats Row */}
              <div className="profile-stats-row">
                <div className="profile-stat">
                  <span className="stat-value">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {workerData.rating}
                  </span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">${workerData.rate}/hr</span>
                  <span className="stat-label">Hourly Rate</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">{workerData.jobs}</span>
                  <span className="stat-label">Jobs Done</span>
                </div>
              </div>

              {/* About */}
              <div className="profile-about">
                <h2>About</h2>
                <p>{workerData.description}</p>
              </div>

              {/* Skills */}
              <div className="profile-skills">
                <h2>Skills</h2>
                <div className="skills-list">
                  {workerData.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Professionals */}
          {otherWorkers.length > 0 && (
            <section className="related-workers-section">
              <h2>Other professionals in {categoryData.name}</h2>
              <div className="related-workers-grid">
                {otherWorkers.map((w) => (
                  <Link key={w.slug} href={`/jobs/${category}/${w.slug}`} className="related-worker-card">
                    <div className="related-worker-image">
                      <img src={profileImage} alt={w.name} width={48} height={48} />
                    </div>
                    <div className="related-worker-info">
                      <h3>{w.name}</h3>
                      <p className="related-worker-title">{w.title}</p>
                      <div className="related-worker-meta">
                        <span className="related-worker-rating">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          {w.rating}
                        </span>
                        <span className="related-worker-rate">${w.rate}/hr</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Interview Modal */}
      {isInterviewModalOpen && (
        <div className="interview-overlay">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {!interviewSent && (
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            {interviewSent ? (
              <div className="modal-success">
                <div className="modal-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="modal-title">Invitation Sent!</h2>
                <p className="modal-subtitle">Your interview invitation has been sent to {workerData.name}. You will be notified when they respond.</p>
              </div>
            ) : (
              <>
                <div className="modal-icon interview-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h2 className="modal-title">Invite to Interview</h2>
                <p className="modal-subtitle">Schedule an interview with {workerData.name}</p>

                <div className="modal-form">
                  <div className="modal-field">
                    <label>Date</label>
                    <div className="select-row">
                      <ModalDropdown value={interviewMonth} onChange={setInterviewMonth} placeholder="Month" options={MONTH_OPTIONS} />
                      <ModalDropdown value={interviewDay} onChange={setInterviewDay} placeholder="Day" options={DAY_OPTIONS} small />
                      <ModalDropdown value={interviewYear} onChange={setInterviewYear} placeholder="Year" options={yearOptions} small />
                    </div>
                  </div>
                  <div className="modal-field">
                    <label>Time</label>
                    <div className="select-row">
                      <ModalDropdown value={interviewHour} onChange={setInterviewHour} placeholder="Hr" options={HOUR_OPTIONS} small />
                      <ModalDropdown value={interviewMinute} onChange={setInterviewMinute} placeholder="Min" options={MINUTE_OPTIONS} small />
                      <ModalDropdown value={interviewPeriod} onChange={setInterviewPeriod} placeholder="AM" options={PERIOD_OPTIONS} small />
                    </div>
                  </div>
                  <div className="modal-field">
                    <label htmlFor="interview-message">Message (optional)</label>
                    <textarea id="interview-message" rows={3} placeholder="Add a note for the professional..." value={interviewMessage} onChange={(e) => setInterviewMessage(e.target.value)} />
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="modal-btn-cancel" onClick={handleCloseModal}>Cancel</button>
                  <button className="modal-btn-confirm" disabled={!isDateComplete || !isTimeComplete} onClick={handleSendInvitation}>Send Invitation</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
