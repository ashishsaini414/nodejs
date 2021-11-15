const fs = require("fs");

const data = fs.readFileSync("testFile1.txt","utf-8");

console.log(data)

console.log("sentence after the file data")

//fs.readFileSync() will read the full content of the file in memory before returning the data and 
//it will block the further execution untill the file data is read.


