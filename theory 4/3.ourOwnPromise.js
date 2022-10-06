let fs = require("fs");
// cb based code can be converted to promise based code

function promisifiedReadFile(filePath){
    // step 1-> wrap the callback code inside promise object
    // step 2 -> call resolve when the work is completed and call reject when it gives error

    // creating a Promise class ka object
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
console.log(readFileP);
readFileP.then(function(data){
    console.log("data ->" + data);
}).catch(function(err){
    console.log(err);
})

// can attach multiple scb to promise
readFileP.then(function(data){
    console.log("hello ");
})



// function promiseBasedSyncWork(){
//     return new Promise(function(resolve,reject){
//         let arr = [1,2,3];
//         if(true){
//             resolve(arr);
//         }
//         else 
//             reject();
//     });
// }

// let mP = promiseBasedSyncWork();
// console.log(mP);
// mP.then(function(data){
//     console.log(data);
// }).catch(function(){
//     console.log("h1");
// })
// console.log("after");