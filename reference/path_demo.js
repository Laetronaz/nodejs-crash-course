const path = require("path");

//Base file_name
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
