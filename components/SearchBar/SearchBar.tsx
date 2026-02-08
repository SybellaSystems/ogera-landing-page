"use client";

import "./SearchBar.css";
import CustomSelect from "./CustomSelect";

const experienceOptions = [
  { value: "0", label: "0 years" },
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "4", label: "4 years" },
];

const jobTypeOptions = [
  { value: "freelance", label: "Freelance" },
  { value: "parttime", label: "Part-time" },
  { value: "internship", label: "Internship" },
  { value: "ogerawin", label: "Ogerawin" },
];

function SearchBar() {
  return (
    <section id="search-section" className="search-container">

      <div className="search-content">
        <h2 className="search-title">Find your dream Jobs now</h2>
        <p className="search-subtitle">1000+ jobs for you to explore</p>

      <div className="search-box">
        <input type="text" placeholder="Enter skills" />
        <CustomSelect
          options={experienceOptions}
          placeholder="Select experiences"
        />
        <CustomSelect
          options={jobTypeOptions}
          placeholder="Select Jobtype"
        />

        <button className="search-btn">Search</button>
      </div>
      </div>
    </section>
  );
}

export default SearchBar;
