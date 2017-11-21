// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	stair.length <= row ? stair += "#" : stair += " ";
    steps(n, row, stair);
}

module.exports = steps;

// SOREN SOLUTION #1:
// function steps(n) {
//     for (let row = 1; row <= n; row++) {
//         let stair = "";
//         for (column = 1; column <= n; column++) {
//             if (column > i) {
//                 stair += " ";
//             } else {
//                 stair += "#";
//             }
//         }
//         console.log(stair);
//     }
// }

// STEPHEN RECURSION SOLUTION #1: 
// function steps(n, row = 0, stair = "") {
// 	if (n === row) {
// 		return;
// 	}
// 	if (n === stair.length) {
// 		console.log(stair);
// 		return steps(n, row + 1);
// 	}
// 	stair.length <= row ? stair += "#" : stair += " ";
//     steps(n, row, stair);
// }