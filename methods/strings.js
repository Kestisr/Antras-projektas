//            012345678
const text = 'pomidoras';

// const lower = text.toLowerCase();
// console.log(lower);

// const upper = text.toUpperCase();
// console.log(upper);

const firstLetter = text[0].toUpperCase();
console.log(firstLetter);

const secondLetter = text[1];
console.log(secondLetter);

const lastLetter = text[8];
console.log(lastLetter);

const crazyLetter1 = text[2.5];
console.log(crazyLetter1);

const crazyLetter2 = text[-1];
console.log(crazyLetter2);

const crazyLetter3 = text[10];
console.log(crazyLetter3);

// "Pomidoras" turi 9 raides.

const sakinys = `"${text}" turi ${text.length} raides.`;
console.log(sakinys);

const ilgis = 'Kiek cia simboliu?'.length;
console.log(ilgis);

const name1 = 'Jonas';
const surname1 = 'Jonaitis';
const name2 = 'Maryte';
const surname2 = 'Marytaite';
const name3 = 'Petras';
const surname3 = 'Petraitis';
const name4 = 'Ona';
const surname4 = 'Onaite';

// Vardo "Jonas" ilgis yra 5 simboliai.
// Asmens Jonas Jonaitis inicialai yra J.J.

// function convertToInitials(name) {
//     const name = firstName + lastName;
//     let firstName = Sam;
//     let lastName = Harris;
//     return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
// }

// Test cases
// console.log(convertToInitials("Sam Harris")); // Output: S.H
// console.log(convertToInitials("patrick feeney")); // Output: P.F

let text1 = "Kestas Razgaitis`?";
const myArray = text1.split(" ");
console.log(myArray);
