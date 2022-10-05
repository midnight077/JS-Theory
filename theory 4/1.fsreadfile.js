let fs = require("fs");
console.log("before");
// fs.readFile("f1.txt", "UTF-8" ,function(err , data){
//     if(err) console.log(err);
//     else    console.log(data);
// });
console.log("after");

// fs.promises.readFile will give a promise obj whos initial state will be pending
// promise obj is an abstract object that holds a future value
// when the promise is fulfilled the state of promise is changed 
let promise = fs.promises.readFile("f1.txt");
console.log("initial state " + promise);
console.log("initial state " , promise);
// setTimeout(function () {
//     console.log("final state" , promise);
// }, 2000);


// then/catch are consumer fns
promise.then(function(data){
    console.log("data -> " + data);
})
promise.catch(function(err){
    console.log("err " + err);
})