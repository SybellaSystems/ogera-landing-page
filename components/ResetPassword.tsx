"use client";


import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../assets/Logo.png";
import Button from "../components/button";

type InputField = {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | boolean;
  names?: string[];
  values?: string[];
};

interface RestPasswordTemplateProps {
  heading: string;
  subHeading: string;
  fields: InputField[];
  buttonText?: string;
  showResend?: boolean;
  disabled?: boolean;
}

const RestPasswordTemplate: React.FC<RestPasswordTemplateProps> = ({
  heading,
  subHeading,
  fields,
  buttonText = "Submit",
  showResend = false,
  disabled = false,
}) => {
  return (
    <PassMainContainer>
      <BoxContainer>
        <Logo />
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>

        {fields.map((field, index) => (
          <DynamicBox key={field.name || field.type || index}>
            {field.type !== "otp" && field.label && <Label>{field.label}</Label>}

            {field.type === "otp" ? (
              <>
                <OtpContainer>
                  {field.names?.map((name, i) => (
                    <OtpInput
                      key={name}
                      name={name}
                      value={field.values?.[i] || ""}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      maxLength={1}
                      inputMode="numeric"
                    />
                  ))}
                </OtpContainer>
                {!!field.error && <ErrorText>{String(field.error)}</ErrorText>}
              </>
            ) : (
              <>
                <Input
                  name={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder || ""}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
                {!!field.error && <ErrorText>{String(field.error)}</ErrorText>}
              </>
            )}
          </DynamicBox>
        ))}

        <Button
          backgroundcolor="#7f56d9"
          type="submit"
          text={buttonText}
          disabled={disabled}
        />

        {showResend && (
          <ResendClick>
            If you don't receive a code! <span>Resend</span>
          </ResendClick>
        )}
      </BoxContainer>
    </PassMainContainer>
  );
};

export default RestPasswordTemplate;

/* styles */
const PassMainContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
}));

const BoxContainer = styled("div")(({ theme }) => ({
  width: "35%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "15px",
}));

const Logo = styled("div")`
  background: url(${logo}) no-repeat center;
  background-size: contain;
  height: 40px;
  width: 120px;
  align-self: center;
`;

const Heading = styled("h1")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

const SubHeading = styled("h2")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

const DynamicBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Label = styled("label")(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.text.primary,
}));

const Input = styled("input")(({ theme }) => ({
  padding: "12px",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.divider}`,
  fontSize: "14px",
}));

const OtpContainer = styled("div")({
  display: "flex",
  gap: "12px",
  justifyContent: "center",
});

const OtpInput = styled("input")(({ theme }) => ({
  width: "50px",
  height: "50px",
  fontSize: "18px",
  textAlign: "center",
  borderRadius: "8px",
  border: `2px solid ${theme.palette.divider}`,
  outline: "none",
}));

const ResendClick = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontSize: "14px",
  color: theme.palette.text.secondary,
  marginTop: "10px",
  "& span": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const ErrorText = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "12px",
  marginTop: "4px",
}));
