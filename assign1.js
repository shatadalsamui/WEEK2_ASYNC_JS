/*
function timeout(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

// Usage example:
timeout(1000).then(function() {
    console.log('1 second has passed');
});
*/

function func1(){
    return 2 ;
}
function func2(){
    return 4 ;
}
let a = (func1(),func2());
console.log(a)
