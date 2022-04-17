// Turn the direction of the word
const reverseString = str => {
  let result = "";
  let arrStr = str.split("");
  for (let i of str) {
    result += arrStr.pop();
  }

  return result;
}

console.log(reverseString("hello"));