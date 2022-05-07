// Sums all prime numbers
const sumPrimes = num => {
    const primes = [], numbers = [];
    let counting = 1;

    for (let dividend = 1; dividend < num + 1; dividend++) {
        numbers.push(dividend);

        for (let divisor = numbers.length; divisor > 1; divisor--) {
            if (dividend / divisor == parseInt(dividend / divisor)) {
                counting++;

                if (counting > 2) {
                    counting = 1;
                    break;
                }
            }
            if (counting <= 2 && divisor == numbers[1]) {
                primes.push(numbers[numbers.length - 1]);
                counting = 1;
            }
        }
    }
    return primes.reduce((acc, curr) => acc + curr);
}

console.log(sumPrimes(10));


// Another way
const sumPrimes2 = num => {
    let counting = 1, accumulator = 0;

    for (let dividend = 1; dividend < num + 1; dividend++) {
        for (let divisor = dividend; divisor > 1; divisor--) {

            if (dividend / divisor == parseInt(dividend / divisor)) {
                counting++;

                if (counting > 2) {
                    counting = 1;
                    break;
                }
            }
            if (counting <= 2 && divisor == 2) {
                counting = 1;
                accumulator += dividend;
            }
        }
    }
    return accumulator;
}

console.log(sumPrimes2(10));
  // console.log(sumPrimes2(977));
