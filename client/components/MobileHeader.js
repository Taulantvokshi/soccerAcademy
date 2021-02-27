/* eslint-disable complexity */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const input = useRef();
  const [clicked, setClicked] = useState(false);
  const [animation, setAnimation] = useState();

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

      <div className="m_nav_register">REGISTER</div>

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
            <div className="mob_info-icons-text">
              57 Barbara Street Staten Island, NY 10306
            </div>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/mail.svg" />
            <div className="mob_info-icons-text">
              registration@ab7socceracademy.com
            </div>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/cell.svg" />
            <div className="mob_info-icons-text">(929) 503-1788</div>
          </div>

          <div className="mob_info-icons">
            <img className="mob_info-icons-icon" src="images/cell.svg" />
            <div className="mob_info-icons-text">(347) 990-5252</div>
          </div>

          <div className="mob_info-icons special-case">
            <img src="images/ig-icon.svg" />
            <img src="images/fb-icon.svg" />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default MobileNav;
