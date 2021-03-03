import React, { useRef } from "react";
import { DesktopNav, MobileNav } from "../exports";
import ResizeObserverHook from "../hooks/ResizeObserver";
import { RegisterIlustration, MobileRegisterIlustration } from "../Icons";
import { Link } from "react-router-dom";
import "./RegisterHeader.scss";

const RegisterHeader = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to(".header", { opacity: 1, duration: 0.5 });
    gsap.timeline().to(".header_logo", { opacity: 1, y: 0, duration: 1 });
  }, []);
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
      <Link to="/" className="header_logo">
        <img src="images/logo2x.png" />
      </Link>
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
