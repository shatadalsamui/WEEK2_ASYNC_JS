// Demonstrates comma operator: only the last value is returned
function func1(){
    return 2 ; // returns 2
}
function func2(){
    return 4 ; // returns 4
}
let a = (func1(),func2()); // func1() runs, then func2(), a gets value from func2()
console.log(a) // prints 4

// Example of a timeout function using Promises (commented out)
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
