/** 
 * Caesar cipher is a shift cipher, the meanings of the letters are shifted by some set amount.
 * The ROT13 cipher is a modern usage where the letter values are shifted 13 places.
 */
const rot13 = str => {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    arr = abc.split(""), newStr = "";

  for (let i in str) {
    if (arr.indexOf(str[i]) + 13 < abc.length && /[A-Za-z0-9]/.test(str[i])) {
      newStr += abc[arr.indexOf(str[i]) + 13];

    } else if (arr.indexOf(str[i]) + 13 > abc.length - 1) {
      newStr += abc[arr.indexOf(str[i]) - 13];

    } else if (/[^A-Za-z0-9]/.test(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));