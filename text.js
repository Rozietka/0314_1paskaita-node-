const text = {
    first: s => s[0], // s string'as
    middle: s => s[Math.floor((s.length - 1) / 2)], // s string'as
    last: s => s[s.length -1], // s string'as 
};

const textAction = 'middle'; // first | middle | last
const word = 'abdc';
const letter = text[textAction](word);

console.log(`${textAction} letter of word "${word}" is ${letter}`);