//HOF ->  a function which takes another function as an argument or returns a function is known as a higher order function.

// 1. MAP -> calls a function on every element of array and returns the new array
function squarer(a){
    return a*a;
}
function cuber(a){
    return a*a*a;
}

let arr = [1,2,3,4];

// let sqAr = arr.map(squarer); // original array remains unchanged
// let cubeAr = arr.map(cuber)
// console.log(sqAr)
// console.log(cubeAr)

function myMap(arr , cb){
    let tArr = [];
    for(let i=0; i< arr.length ;i++){
        tArr.push(cb(arr[i]))
    }
    return tArr;
}
// console.log(myMap(arr , squarer));

// 2. FILTER -> returns an array who satisfy the condition mentioned in cb function

function isOdd(a){
    return a%2;
}
// let oddArr = arr.filter(isOdd);
// console.log("odd ele in array" , oddArr );

function myFilter(arr , cb){
    let tArr = [];
    for(let i=0 ; i< arr.length ; i++){
        if(cb(arr[i]))
            tArr.push(arr[i])
    }
    return tArr;
}
// console.log("odd ele in array" , myFilter(arr , isOdd) );

// function fn(){
// }
// console.log("empty fn" , arr.filter(fn));

// 3. REDUCE -> performs an operation on every element in array and gives the final result

function add( storage , ithElement){
    console.log(ithElement  );
    return storage + ithElement;
}

console.log("sum of arr" , arr.reduce(add))

function myReduce(arr , cb){
    let storage = arr[0];
    for(let i=1 ; i< arr.length ; i++){
        storage = cb(storage , arr[i]);
    }    
    return storage;
}
// console.log("sum of arr" , myReduce(arr , add));

