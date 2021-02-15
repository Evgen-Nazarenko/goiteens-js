'use strict';
//1
console.log('--------- Задача 1 ------------');

var name = prompt('Як тебе звати?', '');

console.log('Як тебе звати?' + name);

//2
console.log('--------- Задача 2 -----------');

const myAge = Number(prompt('Скільки вам років?'));
const friendAge = Number(prompt('Скільки вашому другу років?'));
const ourAge = alert('Вам та вашому другу = ' + (myAge + friendAge));




//3
console.log('----------- Задача 3 ----------');

const a = 10;
const b = 5;
let numberThree = a * b;
console.log(numberThree);


//4
console.log('------ Задача 4 -----------');

const a1 = 5 + 3;
console.log(a1);

const a2 = 5 - 3;
console.log(a2);

const a3 = 5 * 3;
console.log(a3);

const a4 = 5 / 3;
console.log(a4);


//5
console.log('----------- Задача 5 ----------');

const a6 = 5 % 3;
alert(a6);

const a7 = 3 % 5;
alert(a7);

const a8 = 5 + '3';
alert(a8);

const a9 = '5' - 3;
alert(a9);

const a10 = 75 + 'кг';
alert(a10);


//6

console.log('-------- Задача 6 ---------------');

const height = 23;
const width = 10;

const s = height * width;

console.log(s);


//  7
console.log('--------- Задача 7 -----------');

let v = 0;
const dc = 10; // Діаметр

const h = 35 //висота циліндра
const r = dc / 2;

v = Math.PI * (r ** 2) * h;

console.log('v = ', v);


//8

console.log('--------- Задача 8 -----------');

const BA = 6;
const AC = 8;
let BC = 0;

BC = (BA ** 2) + Math.pow(AC, 2); //100
BC = Math.sqrt(BC); // 10

//BC = Math.sqrt((BA ** 2) + Math.pow(AC, 2)); //10

console.log('BC = ', BC);