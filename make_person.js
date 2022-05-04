// Make a person object
const Person = function (firstAndLast) {
    
    let name = firstAndLast.split(/[^A-Za-z]/);

    // get methods
    this.getFirstName = () => {
        return name[0];
    };
    this.getLastName = () => {
        return name[1];
    };
    this.getFullName = () => {
        return name[0] + " " + name[1];
    };

    // set methods
    this.setFirstName = (first) => {
        name.shift();
        name.unshift(first);
    }
    this.setLastName = (last) => {
        name.pop();
        name.push(last);
    }
    this.setFullName = (firstAndLast) => {
        name = [];
        name = firstAndLast.split(/[^A-Za-z]/);
    };
};

const bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName("Alec");
bob.setLastName("Stewart")
bob.setFullName("Jhon Smith");