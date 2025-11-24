"use client";


import { styled } from "@mui/material/styles";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal = ({ open, onClose }: TermsModalProps) => {
  if (!open) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Terms of Service</ModalTitle>

        <ModalContent>
          <p>
            Welcome to Ogera. By using our platform, you agree to comply with the following
            Terms of Service. These terms govern your usage of job listings, applications,
            academic tracking, and any features available in the application.
          </p>

          <h3>1. User Responsibilities</h3>
          <p>
            Users must provide accurate and genuine information. Providing misleading or
            fake data may result in account suspension.
          </p>

          <h3>2. Platform Usage</h3>
          <p>
            You agree not to misuse the platform or engage in harmful activities or abuse.
          </p>

          <h3>3. Payments</h3>
          <p>
            Payments are handled by third-party mobile money services. Ogera does not handle
            payment disputes.
          </p>

          <h3>4. Account Security</h3>
          <p>You are responsible for keeping your login credentials secure.</p>

          <h3>5. Violations</h3>
          <p>
            Ogera may suspend or terminate accounts violating platform rules without notice.
          </p>
        </ModalContent>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalBox>
    </Backdrop>
  );
};

export default TermsModal;

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
