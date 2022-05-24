// The DNA strand is missing the pairing element
const pairElement = str => {
	// Base pairs is a fundamental unit of double-stranded nucleid acids
	const basePair = { "A": "T", "T": "A", "C": "G", "G": "C" };
	const arr = [];

	for (const character of str) {
		for (const key in basePair) {
			if (character == key) {
				arr.push([key, basePair[key]]);
			}
		}
	}
	return arr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));