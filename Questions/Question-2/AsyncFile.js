const fs = require("fs");

fs.readFile("testFile1.txt", "utf-8",(err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

console.log("sentence after the file data");

//fs.readFile() will read the full content of the file in memory before returning the data and 
//it will not further block the code execution
