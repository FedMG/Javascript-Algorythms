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