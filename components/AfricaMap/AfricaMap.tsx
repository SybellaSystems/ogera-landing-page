"use client";

import Africa from "@react-map/africa";
import "./AfricaMap.css";

export default function AfricaMap() {
  return (
    <div className="africa-map-wrapper">
      <div className="africa-map-container">
        <Africa
          type="select-single"
          mapColor="#7F56D9"
          strokeColor="rgba(255,255,255,0.35)"
          strokeWidth={0.5}
          hoverColor="#9B7FCC"
          selectColor="#5B3BA5"
          hints
          hintTextColor="#2d2252"
          hintBackgroundColor="rgba(255,255,255,0.95)"
          hintBorderRadius={8}
          hintPadding="8px 14px"
          disableClick
        />
      </div>
    </div>
  );
}
