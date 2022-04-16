const chunkArrayInGroups = (arr, size) => {
  let newArr = [], idx = 0;

  while (idx <= arr.length * 4) {
    newArr.push(arr.splice(0, size));
    idx++
  }
  return newArr
}

chunkArrayInGroups([0, 1, 2, 3], 2);