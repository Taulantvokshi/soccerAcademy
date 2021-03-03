import React from "react";
import "./RegisterModal.scss";
const RegisterModal = ({ message }) => {
  return (
    <div className="registerModal">
      <p style={{ color: message.startsWith("An") ? "red" : "green" }}>
        {message}
      </p>
    </div>
  );
};

export default RegisterModal;
