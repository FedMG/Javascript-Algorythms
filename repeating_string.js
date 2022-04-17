// Repeat a string n times
const repeatStringNTimes = (str, n) => {
  let newStr = "", count = 0;

  if (str.match(/./) && n > 0) {
    for (let i = 0; i < str.length; i++) {
      newStr += str[i];

      if (i === str.length - 1 && count < n - 1) {
        i = -1;
        count++
      }
    }
  } else if (n < 1) {
    return "";
  }
  return newStr;
}

console.log(repeatStringNTimes("abc", 3));