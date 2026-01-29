"use client";

function Testimonials() {
  const testimonials = [
    {
      quote: "Ogera makes it easy to trust the platform. The way they protect both employer and student data gives me peace of mind.",
      author: "Martin Nziza",
      role: "Virtual Assistant",
      company: "Hired by Teva",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The Ogera platform gave me the freedom to grow my skills and build a solid reputation while working remotely.",
      author: "Kamanzi Darline",
      role: "Graphic Designer",
      company: "Hired by Dynamos",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "With Ogera I get tasks, track progress, and get paid quickly. It really helps me stay on top of my schedule.",
      author: "Kagabo Jean",
      role: "Customer Support",
      company: "Hired by Teva",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Finding remote work used to be stressful. Ogera changed that completely. Now I work with clients worldwide from my home.",
      author: "Uwimana Grace",
      role: "Bookkeeper",
      company: "Hired by MediaCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The verification process ensures I only work with legitimate companies. Ogera truly cares about freelancer safety.",
      author: "Habimana Eric",
      role: "Web Developer",
      company: "Hired by TechFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "I landed my dream remote job within weeks of joining Ogera. The platform is intuitive and the opportunities are endless.",
      author: "Mukiza Ange",
      role: "Social Media Manager",
      company: "Hired by GlobalReach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Users Say</h2>
        <p>Hear from professionals who found success through Ogera</p>
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#7F56D9" opacity="0.2">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <blockquote className="testimonial-quote">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="author-info">
              <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
              <div className="author-details">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonials-section {
          padding: 70px 20px;
          background: linear-gradient(135deg, #7F56D9 0%, #5B3BA5 100%);
          overflow: hidden;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .testimonials-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
        }

        .testimonials-header p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding: 0 20px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .quote-icon {
          margin-bottom: 16px;
        }

        .testimonial-quote {
          font-size: 15px;
          color: #1a2b4a;
          line-height: 1.7;
          margin: 0 0 24px 0;
          font-style: italic;
          flex-grow: 1;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid #f0edf5;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid #ede9fe;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .author-name {
          font-size: 15px;
          color: #1a2b4a;
          font-weight: 600;
          margin: 0;
        }

        .author-role {
          font-size: 13px;
          color: #7F56D9;
          margin: 0;
          font-weight: 500;
        }

        .author-company {
          font-size: 12px;
          color: #6b7280;
          margin: 0;
        }

        /* Large tablets and small desktops */
        @media (max-width: 1100px) {
          .testimonials-container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
            gap: 20px;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 16px;
          }

          .testimonials-header {
            margin-bottom: 40px;
          }

          .testimonials-header h2 {
            font-size: 28px;
          }

          .testimonials-header p {
            font-size: 14px;
          }

          .testimonials-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            max-width: 100%;
            padding: 0;
          }

          .testimonial-card {
            padding: 22px 18px;
            border-radius: 14px;
          }

          .quote-icon svg {
            width: 28px;
            height: 28px;
          }

          .testimonial-quote {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .author-info {
            gap: 12px;
            padding-top: 16px;
          }

          .author-avatar {
            width: 44px;
            height: 44px;
          }

          .author-name {
            font-size: 14px;
          }

          .author-role {
            font-size: 12px;
          }

          .author-company {
            font-size: 11px;
          }
        }

        /* Small tablets and large phones */
        @media (max-width: 640px) {
          .testimonials-section {
            padding: 50px 16px;
          }

          .testimonials-header {
            margin-bottom: 32px;
          }

          .testimonials-header h2 {
            font-size: 24px;
          }

          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 100%;
          }

          .testimonial-card {
            padding: 24px 20px;
            border-radius: 14px;
          }

          .testimonial-quote {
            font-size: 14px;
            line-height: 1.7;
          }

          .author-avatar {
            width: 48px;
            height: 48px;
          }

          .author-name {
            font-size: 15px;
          }

          .author-role {
            font-size: 13px;
          }

          .author-company {
            font-size: 12px;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .testimonials-section {
            padding: 40px 12px;
          }

          .testimonials-header h2 {
            font-size: 22px;
          }

          .testimonials-header p {
            font-size: 13px;
          }

          .testimonials-container {
            gap: 14px;
          }

          .testimonial-card {
            padding: 20px 16px;
            border-radius: 12px;
          }

          .quote-icon svg {
            width: 24px;
            height: 24px;
          }

          .testimonial-quote {
            font-size: 13px;
            margin-bottom: 18px;
          }

          .author-avatar {
            width: 44px;
            height: 44px;
          }

          .author-name {
            font-size: 14px;
          }

          .author-role {
            font-size: 12px;
          }

          .author-company {
            font-size: 11px;
          }
        }

        /* Extra small phones */
        @media (max-width: 360px) {
          .testimonials-section {
            padding: 35px 10px;
          }

          .testimonials-header h2 {
            font-size: 20px;
          }

          .testimonials-header p {
            font-size: 12px;
          }

          .testimonials-container {
            gap: 12px;
          }

          .testimonial-card {
            padding: 18px 14px;
            border-radius: 10px;
          }

          .quote-icon svg {
            width: 22px;
            height: 22px;
          }

          .testimonial-quote {
            font-size: 12px;
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .author-info {
            gap: 10px;
            padding-top: 14px;
          }

          .author-avatar {
            width: 40px;
            height: 40px;
          }

          .author-name {
            font-size: 13px;
          }

          .author-role {
            font-size: 11px;
          }

          .author-company {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
