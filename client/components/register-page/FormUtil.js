/* eslint-disable complexity */
export const formSwitch = (e, inputName, stateChanger) => {
  switch (inputName) {
    case "name": {
      stateChanger(e.target.value);
      break;
    }
    case "birthDate": {
      stateChanger(e.target.value);
      break;
    }
    case "phone": {
      stateChanger(e.target.value);
      break;
    }
    case "email": {
      stateChanger(e.target.value);
      break;
    }

    case "program": {
      stateChanger(e.target.value);
      break;
    }
    case "textArea": {
      stateChanger(e.target.value);
      break;
    }
    case "address": {
      stateChanger(e.target.value);
      break;
    }
    case "addressLine": {
      stateChanger(e.target.value);
      break;
    }
    case "city": {
      stateChanger(e.target.value);
      break;
    }
    case "zipCode": {
      stateChanger(e.target.value);
      break;
    }
    case "state": {
      stateChanger(e.target.value);
      break;
    }
    default: {
      break;
    }
  }
};

export function isValidPhone(number) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = number.replace(/\D/g, "");
  return phoneRe.test(digits);
}
export function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
