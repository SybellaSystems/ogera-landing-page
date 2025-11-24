"use client";


import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-container">
      <h2 className="search-title">Find your dream Jobs now</h2>
      <p className="search-subtitle">1000+ jobs for you to explore</p>

      <div className="search-box">
        <input type="text" placeholder="Enter skills" />
        <select>
          <option>Select experiences</option>
        </select>
        <select>
          <option>Select Jobtype</option>
        </select>

        <button className="search-btn">Search</button>
      </div>
    </section>
  );
}

export default SearchBar;
