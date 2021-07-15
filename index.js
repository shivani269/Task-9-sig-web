const fs = require("fs");

fs.mkdir("Shivani");

fs.writeFileSync("Shivani/task.txt","My name is Shivani Tyagi");
fs.appendFileSync("Shivani/task.txt"," Welcome to the FS module");


const data = fs.readFileSync("Shivani/task.txt", "utf8");
console.log(data);
fs.renamesync("Shivani/task.txt", "Shivani/myTask.txt");

fs.unlinkSync("Shivani/myTask.txt");
fs.rmdirSync("Shivani");