// Prime numbers, are every positive whole numbers with two divisor: 1 and itself.
const primeNumbers = num => {
	const primes = [], numbers = [];

	for (let dividend = 1; dividend < num + 1; dividend++) {
		const auxiliary = [];
		numbers.push(dividend);

		// It can add the prime and composite numbers separated in arrays
		for (let divisor of numbers) {
			if (dividend / divisor == parseInt(dividend / divisor)) {
				auxiliary.push(divisor);
			}
		}
		primes.push(auxiliary);
	}
	// filter length item, map values in one array, reduce in one value.
	return primes.filter(item => item.length > 1 && item.length < 3)
		.map(val => val[1]);
}

console.log(primeNumbers(10));


// Another way more simple and better
const primeNumbers2 = num => {
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
	return primes;
}

console.log(primeNumbers2(10));



// Another better way 
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