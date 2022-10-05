let fs = require("fs");

let p1 = fs.promises.readFile("f1.txt");
let p2 = fs.promises.readFile("f2.txt");
let p3 = fs.promises.readFile("f3.txt");

// combined promise for all 3 promises
// will be resolved when all 3 promises are resolved 
let combinedPromise = Promise.all([p1,p2,p3]);
combinedPromise.then(function(combinedData){
    // combined data is an array that contains data of all 3 files
    for(let i =0 ; i<combinedData.length ; i++)
        console.log("data for file "+ (i+1) +" " + combinedData[i]);
})