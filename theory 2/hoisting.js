// class 2 theory
// code in JS runs in a bubble called execution context

// A new execution context is formed only when a function is called
// their is no main fn in js , so 
// all this code runs in GEC(global execution context)

// What is the Execution Context?
// When the JavaScript engine scans a script file, it makes an environment called the Execution Context 
// that handles the entire transformation and execution of the code.
console.log("a", a);
var a;
console.log("a", a);
a = 10;
console.log("a", a);

hello(); // this works coz hello is already allocated memory
function hello() {
    console.log("Hello all");
}
hello();
console.log(varName);
// varName(); // error as varName is undefined 
var varName = function(){
    console.log(" Function Expression ");
} 
varName();
