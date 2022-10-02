// Functional programming (often abbreviated FP) is the process of building software by
//  composing pure functions, avoiding shared state, mutable data, and side-effects

// Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction
//  based on some fundamental, defining principles
// Other examples of programming paradigms include object oriented programming and procedural programming.


// PURE FUNCTION *******************************
// pure fn should satisfy two things
// 1. give same o/p for same input
// 2. it should not change value/address of outer variable


// impure fn
// var y=2;
// var z =3;
// function foo(x){
//     y=y*x;
//     z=y*x;
//     return x+y;
// }
// console.log("result " + foo(5));
// console.log("side effect " + y + " " + z);
// console.log("result " + foo(5));


// pure fn
var y=2;
var z =3;
function foo(x,y,z){
    y=y*x;
    z=y*x;
    return x+y;
}
console.log("result " + foo(5,y,z));
console.log("no side effect " + y + " " + z);
console.log("result " + foo(5,y,z));


