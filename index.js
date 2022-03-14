const nodemon = require("nodemon");

const people = [
    {
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'red',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'orange',
    },
]
console.log(people);

const colors = [];

// for (let i = 0; i < people.length; i++) {
//     const person = people[i];
//     const { color } = person;
//     colors.push(color);
// }

for (const person of people) {
    const color = person.color;
    colors.push(color);
}
console.log(colors);

