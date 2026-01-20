"use client";


import "./SearchBar.css";

function SearchBar() {
  return (
    <section id="search-section" className="search-container">
      <h2 className="search-title">Find your dream Jobs now</h2>
      <p className="search-subtitle">1000+ jobs for you to explore</p>

      <div className="search-box">
        <input type="text" placeholder="Enter skills" />
        <select>
          <option>Select experiences</option>
          <option value="0">0 years</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
        </select>
        <select>
          <option>Select Jobtype</option>
          <option value="freelance">Freelance</option>
          <option value="parttime">Part-time</option>
          <option value="internship">Internship</option>
          <option value="ogerawin">Ogerawin</option>
        </select>

        <button className="search-btn">Search</button>
      </div>
    </section>
  );
}

export default SearchBar;
