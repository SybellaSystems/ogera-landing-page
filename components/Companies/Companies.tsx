"use client"

import './Companies.css';

function Companies() {
  const showCompanies = false;
  if (!showCompanies) return null;
  const companies = [
    {
      name: "Safaricom",
      type: "Telecommunications",
      rating: "4.7",
      reviews: "12,500",
      hired: "8,200",
      image: "/safaricom.png"
    },
    {
      name: "MTN Group",
      type: "Telecommunications",
      rating: "4.5",
      reviews: "18,000",
      hired: "15,400",
      image: "/mtn.png"
    },
    {
      name: "Jumia",
      type: "E-commerce",
      rating: "4.3",
      reviews: "9,800",
      hired: "6,500",
      image: "/jumia.jpeg"
    },
    {
      name: "Flutterwave",
      type: "Fintech",
      rating: "4.6",
      reviews: "5,200",
      hired: "3,800",
      image: "/flutter.png"
    },
    {
      name: "Andela",
      type: "Tech Talent",
      rating: "4.8",
      reviews: "7,500",
      hired: "12,000",
      image: "/Andela.png"
    },
    {
      name: "Paystack",
      type: "Fintech",
      rating: "4.7",
      reviews: "4,300",
      hired: "2,100",
      image: "/Paystack.png"
    },
    {
      name: "Interswitch",
      type: "Fintech",
      rating: "4.4",
      reviews: "6,800",
      hired: "4,500",
      image: "/Interswitch.jpeg"
    },
    {
      name: "Takealot",
      type: "E-commerce",
      rating: "4.2",
      reviews: "8,100",
      hired: "5,200",
      image: "/Takealot.png"
    },
    {
      name: "Cellulant",
      type: "Fintech",
      rating: "4.5",
      reviews: "3,600",
      hired: "2,800",
      image: "/Cellulant.png"
    },
    {
      name: "Liquid Telecom",
      type: "Telecommunications",
      rating: "4.4",
      reviews: "5,400",
      hired: "3,200",
      image: "/Liquid Telecom.png"
    }
  ];

  // Generate star rating
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">★</span>
      );
    }
    
    return <div className="stars">{stars}</div>;
  };

  return (
    <section id="partners" className="companies-section">
      <h2 className="companies-title">Top 10 African Companies Hiring</h2>
      <p className="companies-subtitle">Trusted employers with verified reviews and successful hires</p>

      <div className="companies-carousel">
        <div className="companies-track">
          {[...companies, ...companies].map((company, idx) => (
            <div key={idx} className="company-card">
              <div className="company-logo">
                {company.image ? (
                  <img src={company.image} alt={company.name} />
                ) : (
                  <div className="logo-placeholder">{company.name.charAt(0)}</div>
                )}
              </div>

              <div className="company-info">
                <h3 className="company-name">{company.name}</h3>
                <p className="company-type">{company.type}</p>
              </div>

              <div className="company-stats">
                <div className="rating-badge">
                  <span className="rating-score">{company.rating}</span>
                  <span className="rating-star">★</span>
                </div>
                <div className="stats-row">
                  <span className="reviews-count">{company.reviews} reviews</span>
                  <span className="hired-count">{company.hired} hired</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;