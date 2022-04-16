const findLongestWordLength = str => {
  let newWord = "", begin = 0;
  for (let i in str) {
    
    // space & last condition
    if (str[i].match(/\s/) == str[i] || str.length - 1 == i) {
      // Last

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
  console.log()
  return newWord.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));