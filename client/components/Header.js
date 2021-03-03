import React, { useRef } from "react";
import "./Header.scss";
import { MobileNav, DesktopNav } from "../exports";
import { HeaderIlustaration } from "../Icons";
import ResizeObserverHook from "../hooks/ResizeObserver";
import "./MobileHeader.scss";
const Header = () => {
  const navbarRef = useRef();
  const dimensions = ResizeObserverHook(navbarRef);
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to(".header", { opacity: 1, duration: 0.5 });
    gsap.timeline().to(".header_logo", { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section ref={navbarRef} className="header">
      <HeaderIlustaration />
      {dimensions && dimensions.width < 944 ? <MobileNav /> : <DesktopNav />}
      <div className="header_logo">
        <img src="images/logo2x.png" />
      </div>
      <div className="header_display">
        <div className="header_display-info">
          <p className="header_display-info--title">AB7 Soccer Academy</p>
          <p className="header_display-info--msg">
            Our goal is to transmit <br /> our experience to youth soccer
            players.
          </p>
          <a
            href="https://macronstorect.tuosystems.com/stores/ab7"
            className="prim-btn header_display-info--btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop for gears
          </a>
        </div>
        <div className="header_display-player">
          <img src="images/silo-1@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Header;
