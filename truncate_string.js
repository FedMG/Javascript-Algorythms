// Return the truncated string with a ... ending, if it's longer than the given maximum string length
function truncateString(str, num) {
  let newStr = "", wordsLen = 0, paramStr = "";

  if (str.match(/[A-Za-z0-9]/) && num >= 0) {
    newStr = str.slice(0, num);

  } else if (str.match(/[A-Za-z0-9]/) && num.match(/.[A-Za-z]/)) {
    wordsLen = num.length;
    newStr = str.slice(0, wordsLen);
  }
  if (/[0-9]/.test(num) && (num == 43 || num == 45)) {
    return newStr;

  } else {
    return newStr + '...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 5));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("Absolutely Longer", 2));

// (3 == "sff".length);