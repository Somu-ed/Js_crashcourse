console.log('Hello');

// alert('yohh this is somu');

// write comment inline

// Variables - these are how we same and move around data
var s = 'pizza';
console.log(s);

var num = 45;
// console.log(num);

// DOM manupulation
/* Just a technical way of saying
change HTML with Javascript */

// var age = prompt('What is your age?');

// document.getElementById('stext').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increment by 11
num1+=11;

//Decrement by 2
num1-=2;
console.log(num1);

// Divide /, multiply *, remainder %
console.log(num1 % 6);

// increment or decrement by 1
num1++;  // Inc
num1--;  // Dec

/* Functions
1. Creating the functions
2. Calling the functions
*/

// Create
function fun() {
    console.log('This is a function');
}

// Call 
fun();

/* Let's create a function that takes in a name
and says Hello followed by your name

for eg

Name: "Somu"
Return: "Hello Somu"
*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}

// var name = prompt('What is your Name?');
// greeting(name);

// How arguments work in a function?
// Adding 2 numbers in a function

function sumNum(num1, num2) {
    var res = num1 + num2;
    console.log(res);
}

sumNum(10, 21);

/* While loop

var num3 = 0;

while(num3 < 100) {
    num3+=1;
    console.log(num3);
}

*/

// For loop

for (let i = 0; i <= 100; i++) {
    console.log(i);  
}

// Data Types
let yourAge = 18; // Number
let yourName = 'Somu'; // string
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple'; // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); // split by character