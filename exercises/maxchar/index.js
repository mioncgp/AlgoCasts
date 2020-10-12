// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }
  const max = Object.values(obj).reduce(function (a, b) {
    return Math.max(a, b);
  });

  for (const [key, value] of Object.entries(obj)) {
    if (value === max) {
      return key;
    }
  }
}

module.exports = maxChar;
