// Get filtered properties
const filteredList = objList.map(val => {
    const obj = {};
    obj.title = val.Title;
    obj.rating = val.imdbRating;
    return obj;
}).filter(val => parseFloat(val.rating) >= 8.0);