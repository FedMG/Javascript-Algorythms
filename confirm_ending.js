// Confirms the end of a word
const confirmEnding = (str, target) => {
  let x = target.length - 1;
  if (str.match(target)) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] == target[x] || ((str[i].match(/\s/) || str[i] == undefined) && target[x] == undefined)) {

        if ((str[i].match(/\s/) || str[i] == undefined) && target[x] == undefined) {
          return true;

        } else if (str[0] == target[0]) {
          return true;
        }
      } else if (str[i].match(/[a-z]/) && target[x] == undefined) {
        return true;

      } else if (str[i] != target[x]) {
        return false;
      }
      x--;
    }
  } else {
    return false;
  }
}

console.log(confirmEnding("specification", "specification"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Abstraction", "action"));