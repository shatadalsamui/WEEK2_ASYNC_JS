const fs = require('fs'); // Import Node.js file system module

function readFile(file) {
    return new Promise(function (resolve, reject) { // Return a Promise
        fs.readFile(file, 'utf-8', function (err, data) { // Read file asynchronously
            if (err) {
                reject('Error reading file: ' + err.message); // Reject on error
            } else {
                resolve(data); // Resolve with file data
            }
        });
    });
}

// Usage example:
readFile('c.txt')
    .then(function (data) {
        console.log('File content:', data); // Print file content
    });
