// Return a factorial of a number
const factorialize = num => {
  let m = 1, a = 1;

  while (a <= num) {
    m *= a;
    a++;
  }
  return m;
}