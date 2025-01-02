const fs = require("fs") ; // fs is external library which lets u read external files
const contents  = fs.readFileSync("a.txt","utf-8"); //utf-8 is
console.log(contents);