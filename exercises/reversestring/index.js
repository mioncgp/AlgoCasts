// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution #2
// function reverse(str) {
//   let nStr = "";
//   for (let i = str.length; i > 0; i--) {
//     nStr += str[i - 1];
//   }
//   return nStr;
// }

// // solution #3
// function reverse(str) {
//   let nStr = "";
//   for (let char of str) {
//     nStr = char + nStr;
//   }
//   return nStr;
// }

// solution #4
function reverse(str) {
  const r = str.split("").reduce((acc, currentLetter) => {
    return (currentLetter += acc);
  }, "");
  return r;
}

module.exports = reverse;
