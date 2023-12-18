// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelList = "aeiou".split('');
  let count = 0;
  str = str.toLowerCase();
  for(let i of vowelList){
    if(str.includes(i)){
      count++;
    }
  }
  return count;
}

module.exports = vowels;



/* 
Can also use an regular expression

str.match(/[aeiou]/gi)
g - don't stop at the first true
i - take care of cases

match will return an array if true, and null if false
const matches = str.match(/[aeiou]/gi)
return matches ? matches.length : 0;
*/
