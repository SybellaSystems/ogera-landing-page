"use client";


import { useState } from 'react';

function Testimonials() {
  const testimonials = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
          <path d="M32 8C18.7 8 8 18.7 8 32C8 45.3 18.7 56 32 56C45.3 56 56 45.3 56 32C56 18.7 45.3 8 32 8Z" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M28 25C28 22.8 29.8 21 32 21C34.2 21 36 22.8 36 25" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 38L24 36L28 38V30H20V38Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="32" cy="30" r="3" fill="#1a1a1a"/>
        </svg>
      ),
      title: "Privacy and policy",
      description: "Ogera values your privacy. We only use your data to keep your account secure and connect you with the right opportunities. By continuing, you agree to our Privacy Policy& Terms.",
      quote: "Ogera makes it easy to trust the platform.",
      quoteHighlight: "The way they protect both employer and student data gives me peace of mind .\"",
      author: "Martin Nziza",
      company: "Hired by teva",
      avatar: "https://via.placeholder.com/60/E8D5C4/000000?text=MN"
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="14" width="44" height="36" rx="3" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M18 26L28 34L46 22" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="10" width="36" height="28" rx="2" stroke="#1a1a1a" strokeWidth="2.5"/>
        </svg>
      ),
      title: "Gain Advantage",
      description: "Gain the advantage with Ogera: earn, grow your skills, and build your reputation—all while keeping your studies first.",
      quote: "The Ogera platform",
      quoteHighlight: " gave me the freedom to grow my skills and build a solid reputation.\"",
      author: "Kamanzi Darline",
      company: "Hired by Dynamos",
      avatar: "https://via.placeholder.com/60/8B7355/FFFFFF?text=KD"
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
          <circle cx="28" cy="28" r="16" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M28 20V28L34 31" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="38" y="38" width="18" height="18" rx="2" stroke="#1a1a1a" strokeWidth="2.5"/>
          <line x1="42" y1="44" x2="52" y2="44" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="42" y1="48" x2="52" y2="48" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="42" y1="52" x2="52" y2="52" stroke="#1a1a1a" strokeWidth="2"/>
        </svg>
      ),
      title: "Save Time",
      description: "Find flexible jobs, track your tasks, and get paid—all in one platform. Ogera helps you focus on what matters most: your studies and your hustle.",
      quote: "With Ogera I get tasks,",
      quoteHighlight: " track progress, and get paid quickly. It really helps me stay on top of my schedule.\"",
      author: "Kagabo Jean",
      company: "Hired by teva",
      avatar: "https://via.placeholder.com/60/4A4A4A/FFFFFF?text=KJ"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-icon">
              {testimonial.icon}
            </div>
            
            <h3 className="card-title">{testimonial.title}</h3>
            
            <p className="card-description">{testimonial.description}</p>
            
            <div className="divider"></div>
            
            <blockquote className="testimonial-quote">
              "<span className="quote-blue">{testimonial.quote}</span>
              {testimonial.quoteHighlight}
            </blockquote>
            
            <div className="author-info">
              <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
              <div className="author-details">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonials-section {
          padding: 80px 20px;
          background: #0066CC;
          overflow: hidden;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: white;
          border-radius: 24px;
          padding: 40px 35px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 24px;
        }

        .card-title {
          font-size: 1.75rem;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        .card-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.7;
          margin: 0 0 30px 0;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, #0066CC 0%, #E5E7EB 100%);
          margin-bottom: 30px;
        }

        .testimonial-quote {
          font-size: 1rem;
          color: #1a1a1a;
          line-height: 1.6;
          margin: 0 0 30px 0;
          font-style: normal;
        }

        .quote-blue {
          color: #0066CC;
          font-weight: 500;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-size: 1.1rem;
          color: #1a1a1a;
          font-weight: 600;
          margin: 0;
        }

        .author-company {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .testimonials-container {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
        }

        @media (max-width: 968px) {
          .testimonials-section {
            padding: 60px 20px;
          }

          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .testimonial-card {
            padding: 35px 30px;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .testimonials-section {
            padding: 50px 20px;
          }

          .testimonial-card {
            padding: 30px 25px;
          }

          .card-icon {
            width: 50px;
            height: 50px;
          }

          .card-title {
            font-size: 1.35rem;
          }

          .card-description {
            font-size: 0.95rem;
          }

          .testimonial-quote {
            font-size: 0.95rem;
          }

          .author-avatar {
            width: 50px;
            height: 50px;
          }

          .author-name {
            font-size: 1rem;
          }

          .author-company {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;