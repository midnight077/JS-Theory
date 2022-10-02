
// smaller fns
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b!=0)
        return a+b;
    else return "invalid"
}

// hof
// cb fn -> a function that is passed as a parameter to be used by other fn later
function calculator(a,b,cb){
    return cb(a,b);
}

console.log("Addition",calculator(10,20,add));