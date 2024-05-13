const mongoose = require("mongoose");

// Function to validate an email address
const validateEmail = (email) => {
  // Convert the email to lowercase and match it against a regular expression
  return String(email)
   .toLowerCase()
   .match(
      // Regular expression to match most common email address formats
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Function to validate an ObjectId
const validateObjectId = (string) => {
  // Use Mongoose's built-in ObjectId validation method
  return mongoose.Types.ObjectId.isValid(string);
}

// Export the validation functions as a module
module.exports = {
  validateEmail,
  validateObjectId,
}