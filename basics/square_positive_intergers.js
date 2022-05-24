// Return the square of positive integers
const squareList = arr => {

  return arr.filter(val =>
    val === parseInt(val) && val > 0
  ).map(val => val ** 2);
};