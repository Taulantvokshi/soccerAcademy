/* eslint-disable complexity */
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const input = useRef();
  const [clicked, setClicked] = useState(false);
  const [animation, setAnimation] = useState();
  const location = useLocation();

  useEffect(() => {
    const animate = gsap.timeline().to(".m_nav_logos", { opacity: 1, y: 0 });
    animate.pause();
    setAnimation(animate);
  }, []);

  const container = {
    opacity: clicked ? "1" : "0",
    visibility: clicked ? "visible" : "hidden",
    width: clicked ? "100%" : "0",
  };
  const background = {
    transform: clicked ? "scale(200)" : "scale(1)",
    visibility: clicked ? "visible" : "hidden",
  };
  const list = {
    opacity: clicked ? "1" : "0",
  };

  const handleClick = () => {
    input.current.click();
    setClicked((prew) => !prew);
    if (clicked) {
      animation.reverse();
    } else {
      animation.play();
    }
  };

  return (
    <div className="m_nav">
      <input ref={input} className="m_nav_checkbox" type="checkbox" />

      <div onClick={handleClick} className="m_nav_button">
        <span className="m_nav_button-icon" />
      </div>

      <Link to="/register" className="m_nav_register">
        REGISTER
      </Link>

      <div style={background} className="m_nav_background" />

      <div style={container} className="m_nav_container">
        <img className="m_nav_logos" src="images/logo2x.png" />
        <div style={list} className="m_nav_container-list">
          <Link to="/" className="m_nav_container-list-li">
            <p>ACADEMY</p>
          </Link>
          <Link to="/" className="m_nav_container-list-li">
            <p>PROGRAMS</p>
          </Link>
          <Link to="/" className="m_nav_container-list-li">
            <p>COACHING STAFF</p>
          </Link>
        </div>

        <div className="mob_info">
          <div className="mob_info-contact">Contact us</div>
          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/location.svg" />
            <a
              href="https://www.google.com/maps/place/57+Barbara+St,+Staten+Island,+NY+10306/@40.5690511,-74.1330047,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24bfb43871ea9:0xa30a2d2b2a3d42f5!8m2!3d40.569047!4d-74.130816"
              target="_blank"
              rel="noopener noreferrer"
              className="mob_info-icons-text"
            >
              57 Barbara Street Staten Island, NY 10306
            </a>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/mail.svg" />
            <a
              href="mailto:ansi@ab7socceracademy.com"
              className="mob_info-icons-text"
            >
              registration@ab7socceracademy.com
            </a>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/cell.svg" />
            <a href="tel:9295031788" className="mob_info-icons-text">
              (929) 503-1788
            </a>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/cell.svg" />
            <a href="tel:3479905252" className="mob_info-icons-text">
              (347) 990-5252
            </a>
          </div>

          <div className="mob_info-icons special-case">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ab7socceracademy/?igshid=ai2kbjypxyc3"
            >
              <img src="images/ig-icon.svg" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/AB7SoccerAcademy-104734771509976"
            >
              <img src="images/fb-icon.svg" />
            </a>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default MobileNav;
