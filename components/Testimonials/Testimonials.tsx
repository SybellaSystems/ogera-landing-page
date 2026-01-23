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
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face"
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
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
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
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
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
          padding: 60px 20px;
          background: #7F56D9;
          overflow: hidden;
        }

        .testimonials-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          width: 45px;
          height: 45px;
          margin-bottom: 16px;
        }

        .card-icon svg {
          width: 45px;
          height: 45px;
        }

        .card-title {
          font-size: 1.35rem;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          font-weight: 600;
        }

        .card-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, #7F56D9 0%, #E5E7EB 100%);
          margin-bottom: 20px;
        }

        .testimonial-quote {
          font-size: 0.9rem;
          color: #1a1a1a;
          line-height: 1.5;
          margin: 0 0 20px 0;
          font-style: normal;
        }

        .quote-blue {
          color: #7F56D9;
          font-weight: 500;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }

        .author-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .author-name {
          font-size: 0.95rem;
          color: #1a1a1a;
          font-weight: 600;
          margin: 0;
        }

        .author-company {
          font-size: 0.8rem;
          color: #666;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .testimonials-section {
            padding: 50px 20px;
          }

          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 400px;
          }

          .testimonial-card {
            padding: 22px 18px;
            border-radius: 14px;
          }

          .card-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 14px;
          }

          .card-icon svg {
            width: 40px;
            height: 40px;
          }

          .card-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .card-description {
            font-size: 0.85rem;
            margin-bottom: 16px;
          }

          .divider {
            margin-bottom: 16px;
          }

          .testimonial-quote {
            font-size: 0.85rem;
            margin-bottom: 16px;
          }

          .author-avatar {
            width: 38px;
            height: 38px;
          }

          .author-name {
            font-size: 0.9rem;
          }

          .author-company {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 640px) {
          .testimonials-section {
            padding: 40px 16px;
          }

          .testimonials-container {
            gap: 14px;
            max-width: 340px;
          }

          .testimonial-card {
            padding: 18px 16px;
            border-radius: 12px;
          }

          .card-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 12px;
          }

          .card-icon svg {
            width: 36px;
            height: 36px;
          }

          .card-title {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }

          .card-description {
            font-size: 0.8rem;
            line-height: 1.5;
            margin-bottom: 14px;
          }

          .divider {
            margin-bottom: 14px;
          }

          .testimonial-quote {
            font-size: 0.8rem;
            margin-bottom: 14px;
          }

          .author-info {
            gap: 8px;
          }

          .author-avatar {
            width: 34px;
            height: 34px;
          }

          .author-name {
            font-size: 0.85rem;
          }

          .author-company {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 35px 14px;
          }

          .testimonials-container {
            gap: 12px;
            max-width: 300px;
          }

          .testimonial-card {
            padding: 16px 14px;
            border-radius: 10px;
          }

          .card-icon {
            width: 32px;
            height: 32px;
            margin-bottom: 10px;
          }

          .card-icon svg {
            width: 32px;
            height: 32px;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 6px;
          }

          .card-description {
            font-size: 0.75rem;
            margin-bottom: 12px;
          }

          .divider {
            margin-bottom: 12px;
          }

          .testimonial-quote {
            font-size: 0.75rem;
            margin-bottom: 12px;
          }

          .author-avatar {
            width: 30px;
            height: 30px;
          }

          .author-name {
            font-size: 0.8rem;
          }

          .author-company {
            font-size: 0.65rem;
          }
        }

        /* Extra small devices - iPhone SE */
        @media (max-width: 360px) {
          .testimonials-section {
            padding: 30px 12px;
          }

          .testimonials-container {
            gap: 10px;
            max-width: 280px;
          }

          .testimonial-card {
            padding: 14px 12px;
            border-radius: 8px;
          }

          .card-icon {
            width: 28px;
            height: 28px;
            margin-bottom: 8px;
          }

          .card-icon svg {
            width: 28px;
            height: 28px;
          }

          .card-title {
            font-size: 0.95rem;
            margin-bottom: 5px;
          }

          .card-description {
            font-size: 0.7rem;
            line-height: 1.4;
            margin-bottom: 10px;
          }

          .divider {
            margin-bottom: 10px;
          }

          .testimonial-quote {
            font-size: 0.7rem;
            line-height: 1.4;
            margin-bottom: 10px;
          }

          .author-avatar {
            width: 28px;
            height: 28px;
          }

          .author-name {
            font-size: 0.75rem;
          }

          .author-company {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;