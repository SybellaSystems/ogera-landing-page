"use client";

import './JobTypes.css';

function JobTypes() {
  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jobTypes = [
    {
      title: "Freelance",
      description: "Work on flexible projects from anywhere. Perfect for students who want to earn while sharpening real-world skills."
    },
    {
      title: "Part-time",
      description: "Short-hour jobs that fit into your schedule. No need to sacrifice your studies—balance school and income with ease."
    },
    {
      title: "Internship",
      description: "Kickstart your career with internships from trusted companies. Gain hands-on experience and build a professional network while you study."
    },
    {
      title: "OgeraWin",
      description: "Exclusive Ogera-only tasks and challenges. Compete, showcase your skills, and earn extra rewards for being among the best."
    }
  ];

  return (
    <section id="job-types" className="job-types-section">
      <div className="job-types-container">
        {/* Left Content */}
        <div className="job-types-content">
          <h2 className="section-title">
            What Kind of Jobs Can You Find on Ogera?
          </h2>

          <div className="job-types-list">
            {jobTypes.map((job, index) => (
              <div key={index} className="job-type-item">
                <div className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#7F56D9"/>
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="job-type-text">
                  <h3 className="job-type-title">{job.title}</h3>
                  <p className="job-type-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="get-started-btn" onClick={scrollToSearch}>Get Started</button>
        </div>

        {/* Right Visual */}
        <div className="job-types-visual">
          <div style={{
            position: 'relative',
            width: '420px',
            height: '180px'
          }}>
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #A78BDB 0%, #9478C8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}>
              <span style={{ fontSize: '4.5rem', fontWeight: 700, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>J</span>
            </div>
            <div style={{
              position: 'absolute',
              left: '120px',
              top: '0',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d0d5dd 0%, #b8bfc9 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              <span style={{ fontSize: '4.5rem', fontWeight: 700, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>O</span>
            </div>
            <div style={{
              position: 'absolute',
              left: '240px',
              top: '0',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7F56D9 0%, #6941B0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3
            }}>
              <span style={{ fontSize: '4.5rem', fontWeight: 700, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobTypes;