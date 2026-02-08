"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Ogera makes it easy to trust the platform. The way they protect both employer and student data gives me peace of mind.",
    author: "Martin Nziza",
    role: "Virtual Assistant",
    company: "Hired by Teva",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "The Ogera platform gave me the freedom to grow my skills and build a solid reputation while working remotely.",
    author: "Kamanzi Darline",
    role: "Graphic Designer",
    company: "Hired by Dynamos",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "With Ogera I get tasks, track progress, and get paid quickly. It really helps me stay on top of my schedule.",
    author: "Kagabo Jean",
    role: "Customer Support",
    company: "Hired by Teva",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Finding remote work used to be stressful. Ogera changed that completely. Now I work with clients worldwide from my home.",
    author: "Uwimana Grace",
    role: "Bookkeeper",
    company: "Hired by MediaCorp",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "The verification process ensures I only work with legitimate companies. Ogera truly cares about freelancer safety.",
    author: "Habimana Eric",
    role: "Web Developer",
    company: "Hired by TechFlow",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "I landed my dream remote job within weeks of joining Ogera. The platform is intuitive and the opportunities are endless.",
    author: "Mukiza Ange",
    role: "Social Media Manager",
    company: "Hired by GlobalReach",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="tm-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FBBF24" : "rgba(255, 255, 255, 0.2)"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive visible cards
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w <= 640) setVisibleCards(1);
      else if (w <= 768) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const totalSlides = testimonials.length;
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, visibleCards)];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
  }, []);

  // Seamless reset when reaching cloned slides
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      const timeout = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
        }
        setCurrentSlide(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = '';
            }
          });
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, totalSlides]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`tm-section${isVisible ? " tm-visible" : ""}`}
      ref={sectionRef}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="tm-inner">
        <div className="tm-header">
          <span className="tm-badge">Testimonials</span>
          <h2>What Our Users Say</h2>
          <p>Hear from professionals who found success through Ogera</p>
        </div>

        <div className="tm-carousel">
          <div className="tm-track-wrapper">
            <div
              className="tm-track"
              ref={trackRef}
              style={{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }}
            >
              {extendedTestimonials.map((t, index) => {
                const isCenter = visibleCards === 1
                  ? index === currentSlide
                  : index === currentSlide + 1;
                return (
                  <div key={index} className={`tm-card-wrapper${isCenter ? " tm-card-wrapper-center" : ""}`}>
                    <div
                      className={`tm-card${isVisible ? " tm-card-enter" : ""}${isCenter ? " tm-card-center" : ""}`}
                      style={{
                        ...(isCenter ? { backgroundImage: `url(${t.avatar})` } : {}),
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {isCenter && <div className="tm-card-overlay" />}
                      <div className="tm-card-content">
                        <StarRating rating={t.rating} />
                        <blockquote className="tm-quote">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <div className="tm-author">
                          {!isCenter && (
                            <img src={t.avatar} alt={t.author} className="tm-avatar" />
                          )}
                          <div className="tm-author-info">
                            <p className="tm-name">{t.author}</p>
                            <p className="tm-role">{t.role}</p>
                            <p className="tm-company">{t.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
