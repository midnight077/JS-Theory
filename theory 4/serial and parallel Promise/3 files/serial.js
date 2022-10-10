let fs = require("fs").promises;
let fP1 = fs.readFile("../f1.txt");
fP1.then(function (data){
    console.log("data "+ data);
    return fs.readFile("../f2.txt");
}).then(function(data){
    console.log("data "+ data);
    return fs.readFile("../f3.txt");
}).then(function(data){
    console.log("data "+ data);
});
console.log("end")