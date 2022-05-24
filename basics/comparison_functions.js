// Alphabetical order
const alphabeticalOrder = arr => {
  return arr.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0
  });
}

// Numerical order
const numericalOrder = arr => {
  return arr.sort((a, b) => a - b);
}

// Numerical order without mutation
const nonMutatingSort = arr => {
  return [].concat(arr).sort((a, b) => a - b);
}