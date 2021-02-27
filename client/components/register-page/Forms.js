import React, { useState, useRef, useEffect } from "react";
import { ArrowDown } from "../../Icons";
import "./Forms.scss";
const Forms = () => {
  const checkbox = useRef();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    checkbox.current.click();
    setClicked(checkbox.current.checked);
  };

  console.log(clicked);

  return (
    <div className="forms">
      <div className="forms_player">
        <div className="forms_player-inputs input-1">
          <label className="form-label">
            Player Name <span>*</span>
          </label>
          <input placeholder="Full Name" className="input-style" />
        </div>

        <div className="forms_player-inputs input-2">
          <label className="form-label">
            Player’s date of birth <span>*</span>
          </label>
          <input type="date" placeholder="mm/dd/yyyy" className="input-style" />
        </div>

        <div className="forms_player-inputs input-3">
          <label className="form-label">
            Phone <span>*</span>
          </label>
          <input placeholder="Phone" className="input-style" />
        </div>

        <div className="forms_player-inputs input-3">
          <label className="form-label">
            Email <span>*</span>
          </label>
          <input placeholder="max@email.com" className="input-style" />
        </div>

        <div className="forms_player-inputs input-4">
          <label className="form-label">
            Choose the program <span>*</span>
          </label>
          <div placeholder="Select" id="selector" className="input-style">
            <div> Group Soccer Academy Program</div>
            <div>
              <ArrowDown />
            </div>
            {/* <div>Hidden</div> */}
          </div>
        </div>

        <div className="forms_player-inputs input-5">
          <label className="form-label">
            Why do you like soccer? <span>*</span>
          </label>
          <textarea
            placeholder="Tell us more about you and soccer?"
            className="input-style"
            rows="8"
          />
        </div>
      </div>
      <div className="forms_address">
        <div className="forms_player-inputs">
          <label className="form-label">
            Address? <span>*</span>
          </label>
          <input placeholder="Street Address" className="input-style" />
        </div>
        <input
          placeholder="Street Address Line 2 (Optional)"
          className="input-style"
        />
        <input placeholder="City" className="input-style" />
        <input placeholder="State" className="input-style" />
        <input placeholder="Zipcode" className="input-style" />
        <input placeholder="State" className="input-style" />
      </div>
      <div className="forms_terms">
        <div className="forms_terms-policy">Privacy Policy</div>
        <p className="forms_terms-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          <br /> At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt <br /> ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
          <br /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est
          <br /> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd.
        </p>
      </div>
      <div className="forms_agreement">
        <div onClick={handleClick} className="forms_agreement-icon">
          <input hidden ref={checkbox} type="checkbox" />
          <div style={{ display: !clicked ? "none" : "inline-block" }} />
        </div>
        <div className="forms_agreement-text">
          By clicking this button I agree to the above waiver<span>*</span>
        </div>
      </div>
      <div className="forms_submit sec-btn">Submit</div>
    </div>
  );
};

export default Forms;
