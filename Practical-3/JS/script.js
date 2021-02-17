'use strict';

//1

let k1 = '5px';
let k2 = '12djd334';
let k3 = '12.45asdwe12';
let k4 = 'qwqweeewq';

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

console.log('-----------');

//2

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

console.log('-----------------');

//3

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log('-----------------');

//4

console.log(Math.random() * (19 - 3) + 1);

console.log('------------');

//5

const result = 5+5+'5';

console.log(result);
console.log(typeof(result));

console.log('------------------');
//6


const email = 'nazarenkoevgen99@gmail.com';

console.log(email.includes('@'));
console.log(email.length);

console.log('------------------');

//7

// w1 = word1

const w1 = 'My';
const w2 = 'name';
const w3 = 'is';

let fullName = `${w1} ${w2} ${w3}`;

const w4 = 'Victor';

console.log(fullName + w4);

console.log('-------------');

//8

const userName = 'Олександра';
const payment = '300 гривень';

alert(`Дякуємо, ${userName}| До сплати ${payment}`);




