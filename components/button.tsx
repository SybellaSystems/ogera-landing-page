"use client";


import styled from "@emotion/styled";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  backgroundcolor?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, backgroundcolor, type = "button", ...rest }) => {
  return (
    <CTAButton type={type} backgroundcolor={backgroundcolor} {...rest}>
      {text}
    </CTAButton>
  );
};

export default Button;

const CTAButton = styled("button")<{ backgroundcolor?: string }>`
  background-color: ${(props) => props.backgroundcolor || "#7f56d9"};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;

  &:hover:enabled {
    background-color: #6e48c7;
    box-shadow: 0 6px 16px rgba(91, 59, 165, 0.35);
    transform: translateY(-1px);
  }

  &:active:enabled {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(91, 59, 165, 0.25);
  }

  &:focus-visible {
    outline: 2px solid rgba(127, 86, 217, 0.9);
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.35);
  }

  &:disabled {
    background-color: #e2e8f0;
    color: #a0aec0;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;
