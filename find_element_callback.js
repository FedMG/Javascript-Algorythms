// Find element in an array with of a callback function.
const findElement = (arr, func) => {
  for (let i in arr) {
    if (func(arr[i])) {
      return arr[i];

    } else if (arr.length - 1 === i) {
      return undefined;
    }
  }
}

console.log(findElement([1, 3, 5, 8], num => num % 2 === 0));