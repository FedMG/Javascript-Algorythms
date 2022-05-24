// Search and replace a word on the sentence
const myReplace = (str, before, after) => {
  const oldStrArr = str.split(/[^A-Za-z0-9-%~.,()]/);
  const newStrArr = [];

  for (const eachWord of oldStrArr) {

    if (eachWord == before) {
      // Preserve the case of the first character in the original word
      let isItCaps = /[A-Z]/.test(eachWord[0]) ?
        after.slice(0, 1).toUpperCase() + after.slice(1,) :
        after.slice(0, 1).toLowerCase() + after.slice(1,);

      newStrArr.push(isItCaps);
      continue;

    } else {
      newStrArr.push(eachWord);
    }
  }
  return newStrArr.join(" ");

}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));