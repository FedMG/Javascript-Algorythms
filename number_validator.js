// Telephone Number Validator, it has the format of a valid US number.
const telephoneCheck = str => {
  let pattern1 = /(^[^2-9]|^[1]{1})(?!\d{11})|^[1-9]{1}(?!\d{10})/,
    pattern2 = /^\(\d{3}\)\d{3}\-\d{4}$|^\d{3}.{1}\d{3}.{1}\d{4}$/,
    pattern3 = /(^[^02-9]|^[1]{1}).{2}\d{3}.{2}\d{3}.\d{4}$/,
    pattern4 = /^[^1]|^\d[1-9]|(^[^02-9]|^[1]{1})\s\d{3}\)\d{3}.\d{4}$/,
    pattern5 = /[1].\d{3}.\d{3}.(?=\d{4}).*|\d{3}.\d{3}.(?=\d{4}).*/;

  if (/[^A-Za-z_\.*%/]/.test(str)) {

    if (pattern1.test(str) && /(?=[^1-9])/g.test(str) == false && str.length >= 10) {
      return true;

    } else if (pattern2.test(str) || pattern3.test(str)) {
      return true;

    } else if (pattern4.test(str)) {
      return false;

    } else if (pattern5.test(str)) {
      return true;

    } else {
      return false;
    }
  }
}


// True patterns
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));

// False patterns
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("11 555-555-5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("1 555)555-5555"));