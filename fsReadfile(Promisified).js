const fs = require('fs');

function readFile(file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) {
                reject('Error reading file: ' + err.message);
            } else {
                resolve(data);
            }
        });
    });
}

// Usage example:
readFile('c.txt')
    .then(function (data) {
        console.log('File content:', data);
    });
