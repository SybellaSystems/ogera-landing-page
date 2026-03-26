"use client";

import Africa from "@react-map/africa";
import "./AfricaMap.css";

export default function AfricaMap() {
  return (
    <div className="africa-map-wrapper">
      <div className="africa-map-container">
        <Africa
          type="select-single"
          mapColor="#2b6cb0"                  // Brand primary blue
          strokeColor="rgba(255,255,255,0.3)" // Soft white borders
          strokeWidth={0.8}                   // Visible borders
          hoverColor="#5a90d1"                // Brighter hover
          selectColor="#1e4a7d"               // Darker blue for selection
          hints
          hintTextColor="#ffffff"              // White hint text
          hintBackgroundColor="rgba(43,108,176,0.95)" // Semi-transparent brand
          hintBorderRadius={10}                // Rounded hint box
          hintPadding="10px 16px"              // Comfortable padding
          disableClick
        />
      </div>
    </div>
  );
}