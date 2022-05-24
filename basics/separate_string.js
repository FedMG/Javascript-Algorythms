// Separate where there are no letters
const splitify = str => {
	return str.split(/[^A-Za-z]/);
}

// Separate where there are no letters and join them
const sentensify = str => {
	const newArr = str.split(/[^A-Za-z]/);
	return newArr.join(" ");
}