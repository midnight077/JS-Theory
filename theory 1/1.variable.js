// var -> can be redeclared 
// console.log(a); // returns undefined // can access a variable before it is declared
// var a=10;
// var a;


// let -> cannt be redeclared
// let a;
// let a; -> error

//console.log(a); // error -> cannt access a variable before it is declared
//let a;

// let is blocked scope i.e you can have same varibale name in diffrent blocks
// block scope=> 
// {
//     let a = 10;
//     console.log("28", a);
//     {
//         // let a = 20;
//         console.log("31", a);
//         {
//             console.log("33", a); // 20 will be printed
//         }
//     }
//     console.log("36",a)
// }





// let obj={
//     a:10,
//     b:20
// };
// for( key in obj)  // here key is of type var
//     console.log(key);
// console.log(key); // no error , if we write (let key in obj) this would give error
    
// let arr = [10,20,40];
// arr['h1'] = 123;
// console.log(arr);
// console.log(arr[4]);
// console.log(arr["h1"]);
// console.log(arr.length);


// const -> exactly behaves like let but it stores 
// value/address of the variable
// const a=[10,20];
// a=",mjvbvb"; //error
// let a=[10,20,30];
// a=[30,20,30];
// console.log(a);

// const a=[10,20];
// a[0]=30;
// console.log(a);
// Javascript -> (trademark oracle) JS is very good at emulation 
// Ecmascript


// a=[10,20,30];
// console.log(a); // works

// shallow copy in JS like java
// let a=[10,20,30];
// let b=a;
// console.log(a," ",b);
// b.pop();
// console.log(a," ",b);

