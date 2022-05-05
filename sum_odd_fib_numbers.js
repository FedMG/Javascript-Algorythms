// Sums all odd Fibonacci numbers
const oddFibNumbers = (num) => {
    let a = 0, b = 1;
    const sequence = [];

    // Numbers to according the value of "b"
    while (b <= num) {
        a += b;
        sequence.push(b);
        b += a;

        if (a < num) {
            sequence.push(a);
        }
    }
    return num < 2 ? 1 : sequence.filter(value => value % 2 == 1)
        .reduce((acc, currentValue) => acc + currentValue);
}

console.log(oddFibNumbers(1));
console.log(oddFibNumbers(1000));
console.log(oddFibNumbers(4000000));
console.log(oddFibNumbers(4));
console.log(oddFibNumbers(75024));
console.log(oddFibNumbers(75025));