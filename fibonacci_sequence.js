// The Fibonacci sequence
const fibonacciSequence = (num) => {
    let a = 0, b = 1;
    const sequence = [];

    for (let i = 0; i < num; i++) {
        if (sequence.length < num) {
            sequence.push(b);
            a += b;
            sequence.push(a);
            b += a;
        }
    }
    return sequence;
}

console.log(fibonacciSequence(4));