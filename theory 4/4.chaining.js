let fs = require("fs");

// then and catch returns a promise 
function promisifiedReadFile(filePath){
    return new Promise(function(resolve , reject){
        fs.readFile(filePath ,function(err , data){
            if(err)
                reject(err);
            else
                // can only send 1 param in resolve
                resolve(data);

        })
    });
}

let readFileP = promisifiedReadFile("f1.txt");
// console.log(readFileP);
function scb(data){
    console.log("data ->" + data);
    return 10;
}
function fcb(err){
    console.log(err);
}

let thenKaPromise = readFileP.then(scb); 
readFileP.catch(fcb);

console.log(thenKaPromise);
// setTimeout(function(){
//     console.log(thenKaPromise);
// }, 2000);
thenKaPromise.then(function(data){
    console.log(data);
});

