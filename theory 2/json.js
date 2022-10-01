let fs = require("fs");
let content = fs.readFileSync("data.json");
console.log(content); // hexadecimal binary format
console.log(content + ""); // string

// let obj = JSON.parse(content); // parse data, to convert it into JS object form
// console.log(obj[1].name);

// obj.push({
//     "name": "xyz",
//     "mskn": false
// });

// // fs.writeFileSync("data.json",obj); // error , we need to convert obj into string before writing
// fs.writeFileSync("data.json",JSON.stringify(obj));


//  obj+""  will not convert it to a string
// let a=[{"ebc":"abh"}];
// console.log(a+""); 


