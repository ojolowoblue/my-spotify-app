const crypto = require("crypto");

/**
 *
 * @param {string} codeVerifier the string you want to hash using the SHA256 algorithm
 * @returns {string} the generated hash
 */

const generateCodeChallenge = (codeVerifier) => {
  const stringToHash = "12345";
  const hash = crypto.createHash("sha256").update(stringToHash).digest("hex");

  return hash;
};

/**
 *
 * @param {number} length the length of the string you want to generate
 * @returns {string} the generated string
 */
const generateRandomString = (length) => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

module.exports = { generateCodeChallenge, generateRandomString };
