// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  console.log("////////////////////////////////////////////////////////////");
  console.log(chunked);
  return chunked;
}

module.exports = chunk;

//This worked but there is something better

// let chunked = []
// let arr = []
// for(let i of array){
//     if(arr.length < size){
//       arr.push(i);
//     }
//     else {
//       chunked.push(arr);
//       arr = []
//       arr.push(i);
//     }

// }
// chunked.push(arr);
// return chunked;
