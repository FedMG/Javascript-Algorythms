const repeatStringNumTimes = (str, num) => {
  let newStr = "", count = 0;

  if (str.match(/./) && num > 0) {
    for (let i = 0; i < str.length; i++) {
      newStr += str[i];

      if (i === str.length - 1 && count < num - 1) {
        i = -1;
        count++
      }
    }
  } else if (num < 1) {
    return "";
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));