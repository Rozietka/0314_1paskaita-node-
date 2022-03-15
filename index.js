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

// atsirenkame kokiu spalvu ir kokiais kiekiais yra masyve
const colorsCount = {};
    for (const person of people) {
        const { color } = person;
        colorsCount[color] = colorsCount[color] ? colorsCount[color] + 1 : 1;
    }
// randame dazniausiai paminetos spalvos kieki (spalvos pavadinimas nera svarbus)
    let mostPopularcolorCount = 0;
    for (const color in colorsCount) {
        const count = colorsCount[color];
        if (count > mostPopularcolorCount) {
            mostPopularcolorCount = count;
        }
    }
// randame visus spalvu pavadinimus, kurie atitinka didziausius skaicius
    let mostPopularColorNames = [];
    for (const color in colorsCount) {
        const count = colorsCount[color];
        if (count === mostPopularcolorCount) {
            mostPopularColorNames.push(color);
        }
    }
    console.log(mostPopularColorNames);




