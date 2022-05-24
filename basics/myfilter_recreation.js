// Recreation of filter operation
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  this.forEach(val => {
    if (callback(val)) {
      newArray.push(val);
    }
  });
  return newArray;
};