import React from "react";
import "./index.scss";
import {
  Coaching,
  Programs,
  Students,
  Traning,
  Carosel,
  SocialMedia,
} from "../../exports";
const HomePage = () => {
  return (
    <div className="homepage">
      <Coaching />
      <Programs />
      <Students />
      <Traning />
      <Carosel />
      <SocialMedia />
      <div className="logo_component">
        <img className="footer_logo" src="images/logo.png" />
      </div>
    </div>
  );
};

export default HomePage;
