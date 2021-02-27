import React, { useRef } from 'react';
import './Header.scss';
import { MobileNav } from '../exports';
import { HeaderIlustaration } from '../Icons';
import ResizeObserverHook from '../hooks/ResizeObserver';
import './MobileHeader.scss';
const Header = () => {
  const navbarRef = useRef();
  const dimensions = ResizeObserverHook(navbarRef);
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to('.header', { opacity: 1, duration: 0.5 });
  }, []);

  const DesktopNav = () => {
    return (
      <nav className="header_navbar">
        <div className="header_navbar-items">ACADEMY</div>
        <div className="header_navbar-items">PROGRAMS</div>
        <div className="header_navbar-items">COACHING STAFF</div>
        <div className="header_navbar-items nav-item-4 prim-btn">REGISTER</div>
      </nav>
    );
  };

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
          <div className="prim-btn header_display-info--btn">
            Shop for gears
          </div>
        </div>
        <div className="header_display-player">
          <img src="images/silo-1@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Header;
