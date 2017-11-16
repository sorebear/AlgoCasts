// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var newString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newString.push(str.charAt(i));
    }
    return newString.join('');
}

module.exports = reverse;
