const fs = require("fs") ; // Import Node.js file system module

const contents = fs.readFile("a.txt","utf-8"); // Asynchronously read a.txt (returns immediately, does not wait for file)
console.log(contents); // Will print 'undefined' because readFile is async and no callback is provided

const contents2 = fs.readFile("b.txt","utf-8"); // Asynchronously read b.txt (same issue as above)
console.log(contents2); // Will print 'undefined' for the same reason
