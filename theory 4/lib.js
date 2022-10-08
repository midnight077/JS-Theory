function authentication(product, cb) {
    setTimeout(function () {
        // some work
        // some work
        // some work
        cb();
        cb();
                
    }, 2000);
}


function promisifiedauthentication(product) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // some work
            // some work
            // some work
            resolve();
            resolve();
            resolve();           
        }, 1000);
    })

}
module.exports = {
    authentication: authentication,
    promisifiedauthentication: promisifiedauthentication
};