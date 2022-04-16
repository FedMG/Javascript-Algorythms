// Returns the first missing letter in a given range of a string according to the alphabet.
const fearNotLetter = (str, x = 0, y = 0) => {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let inValue = abc.indexOf(str[0]);
  let fnValue = abc.indexOf(str[str.length - 1]);
  let ternary = str[x] != abc[inValue + y] ? abc[inValue + y] : undefined;

  if (str[x] != abc[inValue + y] || str[x] == abc[fnValue]) {
    return ternary;

  } else {
    return fearNotLetter(str, x + 1, y + 1);
  }
}

console.log(fearNotLetter("stvwx"));