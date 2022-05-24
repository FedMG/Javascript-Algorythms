// Find what is the difference between two arrays 
const diffArray = (arr1, arr2) => {
	const newArr = arr1.concat(arr2), matchings = [];
	let pattern, result;

	for (let x in newArr) {
		pattern = new RegExp(newArr[x], "g");
		result = newArr.join("").match(pattern);

		if (result.length < 2) {
			matchings.push(...result);

			if ((result.join()).match(/[0-9]/)) {
				matchings.splice(matchings.indexOf(result), 1);
				matchings.push(parseInt(result));
			}
		}
		if (newArr.length - 1 == x) {
			return matchings;
		}
	}
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));


/**
 * (/[0-9]/).test(result.join());
 * (result.join()).match(/[0-9]/);
 */
