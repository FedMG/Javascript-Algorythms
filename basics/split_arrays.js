// Splits an array into groups according to the length of size and returns them as a two-dimensional array.
const splitArray = (arr, size) => {
  let newArr = [], idx = 0;

  while (idx <= arr.length * 4) {
    newArr.push(arr.splice(0, size));
    idx++
  }
  return newArr
}

console.log(splitArray([0, 1, 2, 3], 2));
console.log(splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(splitArray([0, 1, 2, 3, 4, 5], 2));