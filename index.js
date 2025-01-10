const fs = require("fs") ; // Import Node.js file system module
const contents  = fs.readFileSync("a.txt","utf-8"); // Synchronously read a.txt as UTF-8 text
console.log(contents); // Print file contents

