/* eslint-disable complexity */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const input = useRef();

  const [clicked, setClicked] = useState(false);
  const container = {
    opacity: clicked ? '1' : '0',
    visibility: clicked ? 'visible' : 'hidden',
    width: clicked ? '100%' : '0',
  };
  const background = {
    transform: clicked ? 'scale(200)' : 'scale(1)',
    visibility: clicked ? 'visible' : 'hidden',
  };
  const list = {
    opacity: clicked ? '1' : '0',
  };

  const handleClick = () => {
    input.current.click();
    setClicked((prew) => !prew);
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
        <div style={list} className="m_nav_container-list">
          <Link
            to="/"
            onClick={handleClick}
            className="m_nav_container-list-li"
          >
            ACCOUNT
          </Link>
          <Link
            to="/"
            onClick={handleClick}
            className="m_nav_container-list-li"
          >
            EXPLORE
          </Link>
          <Link
            to="/about"
            onClick={handleClick}
            className="m_nav_container-list-li"
          >
            ABOUT
          </Link>

          <Link
            to="/signin"
            onClick={handleClick}
            className="m_nav_container-list-li"
          >
            LOGIN
          </Link>
          <Link
            onClick={handleClick}
            style={{ marginTop: '4rem' }}
            to="/"
            className="upload-l m_nav_container-list-li"
          >
            UPLOAD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
