const path = require("path");
const fs = require("fs");
const readline = require("readline");
console.log("Введите ваш текст:");
const textEdit = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const textFile = path.join(__dirname, "text.txt");
fs.writeFile(textFile, "", (err) => {
  if (err) {
    throw err;
  }
});
textEdit.on("line", (line) => {
  if (line == "exit") {
    console.log("Удачи");
    process.exit(0);
  }
  fs.appendFile(textFile, `\n${line}`, (err) => {
    if (err) {
      throw err;
    }
  });
}).on("close", () => {
  console.log("Удачи");
  process.exit(0);
});