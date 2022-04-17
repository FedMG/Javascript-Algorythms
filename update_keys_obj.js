// Update the keys of an object
const props = objList.map(val => {
    const obj = { "title": val["Title"], "rating": val["imdbRating"] }
    return obj;
});

JSON.stringify(ratings);

/**
 * Another way 
 *
 *  const obj = {}
 * obj.title = val["Title"];
 * obj.rating = val["imdbRating"];
 */