import React from "react";

const Informations = () => {
  return (
    <div className="footer_info">
      <div className="footer_info-title">Contact us</div>
      <div className="footer_info-inf">
        <img className="footer_info-inf--logo" src="images/location.svg" />
        <div className="footer_info-inf--text">
          57 Barbara Street Staten Island, NY 10306
        </div>
      </div>

      <div className="footer_info-inf">
        <img className="footer_info-inf--logo" src="images/mail.svg" />
        <div className="footer_info-inf--text">
          registration@ab7socceracademy.com
        </div>
      </div>
      <div className="footer_info-inf">
        <img className="footer_info-inf--logo" src="images/cell.svg" />
        <div className="footer_info-inf--text">(929) 503-1788</div>
      </div>

      <div className="footer_info-inf">
        <img className="footer_info-inf--logo" src="images/cell.svg" />
        <div className="footer_info-inf--text">(347) 990-5252</div>
      </div>

      <div className="footer_info-inf">
        <div className="footer_info-inf--button sec-btn">Register Today</div>
      </div>
    </div>
  );
};

export default Informations;
