import React, { useEffect } from "react";
import { Carosel, SocialMedia, Forms } from "../../exports";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Forms />
      <Carosel />
      <SocialMedia />
      <div className="logo_component">
        <img className="footer_logo" src="images/logo.png" />
      </div>
    </>
  );
};

export default RegisterPage;
