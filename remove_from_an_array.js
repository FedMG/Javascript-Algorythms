// Remove from an array
const remove = (arr, value) => {
    const newArr = arr;
    if (newArr.indexOf(value) >= 0) {
        newArr.splice(newArr.indexOf(value), 1);
        return newArr;
    }
}