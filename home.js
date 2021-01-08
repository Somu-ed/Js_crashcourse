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

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// let fruits = new Array('banana', 'apple', 'orange', 'pineapples'); 

console.log(fruits[2]); // access value at 2nd index

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift();  // removes 1st elemnt from array
console.log(fruits);
fruits.unshift('kiwi'); // adds 1st elemnt to an array
console.log(fruits);
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNums = [5, 10, 2, 25, 3, 225, 1, 2, 5, 334, 321, 2];
console.log(someNums.sort(function(a, b) {return a-b})); // ascending order
console.log(someNums.sort(function(a, b) {return b-a})); // descending array

let emptyarray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyarray.push(num);
}
console.log(emptyarray);

// Objects in javascript
// dictionaries in python

let student = {
    first: 'Soumyajeet', 
    last: 'Satpathy', 
    age: 21, 
    height: 173,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    },
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'Somu'; // change value
// console.log(student.first);
// student.age++;
// console.log(student.age);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 is the target demographic
// && AND
// || OR
var age = 25;

if ((age>=18) && (age<=35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// switch statements
// differentiate b/w weekday vs. weekday
// day 0 --> Sunday
// day 6 --> Saturday
// day 4 --> Thursday --> Weekday
switch (2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
        break;
}

console.log(text);