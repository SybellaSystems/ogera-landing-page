"use client";

import { useState, useEffect } from 'react';
import './JobListings.css';

interface Worker {
  name: string;
  title: string;
  rating: string;
  rate: string;
  skills?: string[];
  jobs?: number;
  location?: string;
  description?: string;
}

function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [interviewMessage, setInterviewMessage] = useState('');

  const profileImage = "https://i.pinimg.com/1200x/bb/6a/ef/bb6aef8c1bd48cd8b3b41725eaba18e3.jpg";

  const categories = [
    {
      id: "development",
      name: "Development & IT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      id: "design",
      name: "Design & Creative",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r="2.5"/>
          <circle cx="17.5" cy="10.5" r="2.5"/>
          <circle cx="8.5" cy="7.5" r="2.5"/>
          <circle cx="6.5" cy="12.5" r="2.5"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      )
    },
    {
      id: "finance",
      name: "Finance & Accounting",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"/>
          <path d="M3 10h18"/>
          <path d="M5 6l7-3 7 3"/>
          <path d="M4 10v11"/>
          <path d="M20 10v11"/>
          <path d="M8 14v3"/>
          <path d="M12 14v3"/>
          <path d="M16 14v3"/>
        </svg>
      )
    },
    {
      id: "sales",
      name: "Sales & Marketing",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      id: "ai-services",
      name: "AI Services",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
        </svg>
      )
    },
    {
      id: "law",
      name: "Law",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18"/>
          <path d="M3 6h18"/>
          <path d="M3 6l3 12h12l3-12"/>
          <path d="M6 18h4"/>
          <path d="M14 18h4"/>
        </svg>
      )
    },
    {
      id: "hr",
      name: "HR & Training",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <circle cx="19" cy="11" r="2"/>
          <path d="M19 8v1"/>
          <path d="M19 13v1"/>
        </svg>
      )
    },
    {
      id: "engineering",
      name: "Engineering & Architecture",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      id: "writing",
      name: "Writing & Translation",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      )
    },
    {
      id: "admin",
      name: "Admin & Support",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  const workersByCategory: { [key: string]: Worker[] } = {
    development: [
      { name: "Chinedu Okonkwo", title: "Website Developer", rating: "4.8", rate: "50", skills: ["React", "Node.js", "TypeScript"], jobs: 156, location: "Lagos, Nigeria", description: "Expert website developer specializing in modern web technologies and responsive design." },
      { name: "Amara Wanjiku", title: "AI Engineer", rating: "4.8", rate: "60", skills: ["Python", "TensorFlow", "PyTorch"], jobs: 89, location: "Nairobi, Kenya", description: "Skilled AI engineer building intelligent systems and machine learning solutions." },
      { name: "Thabo Molefe", title: "Ethical Hacker", rating: "4.7", rate: "83", skills: ["Penetration Testing", "Security Audit"], jobs: 67, location: "Cape Town, South Africa", description: "Certified ethical hacker ensuring your systems are secure from vulnerabilities." },
      { name: "Kwame Asante", title: "Software Developer", rating: "4.8", rate: "50", skills: ["Java", "C++", "Python"], jobs: 234, location: "Accra, Ghana", description: "Full-stack software developer creating scalable enterprise solutions." },
      { name: "Jean-Pierre Habimana", title: "Shopify Developer", rating: "4.7", rate: "45", skills: ["Shopify", "Liquid", "E-commerce"], jobs: 112, location: "Kigali, Rwanda", description: "Specialized Shopify developer building custom e-commerce experiences." },
      { name: "Baraka Mwangi", title: "WordPress Developer", rating: "4.8", rate: "40", skills: ["WordPress", "PHP", "MySQL"], jobs: 198, location: "Dar es Salaam, Tanzania", description: "Experienced WordPress developer creating custom themes and plugins." }
    ],
    design: [
      { name: "Adaeze Nwosu", title: "UI/UX Designer", rating: "4.9", rate: "55", skills: ["Figma", "Adobe XD", "Prototyping"], jobs: 145, location: "Lagos, Nigeria", description: "Creative UI/UX designer crafting intuitive user experiences." },
      { name: "Wanjiru Kamau", title: "Graphic Designer", rating: "4.7", rate: "40", skills: ["Photoshop", "Illustrator", "Branding"], jobs: 187, location: "Nairobi, Kenya", description: "Talented graphic designer creating stunning visual content." },
      { name: "Zandile Ndlovu", title: "Logo Designer", rating: "4.8", rate: "35", skills: ["Logo Design", "Brand Identity"], jobs: 223, location: "Johannesburg, South Africa", description: "Professional logo designer building memorable brand identities." },
      { name: "Akosua Mensah", title: "Brand Designer", rating: "4.6", rate: "50", skills: ["Branding", "Visual Identity", "Guidelines"], jobs: 98, location: "Accra, Ghana", description: "Strategic brand designer developing comprehensive visual systems." },
      { name: "Ahmed Hassan", title: "Motion Designer", rating: "4.8", rate: "65", skills: ["After Effects", "Animation", "Video"], jobs: 76, location: "Cairo, Egypt", description: "Dynamic motion designer bringing stories to life through animation." },
      { name: "Youssef Benali", title: "3D Artist", rating: "4.7", rate: "70", skills: ["Blender", "Maya", "3D Modeling"], jobs: 54, location: "Casablanca, Morocco", description: "Skilled 3D artist creating immersive visual experiences." }
    ],
    finance: [
      { name: "Oluwaseun Adeyemi", title: "Accountant", rating: "4.8", rate: "45", skills: ["Financial Reporting", "Tax", "Auditing"], jobs: 167, location: "Lagos, Nigeria", description: "Certified accountant managing financial records and compliance." },
      { name: "Grace Otieno", title: "Financial Analyst", rating: "4.7", rate: "55", skills: ["Financial Modeling", "Excel", "Analysis"], jobs: 89, location: "Nairobi, Kenya", description: "Expert financial analyst providing data-driven insights." },
      { name: "Nomvula Dlamini", title: "Tax Consultant", rating: "4.9", rate: "60", skills: ["Tax Planning", "Compliance", "Advisory"], jobs: 78, location: "Cape Town, South Africa", description: "Professional tax consultant optimizing your tax strategies." },
      { name: "Kofi Owusu", title: "Bookkeeper", rating: "4.6", rate: "35", skills: ["QuickBooks", "Xero", "Reconciliation"], jobs: 234, location: "Accra, Ghana", description: "Reliable bookkeeper maintaining accurate financial records." },
      { name: "Diane Uwimana", title: "Auditor", rating: "4.8", rate: "65", skills: ["Internal Audit", "Risk Assessment"], jobs: 56, location: "Kigali, Rwanda", description: "Thorough auditor ensuring financial integrity and compliance." },
      { name: "Sipho Nkosi", title: "CFO Consultant", rating: "4.9", rate: "100", skills: ["Strategic Planning", "Financial Leadership"], jobs: 34, location: "Johannesburg, South Africa", description: "Experienced CFO consultant for strategic financial management." }
    ],
    sales: [
      { name: "Emeka Eze", title: "Digital Marketer", rating: "4.7", rate: "45", skills: ["SEO", "PPC", "Social Media"], jobs: 189, location: "Lagos, Nigeria", description: "Results-driven digital marketer growing your online presence." },
      { name: "Fatima Ochieng", title: "SEO Specialist", rating: "4.8", rate: "50", skills: ["On-page SEO", "Link Building", "Analytics"], jobs: 134, location: "Nairobi, Kenya", description: "Expert SEO specialist improving your search rankings." },
      { name: "Lerato Mokoena", title: "Social Media Manager", rating: "4.6", rate: "40", skills: ["Content Strategy", "Community Management"], jobs: 212, location: "Cape Town, South Africa", description: "Creative social media manager building engaged communities." },
      { name: "Yaw Boateng", title: "Sales Representative", rating: "4.5", rate: "35", skills: ["B2B Sales", "Lead Generation"], jobs: 267, location: "Accra, Ghana", description: "Skilled sales representative driving business growth." },
      { name: "Mona El-Sayed", title: "Email Marketer", rating: "4.7", rate: "38", skills: ["Email Automation", "Copywriting"], jobs: 98, location: "Cairo, Egypt", description: "Strategic email marketer maximizing engagement and conversions." },
      { name: "Karim Idrissi", title: "Content Strategist", rating: "4.8", rate: "55", skills: ["Content Planning", "SEO", "Analytics"], jobs: 76, location: "Casablanca, Morocco", description: "Thoughtful content strategist aligning content with business goals." }
    ],
    "ai-services": [
      { name: "Tunde Bakare", title: "ML Engineer", rating: "4.9", rate: "85", skills: ["Machine Learning", "Deep Learning", "Python"], jobs: 67, location: "Lagos, Nigeria", description: "Expert ML engineer building predictive models and AI systems." },
      { name: "Njeri Muthoni", title: "Data Scientist", rating: "4.8", rate: "75", skills: ["Data Analysis", "Statistics", "Python"], jobs: 89, location: "Nairobi, Kenya", description: "Skilled data scientist extracting insights from complex datasets." },
      { name: "Mandla Sithole", title: "AI Consultant", rating: "4.7", rate: "90", skills: ["AI Strategy", "Implementation", "Advisory"], jobs: 45, location: "Cape Town, South Africa", description: "Strategic AI consultant guiding digital transformation." },
      { name: "Palesa Mahlangu", title: "NLP Specialist", rating: "4.8", rate: "80", skills: ["Natural Language Processing", "LLMs"], jobs: 34, location: "Johannesburg, South Africa", description: "Expert NLP specialist building language-based AI solutions." },
      { name: "Eric Mugisha", title: "Computer Vision Expert", rating: "4.9", rate: "95", skills: ["Image Recognition", "Object Detection"], jobs: 28, location: "Kigali, Rwanda", description: "Skilled computer vision expert developing visual AI applications." },
      { name: "Ama Darko", title: "AI Trainer", rating: "4.6", rate: "45", skills: ["Data Labeling", "Model Training"], jobs: 123, location: "Accra, Ghana", description: "Dedicated AI trainer improving model accuracy and performance." }
    ],
    law: [
      { name: "Obiora Chukwu", title: "Corporate Lawyer", rating: "4.8", rate: "120", skills: ["M&A", "Corporate Law", "Contracts"], jobs: 45, location: "Lagos, Nigeria", description: "Experienced corporate lawyer handling complex business transactions." },
      { name: "Aisha Kimani", title: "Contract Specialist", rating: "4.7", rate: "80", skills: ["Contract Drafting", "Review", "Negotiation"], jobs: 89, location: "Nairobi, Kenya", description: "Detail-oriented contract specialist ensuring legal compliance." },
      { name: "Themba Khumalo", title: "IP Attorney", rating: "4.9", rate: "100", skills: ["Patents", "Trademarks", "Copyright"], jobs: 34, location: "Cape Town, South Africa", description: "Specialized IP attorney protecting your intellectual property." },
      { name: "Refilwe Mabaso", title: "Legal Consultant", rating: "4.6", rate: "70", skills: ["Legal Advisory", "Compliance"], jobs: 67, location: "Johannesburg, South Africa", description: "Knowledgeable legal consultant providing strategic advice." },
      { name: "Efua Antwi", title: "Paralegal", rating: "4.5", rate: "40", skills: ["Legal Research", "Documentation"], jobs: 156, location: "Accra, Ghana", description: "Efficient paralegal supporting legal operations." },
      { name: "Omar Farouk", title: "Compliance Officer", rating: "4.7", rate: "65", skills: ["Regulatory Compliance", "Risk Management"], jobs: 78, location: "Cairo, Egypt", description: "Vigilant compliance officer ensuring regulatory adherence." }
    ],
    hr: [
      { name: "Ngozi Obi", title: "HR Manager", rating: "4.7", rate: "50", skills: ["HR Strategy", "Employee Relations"], jobs: 89, location: "Lagos, Nigeria", description: "Strategic HR manager building strong workplace cultures." },
      { name: "Mercy Wambui", title: "Recruiter", rating: "4.6", rate: "40", skills: ["Talent Acquisition", "Sourcing"], jobs: 178, location: "Nairobi, Kenya", description: "Expert recruiter finding the best talent for your team." },
      { name: "Nosipho Cele", title: "Training Specialist", rating: "4.8", rate: "55", skills: ["L&D", "Training Design", "Facilitation"], jobs: 67, location: "Cape Town, South Africa", description: "Skilled training specialist developing employee capabilities." },
      { name: "Abena Poku", title: "Payroll Expert", rating: "4.5", rate: "35", skills: ["Payroll Processing", "Compliance"], jobs: 134, location: "Accra, Ghana", description: "Accurate payroll expert managing compensation and benefits." },
      { name: "Sandrine Ingabire", title: "HR Consultant", rating: "4.7", rate: "60", skills: ["HR Advisory", "Policy Development"], jobs: 56, location: "Kigali, Rwanda", description: "Experienced HR consultant optimizing people operations." },
      { name: "Bongani Zulu", title: "Talent Acquisition Lead", rating: "4.8", rate: "45", skills: ["Recruiting", "Employer Branding"], jobs: 98, location: "Johannesburg, South Africa", description: "Strategic talent acquisition specialist building winning teams." }
    ],
    engineering: [
      { name: "Ikenna Okoro", title: "Civil Engineer", rating: "4.8", rate: "70", skills: ["Structural Design", "AutoCAD", "Project Management"], jobs: 78, location: "Lagos, Nigeria", description: "Professional civil engineer designing safe infrastructure." },
      { name: "David Odhiambo", title: "Architect", rating: "4.9", rate: "80", skills: ["Architecture", "3D Modeling", "Design"], jobs: 56, location: "Nairobi, Kenya", description: "Creative architect designing inspiring spaces." },
      { name: "Pieter van der Berg", title: "Structural Engineer", rating: "4.7", rate: "75", skills: ["Structural Analysis", "Steel Design"], jobs: 45, location: "Cape Town, South Africa", description: "Expert structural engineer ensuring building safety." },
      { name: "Kwabena Amoah", title: "MEP Engineer", rating: "4.6", rate: "65", skills: ["HVAC", "Electrical", "Plumbing"], jobs: 67, location: "Accra, Ghana", description: "Skilled MEP engineer optimizing building systems." },
      { name: "Tarek Mahmoud", title: "CAD Specialist", rating: "4.5", rate: "45", skills: ["AutoCAD", "Revit", "Drafting"], jobs: 123, location: "Cairo, Egypt", description: "Precise CAD specialist creating detailed technical drawings." },
      { name: "Fatima Zahra", title: "Interior Designer", rating: "4.8", rate: "55", skills: ["Interior Design", "Space Planning"], jobs: 89, location: "Casablanca, Morocco", description: "Talented interior designer creating beautiful spaces." }
    ],
    writing: [
      { name: "Chioma Ekezie", title: "Content Writer", rating: "4.7", rate: "35", skills: ["Blog Writing", "SEO Content", "Research"], jobs: 234, location: "Lagos, Nigeria", description: "Versatile content writer creating engaging written content." },
      { name: "Brian Mutua", title: "Copywriter", rating: "4.8", rate: "45", skills: ["Ad Copy", "Sales Pages", "Brand Voice"], jobs: 167, location: "Nairobi, Kenya", description: "Persuasive copywriter driving conversions through words." },
      { name: "Michelle Botha", title: "Technical Writer", rating: "4.6", rate: "50", skills: ["Documentation", "API Docs", "User Guides"], jobs: 89, location: "Cape Town, South Africa", description: "Clear technical writer simplifying complex information." },
      { name: "Nana Agyemang", title: "Translator", rating: "4.9", rate: "40", skills: ["Translation", "Localization", "Proofreading"], jobs: 145, location: "Accra, Ghana", description: "Accurate translator bridging language barriers." },
      { name: "Clarisse Umutoni", title: "Editor", rating: "4.7", rate: "38", skills: ["Editing", "Proofreading", "Style Guide"], jobs: 112, location: "Kigali, Rwanda", description: "Meticulous editor polishing content to perfection." },
      { name: "Lindiwe Mbeki", title: "Ghostwriter", rating: "4.8", rate: "55", skills: ["Book Writing", "Articles", "Speeches"], jobs: 78, location: "Johannesburg, South Africa", description: "Talented ghostwriter bringing your ideas to life." }
    ],
    admin: [
      { name: "Funke Adebayo", title: "Virtual Assistant", rating: "4.6", rate: "25", skills: ["Admin Support", "Scheduling", "Email"], jobs: 345, location: "Lagos, Nigeria", description: "Reliable virtual assistant managing your daily tasks." },
      { name: "Lucy Njoroge", title: "Data Entry Specialist", rating: "4.5", rate: "20", skills: ["Data Entry", "Excel", "Accuracy"], jobs: 456, location: "Nairobi, Kenya", description: "Accurate data entry specialist handling high-volume data." },
      { name: "Thandiwe Ngwenya", title: "Customer Support Specialist", rating: "4.7", rate: "28", skills: ["Customer Service", "Problem Solving"], jobs: 289, location: "Cape Town, South Africa", description: "Friendly customer support specialist ensuring satisfaction." },
      { name: "Akua Sarpong", title: "Executive Assistant", rating: "4.8", rate: "40", skills: ["Executive Support", "Travel Planning"], jobs: 98, location: "Accra, Ghana", description: "Professional executive assistant supporting leadership." },
      { name: "Layla Ibrahim", title: "Project Coordinator", rating: "4.6", rate: "35", skills: ["Project Management", "Coordination"], jobs: 134, location: "Cairo, Egypt", description: "Organized project coordinator keeping teams on track." },
      { name: "Salma Benjelloun", title: "Office Manager", rating: "4.7", rate: "45", skills: ["Office Management", "Operations"], jobs: 87, location: "Casablanca, Morocco", description: "Efficient office manager streamlining operations." }
    ]
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewProfile = (worker: Worker) => {
    setSelectedWorker(worker);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    setSelectedWorker(null);
  };

  const handleHireNow = () => {
    setIsHireModalOpen(true);
  };

  const closeHireModal = () => {
    setIsHireModalOpen(false);
  };

  const handleInviteInterview = () => {
    setIsInterviewModalOpen(true);
  };

  const closeInterviewModal = () => {
    setIsInterviewModalOpen(false);
    setInterviewDate('');
    setInterviewTime('');
    setInterviewMessage('');
  };

  const handleSendInvite = () => {
    // Here you would send the interview invitation
    alert(`Interview invitation sent to ${selectedWorker?.name} for ${interviewDate} at ${interviewTime}`);
    closeInterviewModal();
  };

  const handleConfirmHire = () => {
    // Here you would process the hire
    alert(`Hire request sent to ${selectedWorker?.name}!`);
    closeHireModal();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isProfileModalOpen || isHireModalOpen || isInterviewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isProfileModalOpen, isHireModalOpen, isInterviewModalOpen]);

  const currentWorkers = selectedCategory ? workersByCategory[selectedCategory] || [] : [];
  const currentCategoryName = categories.find(c => c.id === selectedCategory)?.name || '';

  return (
    <section id="scholarship" className="explore-pros-section">
      <h2 className="explore-title">What Are You Looking For?</h2>

      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="category-icon">
              {category.icon}
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Workers Modal */}
      {isModalOpen && (
        <>
          <div className="workers-modal-overlay" onClick={closeModal}></div>
          <div className="workers-modal">
            <div className="workers-modal-header">
              <h3>{currentCategoryName}</h3>
              <button className="workers-modal-close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="workers-modal-content">
              <div className="workers-grid">
                {currentWorkers.map((worker, index) => (
                  <div key={index} className="worker-card">
                    <div className="worker-image">
                      <img src={profileImage} alt={worker.name} />
                    </div>
                    <h4 className="worker-name">{worker.name}</h4>
                    <p className="worker-title">{worker.title}</p>
                    <div className="worker-rating">
                      <span className="star">★</span>
                      <span>{worker.rating} on avg.</span>
                    </div>
                    <div className="worker-rate">
                      <span className="dollar">$</span>
                      <span>{worker.rate}/hr+</span>
                    </div>
                    <button
                      className="view-profile-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProfile(worker);
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Profile Detail Modal */}
      {isProfileModalOpen && selectedWorker && (
        <>
          <div className="profile-modal-overlay" onClick={closeProfileModal}></div>
          <div className="profile-modal">
            <button className="profile-modal-close" onClick={closeProfileModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="profile-modal-content">
              <div className="profile-header">
                <div className="profile-image-large">
                  <img src={profileImage} alt={selectedWorker.name} />
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">{selectedWorker.name}</h2>
                  <p className="profile-title">{selectedWorker.title}</p>
                  <div className="profile-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{selectedWorker.location}</span>
                  </div>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-value">★ {selectedWorker.rating}</span>
                      <span className="stat-label">Rating</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">${selectedWorker.rate}/hr</span>
                      <span className="stat-label">Hourly Rate</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{selectedWorker.jobs}+</span>
                      <span className="stat-label">Jobs Done</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h3>About</h3>
                <p>{selectedWorker.description}</p>
              </div>

              <div className="profile-section">
                <h3>Skills</h3>
                <div className="skills-list">
                  {selectedWorker.skills?.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="profile-actions">
                <button className="hire-btn" onClick={handleHireNow}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Hire Now
                </button>
                <button className="message-btn" onClick={handleInviteInterview}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Invite to Interview
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hire Confirmation Modal */}
      {isHireModalOpen && selectedWorker && (
        <>
          <div className="action-modal-overlay" onClick={closeHireModal}></div>
          <div className="action-modal">
            <button className="action-modal-close" onClick={closeHireModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="action-modal-content">
              <div className="action-modal-icon hire-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M16 11l2 2 4-4"/>
                </svg>
              </div>

              <h3 className="action-modal-title">Hire {selectedWorker.name}?</h3>
              <p className="action-modal-subtitle">{selectedWorker.title}</p>

              <div className="hire-details">
                <div className="hire-detail-row">
                  <span className="hire-detail-label">Hourly Rate</span>
                  <span className="hire-detail-value">${selectedWorker.rate}/hr</span>
                </div>
                <div className="hire-detail-row">
                  <span className="hire-detail-label">Rating</span>
                  <span className="hire-detail-value">★ {selectedWorker.rating}</span>
                </div>
                <div className="hire-detail-row">
                  <span className="hire-detail-label">Jobs Completed</span>
                  <span className="hire-detail-value">{selectedWorker.jobs}+</span>
                </div>
              </div>

              <p className="action-modal-note">
                By clicking confirm, you agree to hire this professional. They will be notified and you can discuss project details.
              </p>

              <div className="action-modal-buttons">
                <button className="action-cancel-btn" onClick={closeHireModal}>Cancel</button>
                <button className="action-confirm-btn" onClick={handleConfirmHire}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Confirm Hire
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Interview Invitation Modal */}
      {isInterviewModalOpen && selectedWorker && (
        <>
          <div className="action-modal-overlay" onClick={closeInterviewModal}></div>
          <div className="action-modal interview-modal">
            <button className="action-modal-close" onClick={closeInterviewModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="action-modal-content">
              <div className="action-modal-icon interview-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>

              <h3 className="action-modal-title">Invite to Interview</h3>
              <p className="action-modal-subtitle">Schedule an interview with {selectedWorker.name}</p>

              <div className="interview-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={interviewDate}
                      onChange={(e) => setInterviewDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      type="time"
                      value={interviewTime}
                      onChange={(e) => setInterviewTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea
                    placeholder="Add a message for the candidate..."
                    value={interviewMessage}
                    onChange={(e) => setInterviewMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              <div className="action-modal-buttons">
                <button className="action-cancel-btn" onClick={closeInterviewModal}>Cancel</button>
                <button
                  className="action-confirm-btn"
                  onClick={handleSendInvite}
                  disabled={!interviewDate || !interviewTime}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Invitation
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default JobListings;
