import React from "react";
import { Link } from "react-router-dom";
const DesktopNav = () => {
  return (
    <nav className="header_navbar">
      <Link to="/" className="header_navbar-items">
        ACADEMY
      </Link>
      <Link to="/" className="header_navbar-items">
        PROGRAMS
      </Link>
      <Link to="/" className="header_navbar-items">
        COACHING STAFF
      </Link>
      <Link to="/register" className="header_navbar-items nav-item-4 prim-btn">
        REGISTER
      </Link>
    </nav>
  );
};

export default DesktopNav;
