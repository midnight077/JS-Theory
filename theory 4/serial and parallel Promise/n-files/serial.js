let fs = require("fs").promises;
let arr = ["../f1.txt","../f2.txt","../f3.txt"];

let frP = fs.readFile(arr[0]);
for(let i=1;i<arr.length;i++){
    frP = frP.then(function(data){
        console.log("data "+data);    
        return fs.readFile(arr[i]);
    })
}

frP.then(function(data){
    console.log("data "+data);    
})