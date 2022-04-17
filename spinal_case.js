// Convert-a-string-to-spinal-case
const spinalCase = str => {
  let newStr = "";

  for (let i in str) {
    if (str[i].match(/[a-zA-Z0-9]/)) {
      if (str[i].match(/[A-Z]/) && i != 0 && str[i - 1].match(/[a-z]/)) {
        newStr += "-";
      }
      newStr += str[i];

    } else if (str[i].match(/-/)) {
      newStr += str[i];

    } else if (str[i].match(/[^a-zA-Z]/)) {
      newStr += "-"
    }
  }
  return newStr.toLowerCase();
}

console.log(spinalCase('TELE TUBBIES'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase("AllThe-small Things"));