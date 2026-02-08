export interface Worker {
  name: string;
  slug: string;
  title: string;
  rating: string;
  rate: string;
  skills: string[];
  jobs: number;
  location: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
}

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export const categories: Category[] = [
  { id: "development", name: "Development & IT" },
  { id: "design", name: "Design & Creative" },
  { id: "finance", name: "Finance & Accounting" },
  { id: "sales", name: "Sales & Marketing" },
  { id: "ai-services", name: "AI Services" },
  { id: "law", name: "Law" },
  { id: "hr", name: "HR & Training" },
  { id: "engineering", name: "Engineering & Architecture" },
  { id: "writing", name: "Writing & Translation" },
  { id: "admin", name: "Admin & Support" },
];

export const workersByCategory: { [key: string]: Worker[] } = {
  development: [
    { name: "Chinedu Okonkwo", slug: toSlug("Chinedu Okonkwo"), title: "Website Developer", rating: "4.8", rate: "50", skills: ["React", "Node.js", "TypeScript"], jobs: 156, location: "Lagos, Nigeria", description: "Expert website developer specializing in modern web technologies and responsive design." },
    { name: "Amara Wanjiku", slug: toSlug("Amara Wanjiku"), title: "AI Engineer", rating: "4.8", rate: "60", skills: ["Python", "TensorFlow", "PyTorch"], jobs: 89, location: "Nairobi, Kenya", description: "Skilled AI engineer building intelligent systems and machine learning solutions." },
    { name: "Thabo Molefe", slug: toSlug("Thabo Molefe"), title: "Ethical Hacker", rating: "4.7", rate: "83", skills: ["Penetration Testing", "Security Audit"], jobs: 67, location: "Cape Town, South Africa", description: "Certified ethical hacker ensuring your systems are secure from vulnerabilities." },
    { name: "Kwame Asante", slug: toSlug("Kwame Asante"), title: "Software Developer", rating: "4.8", rate: "50", skills: ["Java", "C++", "Python"], jobs: 234, location: "Accra, Ghana", description: "Full-stack software developer creating scalable enterprise solutions." },
    { name: "Jean-Pierre Habimana", slug: toSlug("Jean-Pierre Habimana"), title: "Shopify Developer", rating: "4.7", rate: "45", skills: ["Shopify", "Liquid", "E-commerce"], jobs: 112, location: "Kigali, Rwanda", description: "Specialized Shopify developer building custom e-commerce experiences." },
    { name: "Baraka Mwangi", slug: toSlug("Baraka Mwangi"), title: "WordPress Developer", rating: "4.8", rate: "40", skills: ["WordPress", "PHP", "MySQL"], jobs: 198, location: "Dar es Salaam, Tanzania", description: "Experienced WordPress developer creating custom themes and plugins." },
  ],
  design: [
    { name: "Adaeze Nwosu", slug: toSlug("Adaeze Nwosu"), title: "UI/UX Designer", rating: "4.9", rate: "55", skills: ["Figma", "Adobe XD", "Prototyping"], jobs: 145, location: "Lagos, Nigeria", description: "Creative UI/UX designer crafting intuitive user experiences." },
    { name: "Wanjiru Kamau", slug: toSlug("Wanjiru Kamau"), title: "Graphic Designer", rating: "4.7", rate: "40", skills: ["Photoshop", "Illustrator", "Branding"], jobs: 187, location: "Nairobi, Kenya", description: "Talented graphic designer creating stunning visual content." },
    { name: "Zandile Ndlovu", slug: toSlug("Zandile Ndlovu"), title: "Logo Designer", rating: "4.8", rate: "35", skills: ["Logo Design", "Brand Identity"], jobs: 223, location: "Johannesburg, South Africa", description: "Professional logo designer building memorable brand identities." },
    { name: "Akosua Mensah", slug: toSlug("Akosua Mensah"), title: "Brand Designer", rating: "4.6", rate: "50", skills: ["Branding", "Visual Identity", "Guidelines"], jobs: 98, location: "Accra, Ghana", description: "Strategic brand designer developing comprehensive visual systems." },
    { name: "Ahmed Hassan", slug: toSlug("Ahmed Hassan"), title: "Motion Designer", rating: "4.8", rate: "65", skills: ["After Effects", "Animation", "Video"], jobs: 76, location: "Cairo, Egypt", description: "Dynamic motion designer bringing stories to life through animation." },
    { name: "Youssef Benali", slug: toSlug("Youssef Benali"), title: "3D Artist", rating: "4.7", rate: "70", skills: ["Blender", "Maya", "3D Modeling"], jobs: 54, location: "Casablanca, Morocco", description: "Skilled 3D artist creating immersive visual experiences." },
  ],
  finance: [
    { name: "Oluwaseun Adeyemi", slug: toSlug("Oluwaseun Adeyemi"), title: "Accountant", rating: "4.8", rate: "45", skills: ["Financial Reporting", "Tax", "Auditing"], jobs: 167, location: "Lagos, Nigeria", description: "Certified accountant managing financial records and compliance." },
    { name: "Grace Otieno", slug: toSlug("Grace Otieno"), title: "Financial Analyst", rating: "4.7", rate: "55", skills: ["Financial Modeling", "Excel", "Analysis"], jobs: 89, location: "Nairobi, Kenya", description: "Expert financial analyst providing data-driven insights." },
    { name: "Nomvula Dlamini", slug: toSlug("Nomvula Dlamini"), title: "Tax Consultant", rating: "4.9", rate: "60", skills: ["Tax Planning", "Compliance", "Advisory"], jobs: 78, location: "Cape Town, South Africa", description: "Professional tax consultant optimizing your tax strategies." },
    { name: "Kofi Owusu", slug: toSlug("Kofi Owusu"), title: "Bookkeeper", rating: "4.6", rate: "35", skills: ["QuickBooks", "Xero", "Reconciliation"], jobs: 234, location: "Accra, Ghana", description: "Reliable bookkeeper maintaining accurate financial records." },
    { name: "Diane Uwimana", slug: toSlug("Diane Uwimana"), title: "Auditor", rating: "4.8", rate: "65", skills: ["Internal Audit", "Risk Assessment"], jobs: 56, location: "Kigali, Rwanda", description: "Thorough auditor ensuring financial integrity and compliance." },
    { name: "Sipho Nkosi", slug: toSlug("Sipho Nkosi"), title: "CFO Consultant", rating: "4.9", rate: "100", skills: ["Strategic Planning", "Financial Leadership"], jobs: 34, location: "Johannesburg, South Africa", description: "Experienced CFO consultant for strategic financial management." },
  ],
  sales: [
    { name: "Emeka Eze", slug: toSlug("Emeka Eze"), title: "Digital Marketer", rating: "4.7", rate: "45", skills: ["SEO", "PPC", "Social Media"], jobs: 189, location: "Lagos, Nigeria", description: "Results-driven digital marketer growing your online presence." },
    { name: "Fatima Ochieng", slug: toSlug("Fatima Ochieng"), title: "SEO Specialist", rating: "4.8", rate: "50", skills: ["On-page SEO", "Link Building", "Analytics"], jobs: 134, location: "Nairobi, Kenya", description: "Expert SEO specialist improving your search rankings." },
    { name: "Lerato Mokoena", slug: toSlug("Lerato Mokoena"), title: "Social Media Manager", rating: "4.6", rate: "40", skills: ["Content Strategy", "Community Management"], jobs: 212, location: "Cape Town, South Africa", description: "Creative social media manager building engaged communities." },
    { name: "Yaw Boateng", slug: toSlug("Yaw Boateng"), title: "Sales Representative", rating: "4.5", rate: "35", skills: ["B2B Sales", "Lead Generation"], jobs: 267, location: "Accra, Ghana", description: "Skilled sales representative driving business growth." },
    { name: "Mona El-Sayed", slug: toSlug("Mona El-Sayed"), title: "Email Marketer", rating: "4.7", rate: "38", skills: ["Email Automation", "Copywriting"], jobs: 98, location: "Cairo, Egypt", description: "Strategic email marketer maximizing engagement and conversions." },
    { name: "Karim Idrissi", slug: toSlug("Karim Idrissi"), title: "Content Strategist", rating: "4.8", rate: "55", skills: ["Content Planning", "SEO", "Analytics"], jobs: 76, location: "Casablanca, Morocco", description: "Thoughtful content strategist aligning content with business goals." },
  ],
  "ai-services": [
    { name: "Tunde Bakare", slug: toSlug("Tunde Bakare"), title: "ML Engineer", rating: "4.9", rate: "85", skills: ["Machine Learning", "Deep Learning", "Python"], jobs: 67, location: "Lagos, Nigeria", description: "Expert ML engineer building predictive models and AI systems." },
    { name: "Njeri Muthoni", slug: toSlug("Njeri Muthoni"), title: "Data Scientist", rating: "4.8", rate: "75", skills: ["Data Analysis", "Statistics", "Python"], jobs: 89, location: "Nairobi, Kenya", description: "Skilled data scientist extracting insights from complex datasets." },
    { name: "Mandla Sithole", slug: toSlug("Mandla Sithole"), title: "AI Consultant", rating: "4.7", rate: "90", skills: ["AI Strategy", "Implementation", "Advisory"], jobs: 45, location: "Cape Town, South Africa", description: "Strategic AI consultant guiding digital transformation." },
    { name: "Palesa Mahlangu", slug: toSlug("Palesa Mahlangu"), title: "NLP Specialist", rating: "4.8", rate: "80", skills: ["Natural Language Processing", "LLMs"], jobs: 34, location: "Johannesburg, South Africa", description: "Expert NLP specialist building language-based AI solutions." },
    { name: "Eric Mugisha", slug: toSlug("Eric Mugisha"), title: "Computer Vision Expert", rating: "4.9", rate: "95", skills: ["Image Recognition", "Object Detection"], jobs: 28, location: "Kigali, Rwanda", description: "Skilled computer vision expert developing visual AI applications." },
    { name: "Ama Darko", slug: toSlug("Ama Darko"), title: "AI Trainer", rating: "4.6", rate: "45", skills: ["Data Labeling", "Model Training"], jobs: 123, location: "Accra, Ghana", description: "Dedicated AI trainer improving model accuracy and performance." },
  ],
  law: [
    { name: "Obiora Chukwu", slug: toSlug("Obiora Chukwu"), title: "Corporate Lawyer", rating: "4.8", rate: "120", skills: ["M&A", "Corporate Law", "Contracts"], jobs: 45, location: "Lagos, Nigeria", description: "Experienced corporate lawyer handling complex business transactions." },
    { name: "Aisha Kimani", slug: toSlug("Aisha Kimani"), title: "Contract Specialist", rating: "4.7", rate: "80", skills: ["Contract Drafting", "Review", "Negotiation"], jobs: 89, location: "Nairobi, Kenya", description: "Detail-oriented contract specialist ensuring legal compliance." },
    { name: "Themba Khumalo", slug: toSlug("Themba Khumalo"), title: "IP Attorney", rating: "4.9", rate: "100", skills: ["Patents", "Trademarks", "Copyright"], jobs: 34, location: "Cape Town, South Africa", description: "Specialized IP attorney protecting your intellectual property." },
    { name: "Refilwe Mabaso", slug: toSlug("Refilwe Mabaso"), title: "Legal Consultant", rating: "4.6", rate: "70", skills: ["Legal Advisory", "Compliance"], jobs: 67, location: "Johannesburg, South Africa", description: "Knowledgeable legal consultant providing strategic advice." },
    { name: "Efua Antwi", slug: toSlug("Efua Antwi"), title: "Paralegal", rating: "4.5", rate: "40", skills: ["Legal Research", "Documentation"], jobs: 156, location: "Accra, Ghana", description: "Efficient paralegal supporting legal operations." },
    { name: "Omar Farouk", slug: toSlug("Omar Farouk"), title: "Compliance Officer", rating: "4.7", rate: "65", skills: ["Regulatory Compliance", "Risk Management"], jobs: 78, location: "Cairo, Egypt", description: "Vigilant compliance officer ensuring regulatory adherence." },
  ],
  hr: [
    { name: "Ngozi Obi", slug: toSlug("Ngozi Obi"), title: "HR Manager", rating: "4.7", rate: "50", skills: ["HR Strategy", "Employee Relations"], jobs: 89, location: "Lagos, Nigeria", description: "Strategic HR manager building strong workplace cultures." },
    { name: "Mercy Wambui", slug: toSlug("Mercy Wambui"), title: "Recruiter", rating: "4.6", rate: "40", skills: ["Talent Acquisition", "Sourcing"], jobs: 178, location: "Nairobi, Kenya", description: "Expert recruiter finding the best talent for your team." },
    { name: "Nosipho Cele", slug: toSlug("Nosipho Cele"), title: "Training Specialist", rating: "4.8", rate: "55", skills: ["L&D", "Training Design", "Facilitation"], jobs: 67, location: "Cape Town, South Africa", description: "Skilled training specialist developing employee capabilities." },
    { name: "Abena Poku", slug: toSlug("Abena Poku"), title: "Payroll Expert", rating: "4.5", rate: "35", skills: ["Payroll Processing", "Compliance"], jobs: 134, location: "Accra, Ghana", description: "Accurate payroll expert managing compensation and benefits." },
    { name: "Sandrine Ingabire", slug: toSlug("Sandrine Ingabire"), title: "HR Consultant", rating: "4.7", rate: "60", skills: ["HR Advisory", "Policy Development"], jobs: 56, location: "Kigali, Rwanda", description: "Experienced HR consultant optimizing people operations." },
    { name: "Bongani Zulu", slug: toSlug("Bongani Zulu"), title: "Talent Acquisition Lead", rating: "4.8", rate: "45", skills: ["Recruiting", "Employer Branding"], jobs: 98, location: "Johannesburg, South Africa", description: "Strategic talent acquisition specialist building winning teams." },
  ],
  engineering: [
    { name: "Ikenna Okoro", slug: toSlug("Ikenna Okoro"), title: "Civil Engineer", rating: "4.8", rate: "70", skills: ["Structural Design", "AutoCAD", "Project Management"], jobs: 78, location: "Lagos, Nigeria", description: "Professional civil engineer designing safe infrastructure." },
    { name: "David Odhiambo", slug: toSlug("David Odhiambo"), title: "Architect", rating: "4.9", rate: "80", skills: ["Architecture", "3D Modeling", "Design"], jobs: 56, location: "Nairobi, Kenya", description: "Creative architect designing inspiring spaces." },
    { name: "Pieter van der Berg", slug: toSlug("Pieter van der Berg"), title: "Structural Engineer", rating: "4.7", rate: "75", skills: ["Structural Analysis", "Steel Design"], jobs: 45, location: "Cape Town, South Africa", description: "Expert structural engineer ensuring building safety." },
    { name: "Kwabena Amoah", slug: toSlug("Kwabena Amoah"), title: "MEP Engineer", rating: "4.6", rate: "65", skills: ["HVAC", "Electrical", "Plumbing"], jobs: 67, location: "Accra, Ghana", description: "Skilled MEP engineer optimizing building systems." },
    { name: "Tarek Mahmoud", slug: toSlug("Tarek Mahmoud"), title: "CAD Specialist", rating: "4.5", rate: "45", skills: ["AutoCAD", "Revit", "Drafting"], jobs: 123, location: "Cairo, Egypt", description: "Precise CAD specialist creating detailed technical drawings." },
    { name: "Fatima Zahra", slug: toSlug("Fatima Zahra"), title: "Interior Designer", rating: "4.8", rate: "55", skills: ["Interior Design", "Space Planning"], jobs: 89, location: "Casablanca, Morocco", description: "Talented interior designer creating beautiful spaces." },
  ],
  writing: [
    { name: "Chioma Ekezie", slug: toSlug("Chioma Ekezie"), title: "Content Writer", rating: "4.7", rate: "35", skills: ["Blog Writing", "SEO Content", "Research"], jobs: 234, location: "Lagos, Nigeria", description: "Versatile content writer creating engaging written content." },
    { name: "Brian Mutua", slug: toSlug("Brian Mutua"), title: "Copywriter", rating: "4.8", rate: "45", skills: ["Ad Copy", "Sales Pages", "Brand Voice"], jobs: 167, location: "Nairobi, Kenya", description: "Persuasive copywriter driving conversions through words." },
    { name: "Michelle Botha", slug: toSlug("Michelle Botha"), title: "Technical Writer", rating: "4.6", rate: "50", skills: ["Documentation", "API Docs", "User Guides"], jobs: 89, location: "Cape Town, South Africa", description: "Clear technical writer simplifying complex information." },
    { name: "Nana Agyemang", slug: toSlug("Nana Agyemang"), title: "Translator", rating: "4.9", rate: "40", skills: ["Translation", "Localization", "Proofreading"], jobs: 145, location: "Accra, Ghana", description: "Accurate translator bridging language barriers." },
    { name: "Clarisse Umutoni", slug: toSlug("Clarisse Umutoni"), title: "Editor", rating: "4.7", rate: "38", skills: ["Editing", "Proofreading", "Style Guide"], jobs: 112, location: "Kigali, Rwanda", description: "Meticulous editor polishing content to perfection." },
    { name: "Lindiwe Mbeki", slug: toSlug("Lindiwe Mbeki"), title: "Ghostwriter", rating: "4.8", rate: "55", skills: ["Book Writing", "Articles", "Speeches"], jobs: 78, location: "Johannesburg, South Africa", description: "Talented ghostwriter bringing your ideas to life." },
  ],
  admin: [
    { name: "Funke Adebayo", slug: toSlug("Funke Adebayo"), title: "Virtual Assistant", rating: "4.6", rate: "25", skills: ["Admin Support", "Scheduling", "Email"], jobs: 345, location: "Lagos, Nigeria", description: "Reliable virtual assistant managing your daily tasks." },
    { name: "Lucy Njoroge", slug: toSlug("Lucy Njoroge"), title: "Data Entry Specialist", rating: "4.5", rate: "20", skills: ["Data Entry", "Excel", "Accuracy"], jobs: 456, location: "Nairobi, Kenya", description: "Accurate data entry specialist handling high-volume data." },
    { name: "Thandiwe Ngwenya", slug: toSlug("Thandiwe Ngwenya"), title: "Customer Support Specialist", rating: "4.7", rate: "28", skills: ["Customer Service", "Problem Solving"], jobs: 289, location: "Cape Town, South Africa", description: "Friendly customer support specialist ensuring satisfaction." },
    { name: "Akua Sarpong", slug: toSlug("Akua Sarpong"), title: "Executive Assistant", rating: "4.8", rate: "40", skills: ["Executive Support", "Travel Planning"], jobs: 98, location: "Accra, Ghana", description: "Professional executive assistant supporting leadership." },
    { name: "Layla Ibrahim", slug: toSlug("Layla Ibrahim"), title: "Project Coordinator", rating: "4.6", rate: "35", skills: ["Project Management", "Coordination"], jobs: 134, location: "Cairo, Egypt", description: "Organized project coordinator keeping teams on track." },
    { name: "Salma Benjelloun", slug: toSlug("Salma Benjelloun"), title: "Office Manager", rating: "4.7", rate: "45", skills: ["Office Management", "Operations"], jobs: 87, location: "Casablanca, Morocco", description: "Efficient office manager streamlining operations." },
  ],
};

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getWorkerBySlug(categoryId: string, workerSlug: string): Worker | undefined {
  const workers = workersByCategory[categoryId];
  if (!workers) return undefined;
  return workers.find(w => w.slug === workerSlug);
}

export const profileImage = "https://i.pinimg.com/1200x/bb/6a/ef/bb6aef8c1bd48cd8b3b41725eaba18e3.jpg";
