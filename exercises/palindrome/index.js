// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((value, index, array) => {
        return value === array[array.length - index - 1]
    })
}

module.exports = palindrome;


// SOLUTION #1:
// function palindrome(str) {
// 	return str === str.split("").reverse().join("");
// }

// SOLUTION #2: 
// function palindrome(str) {
// 	for (var i = 0, j=str.length-1; i < str.length / 2; i++, j--) {
//         if (str.charAt(i) !== str.charAt(j)) {
//             return false;
//         }
//     }
//     return true;
// }

// SOLUTION #3:
// function palindrome(str) {
//     const arr = str.split('');
//     return arr.every((value, index, array) => {
//         return value === array[array.length - index - 1]
//     })
// }