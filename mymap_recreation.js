
// Recreation of map operation
Array.prototype.myMap = function (callback) {
    const newArray = [];

    this.forEach(val => {
        newArray.push(callback(val));
    });

    return newArray;
};
