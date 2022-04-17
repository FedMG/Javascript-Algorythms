// Check if a contact and a contact property exists in an object
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  },
];


const lookUpProfile = (name, prop) => {
  for (let i = 0; i <= contacts.length - 1; i++) {

    if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === true && Array.isArray(contacts[i][prop]) === true) {
      const result = [];

      for (let x = 0; x <= contacts[i][prop].length - 1; x++) {
        result.push(contacts[i][prop][x]);

        if (x === contacts[i][prop].length - 1) {
          return result;
        }
      }
    } else if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === true && Array.isArray(contacts[i][prop]) === false) {
      return contacts[i][prop];

    } else if (name !== contacts[i].firstName && contacts[i].hasOwnProperty(prop) === true && contacts.length - 1 === i) {
      return "No such contact";

    } else if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === false) {
      return "No such property";

    } else if (name !== contacts[i].firstName && contacts[i].hasOwnProperty(prop) === false && contacts.length - 1 === i) {
      return "No such contact";
    }
  }
}

lookUpProfile("Akira", "likes");