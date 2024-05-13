// Import the jwt library and the ACCESS_TOKEN_SECRET environment variable
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

// Define a function called createAccessToken that takes a payload as an argument
/**
 * Creates an access token with the given payload.
 * @param {Object} payload - The payload to be included in the access token.
 * @returns {string} The signed access token.
 */
const createAccessToken = (payload) => {
  // Use the jwt.sign method to create and sign the access token
  // with the payload and the ACCESS_TOKEN_SECRET
  return jwt.sign(payload, ACCESS_TOKEN_SECRET);
}

// Export the createAccessToken function
module.exports = {
  createAccessToken,
}