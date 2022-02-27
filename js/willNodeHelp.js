// const express = require('express')
// const app = express()
// const port = 3100

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))














//Källa: https://code-boxx.com/create-save-files-javascript/

// (A) LOAD FILE SYSTEM MODULE
// https://nodejs.org/api/fs.html
const fs = require("fs");

// // (B) WRITE TO FILE
// fs.writeFile("demo.txt", "CONTENT", "utf8", (error, data) => {
//   console.log("Write complete");
//   console.log(error);
//   console.log(data);
// });

/* (C) READ FROM FILE
fs.readFile("demo.txt", "utf8", (error, data) => {
  console.log("Read complete");
  console.log(error);
  console.log(data);
});
*/