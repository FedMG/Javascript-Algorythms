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


//console.log((/[0-9]/).test(result.join()));
//console.log((result.join()).match(/[0-9]/));
