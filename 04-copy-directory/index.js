const fs = require("fs");
const path = require("path");
const textFile = path.join(__dirname, "files");
fs.readdir(textFile, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  fs.mkdir("04-copy-directory/files-copy", { recursive: true }, (err) => {
    if (err) throw err;
  });
  const textFile1 = path.join(__dirname, "files-copy");
  files.forEach((el) => {
    fs.readFile(`${textFile}/${el.name}`, "utf-8", (err, data) => {
     if (err) throw err;
     else {
     fs.writeFile(`${textFile1}/${el.name}`, data, "utf-8", (err) => {
         if (err) throw err;
     });
     }
    });
  });
});