let myVar = 10;
{
    console.log(myVar);
}
function p(){
    let myVar =100;
    a();
    // function b(){
    //     console.log(" I am Fake b");
    // }
    function a() {
        c();
        // let myVar = 30; // error ------------- => this shows that  console.log("6", myVar);  will search for myVar in Execution
        //  context of a function this why when myvar is called before initiallization it is giving error. 
        function c() {
            console.log("6", myVar);
        }
        console.log("15", myVar);
        b(); // this call will access the fake fn 
        
        console.log("17", myVar);
    }
    
}
function b() {
    // let myVar = 20;
    console.log("8", myVar);
    // c(); // error---------------------------------------------------------------
    console.log("10", myVar);
}
console.log("12", myVar);

console.log("19", myVar)
p();
console.log("21", myVar)


// this works --------------------------------------

// let myVar = 10;
// function a() {
//     let myVar = 30;
//     function c() {
//         console.log("6", myVar);
//     }
//     console.log("15", myVar);

//     function b() {
//         // let myVar = 20;
//         console.log("8", myVar);
//         c(); // error
//         console.log("10", myVar);
//     }
//     b();
//     console.log("17", myVar);
// }

// console.log("12", myVar);

// console.log("19", myVar)
// a();
// console.log("21", myVar)