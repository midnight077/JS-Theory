**Facts**
* promise is just another way to do async programming
* promise is a token that represents a future value
* future value inside that promise is determined by the function that returns the promise 
* promise is an abstraction over callback fn.
* callback based code and promise based code will give same O/P but internal working will be different 
* initial state of promise is pending
* final state of promise can be
    - resolved -> we will get the future value
    - rejected -> error
* to consume promise we have **Two Synchronus Functions** then and catch.
    - they are used to register cb functions on that promise
* then and catch are used to attach scb and fcb to promise
* scb & fcb are async fns
* promise queue is different -> microtask queue
* **a promise can only be rejected or resolved once in a lifetime**
* then -> can accept upto 2 optional callbacks => then(scb,fcb) 
    - first -> success callback
    - second -> failure callback
* catch is nothing but then(undefined,fcb);
* every then and catch also returns a promise