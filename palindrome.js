function palindrome(str) {

    let newStr, count, trueOrFalse;

    newStr = str.split('').filter(val => /[A-Za-z0-9]/.test(val)).join('').toLowerCase();
    count = newStr.length - 1;

    for (let i in newStr) {
        if ((trueOrFalse = newStr[i] == newStr[count--] ? true : false) == false) {
            return false;

        } else if (trueOrFalse && newStr.length - 1 == i) {
            return true;
        }
    }
}

console.log(palindrome("eye"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("never odd or even"));
console.log(palindrome("almostomla"));