// js code run in a execution context 
// in execution context their are 2 parts
// 1. memory allocation (hoisting)
// 2. code execution(top to borrom left to right);

// during memory allocation, 2 things are done
//1. varibles are created and assigned undefined
//2. function statement are allocated memory

//gec(global execution context)

// console.log("a", a);
// var a;
// console.log("a", a);
// a = 10;
// console.log("a", a);

// hello(); // this works coz hello is already allocated memory
// function hello() {
//     console.log("Hello all");
// }
// hello();
// console.log(b); // b is in temporal dead zone(TDZ) thats why we cannt access it
// let b = 10; 
// console.log(b);


