/*
UNARY - vienas
BINARY - du
TERNARY - trys
*/

// unary
const a = 5;

// binary

// ternary
let g1 = 0;

if (1 > 2) {
    g1 = 3;
} else {
    g1 = 4;
}

console.log(g1);

const t1 = 1 > 2 ? 3 : 4;
const t2 = 1 < 2 ? 3 : 4;

console.log(t1);
console.log(t2);

const amzius = 28;
const limitas = 21;

let msg = '';

if (amzius >= limitas) {
    msg = 'Uzeik 👍';
} else {
    msg = 'Dar palauk... 👀';
}

console.log(msg);

const msg2 = amzius >= limitas ? 'Uzeik 👍' : 'Dar palauk... 👀';
console.log(msg2);

const isLoggedIn = true;
let msgLog = 'Is pradziu prisijunkite!';

if (isLoggedIn) {
    msgLog = 'Sveiki prisijunge!';
}

console.log(msgLog);

const msgLog2 = isLoggedIn ? 'Sveiki prisijunge!' : 'Is pradziu prisijunkite!';
console.log(msgLog2);

console.clear();

const name = 'Palangos turgus';
const price = 7;
const priceToHigh = 2;

// Palangos turgus prekiauja per brangiomis prekemis!
// Palangos turgus prekiauja iperkamomis prekemis!

let msgPalanga = '';

if (price <= priceToHigh) {
    msgPalanga = `${name} prekiauja iperkamomis prekemis!`;
} else {
    msgPalanga = `${name} prekiauja per brangiomis prekemis!`;
}

console.log(msgPalanga);

const ternaryPalanga = price <= priceToHigh
    ? `${name} prekiauja iperkamomis prekemis!`
    : `${name} prekiauja per brangiomis prekemis!`;
console.log(ternaryPalanga);

const ternaryPalanga2 = `${name} prekiauja ${price <= priceToHigh ? 'iperkamomis' : 'per brangiomis'} prekemis!`;
console.log(ternaryPalanga2);

const kainosText = price <= priceToHigh ? 'iperkamomis' : 'per brangiomis';
const ternaryPalanga3 = `${name} prekiauja ${kainosText} prekemis!`;
console.log(ternaryPalanga3);