// var is function scope
// let is block scope

// var a=10;
// function fn(){
//     var a=20; // only one time memory will be allocated for the "a" variable
//     a++;
//     console.log("5",a);
//     if(true){
//         var a;
//         console.log("8",a);
//     }
//     console.log("10",a);
// }
// console.log("12",a);
// fn();
// console.log("14",a);



let a=10;
function fn(){
    // let a=20;
    a++;
    console.log("5",a);
    if(true){
        let a=30; // this a is different from "a=20" , a new memory will be allocated for this "a"
        console.log("8",a);
    }
    console.log("10",a);
}
console.log("12",a);
fn();
console.log("14",a);

// var ->
//1. can redeclare
//2. can access before declaration
//3. function scope

// let ->
//1. cannt redeclare
//2. cannot access before declaration
//3. block scope
