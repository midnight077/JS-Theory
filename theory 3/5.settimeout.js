// setTimeout and setInterval

// console.log("before");
// var date = new Date();
// console.log(date.getMilliseconds() ," ", date.getSeconds());

// console.log()
// let i = 0;
// while(i < 10000000000){
//     i++;
// }
// var date = new Date();
// console.log(date.getMilliseconds() ," ", date.getSeconds());
// setTimeout(function(){
//     console.log("in settimeout ")
// } , 1000);
// console.log("after");

// var date = new Date();
// console.log(date.getMilliseconds() ," ", date.getSeconds());

function cb(){
    console.log("hi");
}
let finisher = setInterval(cb , 1000);
setTimeout(function(){
    clearInterval(finisher);
    console.log("finished");
}, 4000)