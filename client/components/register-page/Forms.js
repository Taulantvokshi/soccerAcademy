/* eslint-disable max-statements */
/* eslint-disable quotes */
/* eslint-disable no-return-assign */
/* eslint-disable complexity */
import React, { useState, useRef } from "react";
import { ArrowDown } from "../../Icons";
import { Modal, RegisterModal } from "../../exports";
import {
  formSwitch,
  isValidPhone,
  isValidEmail,
  formatPhoneNumber,
} from "./FormUtil";
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
  const [program, setProgram] = useState("Group Program");
  const [textArea, setTextArea] = useState("");
  const [address, setAddress] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const [dropDown, setDropDown] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handlePrograms = (e) => {
    e.stopPropagation();
    setProgram(e.target.textContent);
    setDropDown((prew) => !prew);
  };
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

    if (!requiredFeilds) {
      window.scrollTo(0, 0);
      return;
    }
    if (clicked) {
      aggreeText.current.style.color = "black";
      circle.current.style.border = "3px solid #0e285d";

      const dataToSend = {
        name,
        birthDate,
        phone: formatPhoneNumber(phone),
        email,
        program,
        textArea,
        address,
        addressLine,
        city,
        state,
        zipcode,
      };
      axios
        .post(
          "https://6qe23rcync.execute-api.us-east-1.amazonaws.com/Prod",
          { body: dataToSend },

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((_) => {
          setClicked(false);
          setName("");
          setBirthDate("");
          setPhone("");
          setEmail("");
          setProgram("Group Program");
          setTextArea("");
          setAddress("");
          setAddressLine("");
          setCity("");
          setZipCode("");
          setState("");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
          setMessage("Your request has been send!");
        })
        .catch((err) => {
          setMessage("An error has occurred! Please try again");
          console.err(err);
        });
    } else {
      aggreeText.current.style.color = "red";
      circle.current.style.border = "3px solid red";
    }
  };

  return (
    <>
      <Modal isOpen={open}>
        <RegisterModal message={message} />
      </Modal>
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
            <div
              onClick={() => setDropDown((prew) => !prew)}
              className="program_selector input-style"
            >
              <div>{program}</div>
              <div>
                <ArrowDown />
              </div>
              <div
                style={{ display: dropDown ? "flex" : "none" }}
                className="program_selector-hidden"
              >
                <div onClick={handlePrograms}>Group Program</div>
                <div onClick={handlePrograms}>Finishing Program</div>
                <div onClick={handlePrograms}>Defensive Program</div>
                <div onClick={handlePrograms}>Goalkeeper Program</div>
              </div>
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
          <div className="forms_terms-policy-accademy">
            <div className="forms_terms-policy-accademy-title">
              AB7 SOCCER ACADEMY WAIVER
            </div>
            <p className="forms_terms-policy-covid-text">
              I/We the parent(s) of the applicant hereby give permission for
              my/our child to participate in the 2021 AB7 SOCCER ACADEMY LLC
              program. By execution of the application and this agreement, I/we
              hereby waive, release, absolve, indemnify and agree to hold
              harmless to AB7 SOCCER ACADEMY LLC program, organizers, employees,
              sponsors, supervisors, coaches and all other persons acting on
              behalf of AB7 SOCCER ACADEMY LLC form all claims resulting from
              any injury sustained by my child while participating in the camp.
              In case of emergency, I/we further hereby give permission to the
              coaches, training staff or other medical professionals to provide
              medical care as deemed necessary to my child in case of injury or
              illness. I also understand and agree that pictures and videos
              taken at the camp may be used in promotional materials.
            </p>
          </div>

          <div className="forms_terms-policy-covid">
            <div className="forms_terms-policy-covid-title">
              ASSUMPTION OF RISK AND WAIVER OF LIABILITY RELATING TO CORONAVIRUS
              (COVID-19)
            </div>
            <p className="forms_terms-policy-covid-text">
              I, the undersigned, acknowledge the contagious nature of COVID-19
              and voluntarily assume the risk that I may be exposed to or
              infected by COVID-19 by attending activities at AB7 Soccer Academy
              LLC and that such exposure of infection may result in personal
              injury, illness, permanent disability, and death. I understand
              that the risk of becoming exposed to or infected by COVID-19 at
              AB7 Soccer Academy LLC may result from the actions, omissions, or
              negligence of myself and others, including, but not limited to,
              AB7 Soccer Academy LLC’s employees, volunteers, and program
              participants and their families. I voluntarily agree to assume all
              of the foregoing risks and accept sole responsibility for any
              injury to myself (including, but not limited to, personal injury,
              disability, and death), illness, damage, loss, claim, liability,
              or expense, of any kind, that may experience or incur in
              connection with my attendance at AB7 Soccer Academy LLC or
              participation the AB7 Soccer Academy LLC’s programming (“Claims”).
              On my behalf, and/or on the behalf of any child or family member
              registered, I hereby release, covenant not to sue, discharge, and
              hold harmless AB7 Soccer Academy LLC, its employees, agents, and
              representatives, of and from the Claims, including all
              liabilities, claims, actions, damages, costs or expenses of any
              kind arising out of or relating thereto. I understand and agree
              that this release includes any Claims based on the actions,
              omissions, or negligence of AB7 Soccer Academy LLC, its employees,
              agents, representatives, whether a COVID-19 infection occurs
              before, during, or after participation in any AB7 Soccer Academy
              LLC program. <br />
              <br /> I attest that:
              <br /> - I am not experiencing any symptom of illness such as
              cough, shortness of breath or difficulty breathing, fever, chills,
              repeated shaking with chills, muscle pain, headache, sore throat,
              or new loss of taste or smell.
              <br /> - I have not traveled internationally within the last 14
              days.
              <br /> - I have not traveled to a highly impacted area within the
              United States of America in the last 14 days.
              <br /> - I do not believe I have been exposed to someone with a
              suspected and/or confirmed case of the Coronavirus/COVID-19.{" "}
              <br />- I have not been diagnosed with Coronavirus/Covid-19 and
              not yet cleared as non-contagious by state or local public health
              authorities.
              <br /> - I am following all CDC recommended guidelines as much as
              possible and limiting my
            </p>
          </div>
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
    </>
  );
};

export default Forms;
