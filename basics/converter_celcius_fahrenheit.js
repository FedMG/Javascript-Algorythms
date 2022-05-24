// Convert Fahrenheit to Celsius
const convertToC = fahrenheit => {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return celsius;
}

console.log(convertToC(86));

// Convert Celcius to Farenheit
const convertToF = celsius => {
  let fahrenheit = 9 / 5 * celsius + 32;
  return fahrenheit;
}

console.log(convertToF(30));