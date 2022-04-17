// Joins two arrays at a given position
const frankenSplice = (arr1, arr2, n) => {
  let newArr = [], auxArr = [];

  newArr = arr2.splice(0, n);
  auxArr.push(...newArr);
  newArr.push(...arr1);
  newArr.push(...arr2);
  arr2.unshift(...auxArr);

  return newArr;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));