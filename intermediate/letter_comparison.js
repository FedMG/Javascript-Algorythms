// Return true if "word" contains all of the "letters"
const mutation = arr => {
  let word = arr[0].toLowerCase();
  let letters = arr[1].toLowerCase();

  for (const staticIdx in letters) {
    for (let dinamicIdx in word) {
      if (word[dinamicIdx] === letters[staticIdx] && letters.length - 1 != staticIdx) {
        break;

      } else if (word[dinamicIdx] === letters[staticIdx]) {
        return true;

      } else if (word[dinamicIdx] !== letters[staticIdx] && word.length - 1 == dinamicIdx) {
        return false;
      }
    }
  }
}

console.log(mutation(["hello", "Hello"]));