import ReactDom from "react-dom";
import React from "react";
import "./Modal.scss";
const Modal = ({ isOpen, children, closeModal }) => {
  const MODAL_STYLES = {
    alignItems: "center",
    scrollBehavior: "smooth",
  };

  const root = document.querySelector("body");

  if (!isOpen) {
    root.style.overflow = "visible";
    root.style.position = "relative";
    return null;
  }
  root.style.width = "100vw";
  root.style.height = "100vh";
  root.style.overflow = "hidden";
  root.style.position = "fixed";

  return ReactDom.createPortal(
    <div
      onClick={() => closeModal(false)}
      style={MODAL_STYLES}
      className="base_modal"
    >
      {children}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
