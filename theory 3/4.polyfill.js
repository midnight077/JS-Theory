// classical oops/inheritance vs prototypal oops/inheritance
// classical oops -> we create a class/blueprint which is then used to make instances
// prototypal oops -> we create objects which is used to make other objects


// Object -> parent  for all objects
// Array ->  parent of all array
// Number ->  parent of all number

// if we want to add a property to the childrens array then add that property to Array.prototype
function squarer(a){
    return a*a;
}
function cuber(a){
    return a*a*a;
}
// "Array"  object is the parent of all arrays
Array.prototype.myMap = function(cb){
        let tArr = [];
        for(let i=0; i< this.length ;i++){
            tArr.push(cb(this[i]))
        }
        return tArr;
}

// this arr is children of Array object
let arr = [1,2,3,4];
console.log(arr.myMap(squarer))
console.log(arr.myMap(cuber))


