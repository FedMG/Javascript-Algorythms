const bouncer = arr => {
  const newArr = [];
  let newStr = "";

  for (let i in arr) {
    if (arr[i] != false && arr[i] != undefined && arr[i] != null) {
      newStr = arr[i];

      if (/NaN/.test(newStr)) {
        // There is nothing  :)

      } else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));