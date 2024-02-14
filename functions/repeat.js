function summ(a, b) {
    return a + b;
}

console.log(summ(1, 2, 3, 4));
console.log(summ(6, -5, 3, 5));

function diff(a, b, c) {
    return a - b - c;
}

const result = diff(summ(15, 5), summ(5, 10), summ(1, 1));
console.log(result);
console.clear();

function doSomthing(func) {
    const x = 15
    const y = 10
    return x + y;
}

console.log(doSomthing(diff));





// function Initials(name) {
//     const [firstName, lastName] = name.split(' ');
//     return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
// }

// console.log(Initials('Kestas Razgaitis'));

// // function abbrevName(name) {
// //     const [firstName, lastName] = name.split(' ');
// //     return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
// // }

// // console.log(abbrevName("Kestas Razgaitis"));

// function fix(name) {
//     return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}.`;
// }

// console.log(fix('pEtras'));
// console.log(fix('pEtRas'));
// console.log(fix('JURGA'));
// console.log(fix('gINTARE'));
// console.log(fix('DoViLe'));
// console.log(fix('rImAnTaS'));


// function Initials(name) {
//     const [firstName, lastName] = name.split(' ');
//     return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
// }

// console.log(Initials('Kestas Razgaitis'));

// function abbrevName(name) {

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// console.log(abbrevName('Kestas Razgaitis'));
// console.clear();

// function check(a, x) {
//     return a.includes(x);
// }

// console.log(check([66, 101], 65));
// console.log(check(['what', 'a', 'great', 'kata'], 'kata'));

// //console.log('Pomidoras'.includes('o'));




