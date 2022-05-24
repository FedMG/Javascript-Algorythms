// Find the longest word in a string and return it's length
const findLongestWord = str => {
  let newWord = "", begin = 0;
  for (let i in str) {

    if (str[i].match(/\s/) == str[i] || str.length - 1 == i) {

      if (str.length - 1 == i && str.match(/\s$/) != str[i]) {
        i++;
      }
      if (newWord.length <= str.slice(begin, i).length) {
        newWord = str.slice(begin, i);
        begin = i;
        begin++;

      } else if (newWord.length > str.slice(begin, i).length) {
        begin = i;
        begin++;
      }
    }
  }
  return newWord.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"))