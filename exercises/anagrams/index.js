// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  return stripAndLowerCaseAndSort(stringA) === stripAndLowerCaseAndSort(stringB);
  

}

function stripAndLowerCaseAndSort(input) {
return input.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("  ");
}

module.exports = anagrams;


// const charsA = countChars(stringA)
// const charsB = countChars(stringB)

// if(Object.keys(charsA).length === Object.keys(charsB).length){
//   for(let i of Object.keys(charsA)){
//     if(charsA[i] !== charsB[i]){
//       return false;
//     }
//   }
//   return true
// }
// return false;

// }

// function stripAndLowerCase(input) {
// return input.replace(/[^\w]/g, "").toLowerCase();
// }

// function countChars(input){
// input = stripAndLowerCase(input);

// let chars = {};
// for(let i of input){
//   if(!chars[i]){
//     chars[i] = 1
//   }
//   else {
//     chars[i] += 1
//   }
// }
// return chars;
// }
