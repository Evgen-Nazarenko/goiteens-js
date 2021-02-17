'use strict';
//1

let d = 1;

do {


    console.log(d);
    d += 1;
} while (d < 11);


let pass = '',
    count = 0;

console.log('---------------');


//2


for (let i = 1; i <= 10; i++) {
if (i % 2 == 0) {
  alert('Число парне ' + i);
 }
 else {
    alert('Число не парне ' + i);
 }
 }

 
   
console.log('------------');
//3


let num = 20;

 while (num < 29) {
    console.log(num);
    num += 1;
    
}


//4

let name = prompt('Напиши ім*я улюбленого героя!!! ');

if (name.length <6) {
    console.log('Ім*я твого улюбленого героя є ' + name);
}

else {
    console.log('УПС ПОМИЛКА ВВЕДЕНО ІМ*Я, ЯКЕ МІСТИТЬ БІЛЬШЕ НІЖ 6 СИМВОЛІВ');
}
for(let g = 0; g > 10; ++g){
    let j = g%2;
    if(j === 0){
     console.log('Число парне');
    }
    else{
    console.log('Число непарне');
    }
}


