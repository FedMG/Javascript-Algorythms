const reverseString = str => {
  let result = "";
  let arrStr = str.split("");
  for (let i of str) {
    result += arrStr.pop();
  }

  return result;
}

console.log(reverseString("hello"));




const reverseStrings = str => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}