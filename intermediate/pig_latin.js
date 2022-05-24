/**
 * Modify the words depending on whether they start with a vowel or a consonant,
 * for the first add to the end of the word "way", for the second, cut the
 * initial consonants and adds them to the end of the word + "ay".
 */

function translatePigLatin(str) {
  let ARR = [...str], NEWARR = [];

  for (let i in str) {
    if (str.match(/^[^aeiou]/)) {

      if (str[i].match(/[^aeiouAEIOU]/)) {
        NEWARR.push(ARR.shift());

        if (NEWARR.join("").match(/[aeiou]/)) {
          ARR.unshift(NEWARR.pop());
          ARR.push(NEWARR.join("") + "ay");
          return ARR.join("");
        }
      }

    } else if (str.match(/^[aeiou]/)) {
      ARR.push(NEWARR + "way");
      return ARR.join("");
    }

    if (str.match(/^[^aeiou]+$/)) {
      return str + "ay";
    } else if (str.match(/^[aeiou]+$/)) {
      return str + "way";
    }
  }
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("aeiou"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));
