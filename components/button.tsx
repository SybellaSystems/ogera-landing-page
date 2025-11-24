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
  padding: 12px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;

  &:hover:enabled {
    background-color: #6e48c7;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
