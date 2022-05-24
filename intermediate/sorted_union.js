// Join arrays, remove duplicates and return a new array with the same order.
const uniteUnique = (...arr) => {
  const setArr = [].concat(...arr), newArr = [];

  for (let x in setArr) {
    const pattern = new RegExp(setArr[x], "g");
    let ternary = (setArr.join().match(pattern).length - 1 < 1) ?
      newArr.push(setArr[x]) :
      (setArr.join().match(pattern).length - 1 >= 1 &&
        newArr.indexOf(setArr[x]) == -1) ?
        newArr.push(setArr[x]) : "";

  }
  return newArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));