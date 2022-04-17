// Remove all elements from the initial array that are of the same value as these arguments.
const destroyer = (...arr) => {
  let originalArray = arr[0], newArray = [];

  for (let x = 1; x < arr.length; x++) {
    for (let y in originalArray) {
      if (originalArray[y] == arr[x]) {

        // If is the last position of Y
        if (y == originalArray.length - 1 && x != arr.length - 1) {
          originalArray = [...newArray];
          newArray = [];
        }
        continue;

      } else if (originalArray[y] != arr[x]) {
        newArray.push(originalArray[y]);
      }

      if (y == originalArray.length - 1) {

        originalArray = [...newArray];

        // If not is the last position of X
        if (x != arr.length - 1) {
          newArray = [];
        }
      }
    }
  }
  return newArrays;
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
