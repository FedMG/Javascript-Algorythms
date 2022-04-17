// Filter and split on spaces and hyphenate
const urlSlug = title => {
    return title.split(/\s/).filter(val => val !== ""
    ).join("-").toLowerCase();
}