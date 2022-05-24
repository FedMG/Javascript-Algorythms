// The numbers in a range are added together
const sumAll = arr => {
  let a = 0, b, ternary;

  if (arr[0] < arr[1]) {
    ternary = (arr[0] < arr[1]) ? arr[1] : arr[0];
    b = arr[0];
  } else {
    ternary = (arr[0] < arr[1]) ? arr[1] : arr[0];
    b = arr[1];
  }
  for (let i = b; i <= ternary; i++) {
    a += b++;
  }
  return a;
}

console.log(sumAll([10, 5]));
console.log(sumAll([1, 4]));