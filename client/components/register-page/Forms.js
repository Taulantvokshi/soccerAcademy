/* eslint-disable max-statements */
/* eslint-disable quotes */
/* eslint-disable no-return-assign */
/* eslint-disable complexity */
import React, { useState, useRef, useEffect } from "react";
import { ArrowDown } from "../../Icons";
import { formSwitch, isValidPhone, isValidEmail } from "./FormUtil";
import axios from "axios";
import "./Forms.scss";
const Forms = () => {
  const circle = useRef();
  const checkbox = useRef();
  const nameRef = useRef();
  const birthDateRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipcodeRef = useRef();
  const aggreeText = useRef();

  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Group Soccer Academy Program");
  const [textArea, setTextArea] = useState("");
  const [address, setAddress] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const handleClick = () => {
    checkbox.current.click();
    setClicked(checkbox.current.checked);
    circle.current.style.border = "3px solid #0e285d";
    aggreeText.current.style.color = "black";
  };
  const handleSubmit = () => {
    let requiredFeilds = true;
    if (!name.length) {
      nameRef.current.placeholder = "Enter Name Please";
      nameRef.current.style.border = "2px solid red";
      nameRef.current.value = "";
      requiredFeilds = false;
    } else {
      nameRef.current.style.border = "none";
    }
    if (!birthDate.length) {
      birthDateRef.current.style.border = "2px solid red";
      requiredFeilds = false;
    } else {
      birthDateRef.current.style.border = "none";
    }
    if (!isValidPhone(phone)) {
      phoneRef.current.placeholder = "Enter Valid Phone Number";
      phoneRef.current.style.border = "2px solid red";
      phoneRef.current.value = "";
      requiredFeilds = false;
    } else {
      phoneRef.current.style.border = "none";
    }
    if (!isValidEmail(email)) {
      emailRef.current.placeholder = "Enter Valid Email";
      emailRef.current.style.border = "2px solid red";
      emailRef.current.value = "";
      requiredFeilds = false;
    } else {
      emailRef.current.style.border = "none";
    }

    if (!address.length) {
      addressRef.current.style.border = "2px solid red";
      addressRef.current.placeholder = "No empty Address Feild";
      requiredFeilds = false;
    } else {
      addressRef.current.style.border = "none";
    }

    if (!city.length) {
      cityRef.current.style.border = "2px solid red";
      cityRef.current.placeholder = "Enter City";
      requiredFeilds = false;
    } else {
      cityRef.current.style.border = "none";
    }

    if (!state.length) {
      stateRef.current.style.border = "2px solid red";
      stateRef.current.placeholder = "Enter State";
      requiredFeilds = false;
    } else {
      stateRef.current.style.border = "none";
    }

    if (!zipcode.length) {
      zipcodeRef.current.style.border = "2px solid red";
      zipcodeRef.current.placeholder = "Enter Valid Zip Code";
      requiredFeilds = false;
    } else {
      zipcodeRef.current.style.border = "none";
    }

    // if (!requiredFeilds) return;
    if (clicked) {
      aggreeText.current.style.color = "black";
      circle.current.style.border = "3px solid #0e285d";
      setClicked(false);
      setName("");
      setBirthDate("");
      setPhone("");
      setEmail("");
      setProgram("");
      setTextArea("");
      setAddress("");
      setAddressLine("");
      setCity("");
      setZipCode("");
      setState("");

      axios
        .post("https://6qe23rcync.execute-api.us-east-1.amazonaws.com/Prod", {
          body: { name: "Yamahaa" },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      aggreeText.current.style.color = "red";
      circle.current.style.border = "3px solid red";
    }
  };

  return (
    <div className="forms">
      <div className="forms_player">
        <div className="forms_player-inputs input-1">
          <label className="form-label">
            Player Name <span>*</span>
          </label>
          <input
            onFocus={(e) => (e.target.placeholder = "Enter Name")}
            maxLength="100"
            ref={nameRef}
            placeholder="Full Name"
            className="input-style"
            value={name}
            onChange={(e) => formSwitch(e, "name", setName)}
          />
        </div>

        <div className="forms_player-inputs input-2">
          <label className="form-label">
            Player’s date of birth <span>*</span>
          </label>
          <input
            maxLength="100"
            ref={birthDateRef}
            type="date"
            placeholder="mm/dd/yyyy"
            className="input-style"
            value={birthDate}
            onChange={(e) => formSwitch(e, "birthDate", setBirthDate)}
          />
        </div>

        <div className="forms_player-inputs input-3">
          <label className="form-label">
            Phone <span>*</span>
          </label>
          <input
            maxLength="100"
            onFocus={(e) => (e.target.placeholder = "Phone")}
            ref={phoneRef}
            placeholder="Phone"
            className="input-style"
            onChange={(e) => formSwitch(e, "phone", setPhone)}
            value={phone}
          />
        </div>

        <div className="forms_player-inputs input-3">
          <label className="form-label">
            Email <span>*</span>
          </label>
          <input
            maxLength="100"
            onFocus={(e) => (e.target.placeholder = "this@example.com")}
            ref={emailRef}
            placeholder="this@example.com"
            className="input-style"
            value={email}
            onChange={(e) => formSwitch(e, "email", setEmail)}
          />
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
          <label className="form-label">Why do you like soccer?</label>
          <textarea
            maxLength="4000"
            value={textArea}
            onChange={(e) => formSwitch(e, "textArea", setTextArea)}
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
          <input
            maxLength="100"
            ref={addressRef}
            placeholder="Street Address"
            className="input-style"
            value={address}
            onChange={(e) => formSwitch(e, "address", setAddress)}
            onFocus={(e) => (e.target.placeholder = "Street Address")}
          />
        </div>
        <input
          maxLength="100"
          placeholder="Street Address Line 2 (Optional)"
          className="input-style"
          value={addressLine}
          onChange={(e) => formSwitch(e, "addressLine", setAddressLine)}
        />
        <input
          maxLength="100"
          ref={cityRef}
          placeholder="City"
          value={city}
          onChange={(e) => formSwitch(e, "city", setCity)}
          onFocus={(e) => (e.target.placeholder = "City")}
          className="input-style"
        />
        <input
          maxLength="100"
          ref={stateRef}
          placeholder="State"
          value={state}
          onChange={(e) => formSwitch(e, "state", setState)}
          onFocus={(e) => (e.target.placeholder = "State")}
          className="input-style"
        />
        <input
          maxLength="100"
          ref={zipcodeRef}
          placeholder="Zip Code"
          value={zipcode}
          onChange={(e) => formSwitch(e, "zipCode", setZipCode)}
          onFocus={(e) => (e.target.placeholder = "Zip Code")}
          className="input-style"
        />
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
        <div
          ref={circle}
          onClick={handleClick}
          className="forms_agreement-icon"
        >
          <input hidden ref={checkbox} type="checkbox" />
          <div style={{ display: !clicked ? "none" : "inline-block" }} />
        </div>
        <div ref={aggreeText} className="forms_agreement-text">
          By clicking this button I agree to the above waiver<span>*</span>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="forms_submit sec-btn"
      >
        Submit
      </button>
    </div>
  );
};

export default Forms;
