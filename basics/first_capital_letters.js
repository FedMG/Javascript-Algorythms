// Returns a sentence with each first letter of each word capitalized
const titleCase = str => {
  let newStr = "";
  for (let i in str) {
    str = str.toLowerCase()  // maybe it's not well done

    if (/^[A-Z]/.test(str[i]) || (/^[a-z]/.test(str[i]) && i == 0)) {
      newStr += str[i].toUpperCase();

    } else if (/[^A-Z]/.test(str[i]) && /\s/.test(str[i - 1])) {
      newStr += str[i].toUpperCase();

    } else if (/[^A-Z]/.test(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(titleCase(""));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));