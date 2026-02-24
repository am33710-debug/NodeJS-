// console.log("Hi");

// Primitive Data Types:
// string, int, double, bool, char

// Non-Primitive Data Types:
// objects, arrays, functions

// Scopes || who is used in that scope
// 1. Global -> var, const, let
// 2. Function -> var
// 3. Block -> const, let

// Var, let also allow overloading, unlike const

// Global Scope
// var test = "test"; // var not used anymore(see why below in the function)
// const testOne = "test one";
// let testTwo = "test two";
// const maxNumber = 999;


// function scopeTest() {
//     // Function Scope
//     //var name = "John";

//     // if(true) means that the block will be executed immediately without conditions
//     if(true) {
//         //console.log("True");
//         // Block Scope
//         var name = "John"; // this must be avoided, as it may cause leaks
//         const surname = "Doe";
//         let age = 25;
//         console.log("Surname: ", surname);
//     }
//     console.log("Name: ", name); // still will be printed because var is global scope(always)
// }


// Objects
// const person = { // key, value
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//     address: "123, Oxford"
// };
// // console.log(person.address); // One way of doing it - dot notation
// // console.log(person["adress"]); // Another way of doing it - bracket notation(inputs string)

// // person.age = 21;
// // console.log(person.age);
// // // This means that person cannot be changed, but the value of its keys can be 

// function greetMe(key) { // key is string 
//     console.log(`${key}`, person[key]); // key will be person[key/firstName]
// } // we use bracket notation in functions because:
//   // it offers greater flexibility, allowing for dynamic property access, handling special characters, and accommodating numeric keys

// // We know the keys, so we input them(as strings now using bracket notation)
// greetMe("firstName");
// greetMe("lastName");
// greetMe("age");


// Function writing types
// function findOdd(num) { return } // regular
// const testArrow = num => num; // Arrow function, but with return (=> is return)
// const testReturnArrow = (num) => {
//     num
//     // return mandatory like this
// }


// Arrays
//const nums = [1,2,4,6,0,100,23,12];

// const findOdd = nums.find((num) => num%2!==0);
// console.log(findOdd); // 1, returns only the first one it finds, not the rest

// const newNums = nums.map((num) => num * 2); // returns a new array from the original
// console.log(newNums); // will find all and *2 them and into a separate array

// const numsBiggerThanFive = nums.filter((num) => num>5);
// console.log(numsBiggerThanFive); // also returns a separate array from the original

// const sortNumbers = nums.sort((a,b) => { // for all arrays - chars, strings, numbers...
//     if(a < b) return -1; // ascend element (move front)
//     if(a > b) return 1; // descend element (move back)
//     if(a === b) return 0; // don't move the element
// });
// or 
// only for number arrays
//const sortNumbers = nums.sort((a,b) => a - b); // ascending
//const sortNumbers = nums.sort((a,b) => b - a); // descending
//console.log(sortNumbers);

//const testCondition = 'abc' === 'bca'; // false, we return either 1 or -1 when using the sort for numbers


// Homework

//const numbers = [23,34124,3453,1,123,434233,0,324,23];

// 1)
// const filterNumbers = numbers.filter((number) => number>1000);
// console.log(filterNumbers);

// 2)
// const sortNumbers = numbers.sort((a,b) => {
//     if(a < b) return -1; 
//     if(a > b) return 1; 
//     if(a === b) return 0; 
// }); 
// console.log(sortNumbers);

// 3)
// const sumNumbers = numbers.reduce((a,b) => a + b);
// console.log(sumNumbers);

// 4)
// const findNumber = numbers.find((num) => num>10000);
// console.log(findNumber); // find the first number that is bigger than 10000

// 5)
// Functions are "first-class-citizens" because they offer bigger flexibility and techniques of the Object type, which also allow for callbacks 
