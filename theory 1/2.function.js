// 4 type of function

// 1. function statement
// function hello() {
//     console.log("hello");
// }
// hello();


// 2.  function expression

// functions are also treated as variables
// we can assign address of a function to a variable 
// same as we can assign address of an array to other variable
// let varName = function () {
//     console.log("I am exp");
//     return 10;
// }
// varName();
// varName=10;
// console.log(varName);

//use of function experssion
// function fn(){
//     console.log("original");
// }

// function fn(){
//     console.log("Fake");
// }
// fn(); // fake will be called, In large code base it will difficult of find 
// //error if we by mistake name 2 function same

// let func = function(){
//     console.log("original");
// }

// let func = function(){
//     console.log("original");
// }
// func(); // this will give error as we cant redeclare func



// 3. arror function
// let fn = () => {
//     console.log("I am arrow")
// }

//4. IIFE -> immediately invoked function expression
// (function(){
//     console.log("i am iife ------");
// })();

// string are immutable
//immutable means we will get a copy of string and original string will remain
//unchanged

// let a ="jbvhb";
// let b =a;
// console.log(a," "+b);
// a="abc";
// console.log(a," "+b);
// b = b+'x'; // this will create a new string which will be stored in 'b'
// b+='c'; // thats why this is preffered

//template string
let num =100;
let a=` i am a ${num} multi 
    line string`;
console.log(a);
