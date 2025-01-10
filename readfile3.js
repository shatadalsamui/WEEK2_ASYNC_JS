// Import Node.js file system module
const fs = require("fs");

// Asynchronously read a.txt and print its contents
fs.readFile("a.txt", "utf-8", function (err, contents) {
    console.log(contents); // Print contents of a.txt
});

// Asynchronously read b.txt and print its contents
fs.readFile("b.txt", "utf-8", function (err, contents) {
    console.log(contents); // Print contents of b.txt
});

// Asynchronously read a.txt again and print its contents
fs.readFile("a.txt", "utf-8", function (err, contents) {
    console.log(contents); // Print contents of a.txt again
});