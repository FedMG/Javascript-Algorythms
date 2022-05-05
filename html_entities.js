// Convert the characters to HTML Entities
const convertHTML = str => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&apos;' };
    const newStrArr = [];
    const keys = Object.keys(entities);

    for (const strItem of str) {
        for (const key of keys) {

            if (strItem == key) {
                newStrArr.push(entities[key]);
                break;

            } else if (key == keys[keys.length - 1]) {
                newStrArr.push(strItem);
            }
        }
    }
    return newStrArr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));