// Returns a Promise that resolves after ms milliseconds
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms)); // setTimeout triggers resolve after ms
    return p; // return the Promise
}
function callback() {
    console.log("3 seconds have passed"); // log after timeout
}

setTimeoutPromisified(3000).then(callback) // call callback after 3 seconds
