let fs = require("fs").promises;
let fP1 = fs.readFile("../f1.txt");
let fP2 = fs.readFile("../f2.txt");
let fP3 = fs.readFile("../f3.txt");
fP1.then(cb);
fP2.then(cb);
fP3.then(cb);
function cb(data){
    console.log("data "+ data);
}
console.log("end")