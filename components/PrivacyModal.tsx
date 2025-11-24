"use client";


import { styled } from "@mui/material/styles";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ open, onClose }: PrivacyModalProps) => {
  if (!open) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Privacy Policy</ModalTitle>

        <ModalContent>
          <p>
            Ogera values your privacy. This Privacy Policy explains how we collect, store,
            and use your personal information.
          </p>

          <h3>1. What Data We Collect</h3>
          <p>
            We collect your name, email, mobile number, academic details, and job activity.
          </p>

          <h3>2. Why We Collect It</h3>
          <p>To provide job matching, improve platform quality, and secure your account.</p>

          <h3>3. Data Security</h3>
          <p>Your information is stored using encryption and secure servers.</p>

          <h3>4. Sharing Information</h3>
          <p>
            Your data is never sold. We only share it with employers when necessary for job
            applications.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You can request deletion, correction, or export of your data at any time by
            contacting support.
          </p>
        </ModalContent>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalBox>
    </Backdrop>
  );
};

export default PrivacyModal;

/* -------------------- STYLES -------------------- */

const Backdrop = styled("div")`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalBox = styled("div")`
  width: 600px;
  max-height: 80vh;
  background: white;
  padding: 25px;
  border-radius: 12px;
  overflow-y: auto;
`;

const ModalTitle = styled("h2")`
  font-size: 22px;
  font-weight: 700;
`;

const ModalContent = styled("div")`
  font-size: 14px;
  line-height: 1.6;
  color: #444;

  h3 {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const CloseButton = styled("button")`
  margin-top: 20px;
  background: #7f56d9;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
