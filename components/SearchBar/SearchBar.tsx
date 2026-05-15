"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./SearchBar.css";
import CustomSelect from "./CustomSelect";
import {
  buildJobsSearchUrl,
  EXPERIENCE_FILTER_OPTIONS,
  JOB_TYPE_FILTER_OPTIONS,
} from "@/lib/jobSearchParams";

function SearchBar() {
  const router = useRouter();
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    router.push(
      buildJobsSearchUrl({
        skills,
        experience,
        jobType,
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section id="search-section" className="search-container">
      <div className="search-content">
        <h2 className="search-title">Find your dream Jobs now</h2>
        <p className="search-subtitle">1000+ jobs for you to explore</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <CustomSelect
            options={[...EXPERIENCE_FILTER_OPTIONS]}
            placeholder="Select experience level"
            onChange={setExperience}
          />
          <CustomSelect
            options={[...JOB_TYPE_FILTER_OPTIONS]}
            placeholder="Select job type"
            onChange={setJobType}
          />

          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
