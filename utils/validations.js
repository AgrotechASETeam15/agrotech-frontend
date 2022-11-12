function MandatoryFieldCheck(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  }
  return error;
}
function ValidateName(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (input.match('[^a-zA-Z]')) {
    error = 'Invalid name';
  } else if (input.length > 15) {
    error = 'Length is too long';
  }
  return error;
}
function ValidatePhoneNo(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (!input.match(/^[1-9]\d*$/)) {
    error = 'Invalid phone number';
  } else if (input.length < 9) {
    error = 'Invalid phone number';
  } else if (input.length > 9) {
    error = 'Invalid phone number';
  }
  return error;
}
function ValidateEmail(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (
    !input.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    error = 'Invalid email';
  }
  return error;
}
function ValidatePassword(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (input.length < 8) {
    error = 'Minimum 8 characters required';
  } else if (input.length > 16) {
    error = 'Maximum length must be 16 characters';
  } else if (!input.match('.*[0-9].*')) {
    error = 'Atleast one number required';
  } else if (!input.match('.*[a-zA-Z].*')) {
    error = 'Atleast one letter required';
  } else if (!input.match('.*[a-z].*')) {
    error = 'Atleast one small letter required';
  } else if (!input.match('.*[A-Z].*')) {
    error = 'Atleast one capital letter required';
  }
  // else if (!input.match(".*[@!#%&()^~{}].*")) {
  //   error = "Atleast one special character is required";
  // }
  return error;
}
/**
 *
 * @param {Number || String} input
 * @returns error
 */
function ValidateLicense(input) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (!input.match(/^[1-9]\d*$/)) {
    error = 'Invalid license number';
  } else if (input.length !== 9) {
    error = `Please input 9 digits`;
  }
  return error;
}

/**
 *
 * @param {Number || String} input
 * @param {Number} number number of digits
 * @returns error
 */
function NumberValidation(input, number) {
  let error = '';
  if (input && input.trim().length === 0) {
    error = 'Cannot be whitespace alone';
  } else if (!input) {
    error = 'Cannot be empty';
  } else if (!input.match(/^[1-9]\d*$/)) {
    error = 'Invalid number';
  } else if (input.length !== number) {
    error = `Please input ${number} digits`;
  }
  return error;
}

export {
  ValidateName,
  ValidatePhoneNo,
  ValidateEmail,
  ValidatePassword,
  MandatoryFieldCheck,
  ValidateLicense,
  NumberValidation,
};
