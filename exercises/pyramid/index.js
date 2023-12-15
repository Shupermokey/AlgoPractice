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

function pyramid(n) {
  let spaces = n -1;
  let char = "#";
  let repeat = 1;
  for(let i = 0; i < n; i++) {
    console.log(" ".repeat(spaces) + char.repeat(repeat) + " ".repeat(spaces));
    spaces -=1;
    repeat +=2;
  }
}

module.exports = pyramid;
