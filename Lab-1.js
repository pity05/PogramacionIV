// 1
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
//Respuesta correcta: 2


//2
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
//Salida esperada: [1, 2, 3, 4]


//3
let x = 10;
(function () {
    console.log(x);
    let x = 20;
})();
//ReferenceError


//4
let x = 5;
let y = x++;
console.log(y);
//Salida esperada: 5


//5
console.log(1 + '1' - 1);
//Salida esperada: 10


//6
console.log(typeof null);
//Salida esperada: object


//7
console.log([] == false);
//Salida esperada: true


//8
let a = {};
let b = a;
console.log(a === b);
//Salida esperada: true


//9
console.log(typeof NaN);
//number


//10
console.log(0 == '0');
//true