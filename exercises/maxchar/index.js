// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }
  	for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;

// SOLUTION #1:
// function maxChar(str) {
//     const obj = str.toLowerCase().split('').reduce((object, value) => {
//         object[value] > 0 ? object[value] += 1 : object[value] = 1
//         return object
//     }, {});
//   	let max = str[0];
//   	for ( let char in obj ) {
//       if (obj[char] > obj[max]) {
//       	max = char;
//       }
//     }
// 		return max;
// }
