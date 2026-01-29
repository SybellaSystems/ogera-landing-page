"use client";

import { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({ options, placeholder, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={`custom-select-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? 'has-value' : 'placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`custom-select-arrow ${isOpen ? 'open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7F56D9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <div className="custom-select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-select-option ${selected?.value === option.value ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
