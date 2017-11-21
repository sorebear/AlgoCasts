// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n, row = 0, step = '') {
    if (row >= n) {
        return;
    }

    if (step.length === n * 2 - 1) {
        console.log(step);
        return pyramid(n, row + 1);
    }

    if (step.length + 1 >= n - row && step.length + 1 <= n + row) {
        step += "#";
    } else {
        step += " ";
    }
    pyramid(n, row, step);
}

module.exports = pyramid;


// SOREN RECURSION SOLUTION #1: 
// function pyramid(n, row = 0, step = '') {
//     if (row >= n) {
//         return;
//     }
//
//     if (step.length === n * 2 - 1) {
//         console.log(step);
//         return pyramid(n, row + 1);
//     }
//
//     if (step.length + 1 >= n - row && step.length + 1 <= n + row) {
//         step += "#";
//     } else {
//         step += " ";
//     }
//     pyramid(n, row, step);
// }
