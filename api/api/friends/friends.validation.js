const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateFriends(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";

  // Email checks
  if (Validator.isEmpty(data.name)) {
    errors.email = "Name is required";
  } 
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
