import React, { useRef } from "react";
import { DesktopNav, MobileNav } from "../exports";
import ResizeObserverHook from "../hooks/ResizeObserver";
import { RegisterIlustration, MobileRegisterIlustration } from "../Icons";
import "./RegisterHeader.scss";

const RegisterHeader = () => {
  const navbarRef = useRef();
  const dimensions = ResizeObserverHook(navbarRef);
  return (
    <div ref={navbarRef} className="register-header">
      {dimensions && dimensions.width < 500 ? (
        <MobileRegisterIlustration />
      ) : (
        <RegisterIlustration />
      )}
      {dimensions && dimensions.width < 944 ? <MobileNav /> : <DesktopNav />}
      <div className="header_logo">
        <img src="images/logo2x.png" />
      </div>
      <div className="register-header-container">
        <div className="register-header-container_title">
          AB7 Soccer Academy
        </div>
        <div className="register-header-container_text">
          Welcome to Registration Center
        </div>
      </div>
    </div>
  );
};

export default RegisterHeader;
