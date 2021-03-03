import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer_main" src="images/footer-image.svg" />

      <div className="footer_info">
        <div className="footer_info-title">Contact us</div>
        <div className="footer_info-inf">
          <img className="footer_info-inf--logo" src="images/location.svg" />
          <a
            href="https://www.google.com/maps/place/57+Barbara+St,+Staten+Island,+NY+10306/@40.5690511,-74.1330047,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24bfb43871ea9:0xa30a2d2b2a3d42f5!8m2!3d40.569047!4d-74.130816"
            className="footer_info-inf--text"
            target="_blank"
            rel="noopener noreferrer"
          >
            57 Barbara Street Staten Island, NY 10306
          </a>
        </div>

        <div className="footer_info-inf">
          <img className="footer_info-inf--logo" src="images/mail.svg" />
          <a
            href="mailto:ansi@ab7socceracademy.com"
            className="footer_info-inf--text"
          >
            registration@ab7socceracademy.com
          </a>
        </div>
        <div className="footer_info-inf">
          <img className="footer_info-inf--logo" src="images/cell.svg" />
          <a href="tel:9295031788" className="footer_info-inf--text">
            (929) 503-1788
          </a>
        </div>

        <div className="footer_info-inf">
          <img className="footer_info-inf--logo" src="images/cell.svg" />
          <a href="tel:3479905252" className="footer_info-inf--text">
            (347) 990-5252
          </a>
        </div>

        <div className="footer_info-inf">
          <Link to="/register" className="footer_info-inf--button sec-btn">
            Register Today
          </Link>
        </div>
      </div>
      <img className="footer_player" src="./images/silo-2@2x.png" />
      <div className="footer_end">
        <div className="footer_end--container">
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
  );
};

export default Footer;
