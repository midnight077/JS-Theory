let lib = require("./lib.js");

// their are trust issues with callback
// eg->
// suppose their is a library with does some async work for eg
// authenticate the payment and after the authentication process calls the cb
// which deducts the amount for credit card

let amount = 100;
let tocut =20;

function chargeCC(){
    amount = amount - tocut;
    console.log("balance = " , amount);
}

// async fn
// lib.authentication("otp" , chargeCC );

// Since their is a bug in lib.js the amount will be deducted twice
// so to safeguard yourself from this we use Promise
// coz in promise only one time resolve or reject can be called

let promiseObj = lib.promisifiedauthentication("otp");
promiseObj.then(chargeCC);