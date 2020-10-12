// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const revesed = str.split("").reverse().join("");
//   if (str === revesed) {
//     return true;
//   }
//   return false;
// }

// function palindrome(str) {
//   const revesed = str.split("").reduce((acc, letter) => {
//     return (letter += acc);
//   }, "");

//   return revesed === str;
// }

// function palindrome(str) {
//   return str.split("").every((el, index) => {
//     return el === str[str.length - 1 - index];
//   });
// }

module.exports = palindrome;
