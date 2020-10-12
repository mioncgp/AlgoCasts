// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let newStr = "";
  let str = n.toString();
  if (n === 0) {
    return n;
  } else if (n < 0) {
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return parseInt(newStr) * -1;
  } else {
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return parseInt(newStr);
  }
}

console.log(reverseInt(90));

module.exports = reverseInt;
