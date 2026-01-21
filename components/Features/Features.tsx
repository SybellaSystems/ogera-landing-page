"use client";


import "./Features.css";

function Features() {
  const features = [
    {
      title: "Minimal fee",
      text: "Pay minimal service fees for every job you get hired for."
    },
    {
      title: "Genuine jobs",
      text: "We verify every posted job for legitimacy to keep you safe."
    },
    {
      title: "Global Hiring",
      text: "Get hired by companies around the world without relocation."
    }
  ];

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="trustscore" className="features">
      <div className="features-left">
        <h2>Find your dream job, in your career path</h2>
        <p>
          Using our remote platform, you can search and apply to legitimate
          jobs at global companies while keeping your search organized.
        </p>
        <button className="features-btn" onClick={scrollToSearch}>Get started</button>
      </div>

      <div className="features-right">
        {features.map((f, i) => (
          <div key={i} className="feature-block">
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
