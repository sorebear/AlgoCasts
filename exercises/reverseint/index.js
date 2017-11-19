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
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;


// SOLUTION #1:
// function reverseInt(n) {
//     if (n < 0) {
//         const str = parseInt(n.toString().slice(1).split("").reverse().join("")) * -1;
//         return str;
//     }
//     return parseInt(n.toString().split("").reverse().join(""));
// }

// SOLUTION #2:
// function reverseInt(n) {
//     return parseInt(n.toString().replace("-", "").split("").reverse().join("")) * Math.sign(n);
// }

// SOLUTION #3:
// function reverseInt(n) {
//     return parseInt(Math.abs(n).toString().split("").reverse().join("")) * Math.sign(n);
// }