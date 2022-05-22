const fileSystem = require("fs");
const path = require('path');


const writeStream = fileSystem.createWriteStream(path.join(__dirname, '../02-write-file') + "/text.txt");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
    
  rl.on("SIGINT", function () {
    process.stdout.write("entry is over Ctrl+C");
    process.exit();
  });

const recursiveReadLine = function () {
    rl.question('', function (answer) {
    if (answer == 'exit') {
        process.stdout.write("entry is over EXIT");
        return rl.close();
    }

    writeStream.write(answer + '\n', "UTF8"); //перезапись
   
    recursiveReadLine(); //Calling this function again to ask new question

    });
  };
  console.log("Let's type something >>");
  recursiveReadLine(); 

writeStream.on("error", (error) => {
	console.log(error.stack);
});