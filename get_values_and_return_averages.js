
// Gets filtered values and return an average from it.
function getRating(objList) {
    let averageRating, count = 0;
    averageRating = objList.filter(val => {
        return val.Director == "Christopher Nolan";
    }).reduce((total, val) => {
        count++;
        return total + parseFloat(val.imdbRating)
    }, 0
    ) / count;

    return averageRating;
}