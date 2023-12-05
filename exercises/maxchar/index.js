// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = new Map();
  for(let i of str){
    if(map.has(i)){
      map.set(i, map.get(i)+1)
    }
    else{
      map.set(i, 1);
    }
  }

  let max = 0;
  let maxKey = "";
  map.forEach((value, key) => {
    if(value > max){
      maxKey = key;
      max = value;
    }
  })
  return maxKey;
}

module.exports = maxChar;

// const string = "Hello There!"

// const chars = {};
// for(let char of string){
//   if(!chars[char]){
//     chars[char] =1
//   }
//   else {
//     chars[char]++;
//   }
// }


// const chars = {};
// for(let char of string){
//   chars[char] = char[char] + 1 || 1;
// }
