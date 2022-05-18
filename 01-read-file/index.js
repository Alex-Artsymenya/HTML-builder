let fs = require('fs');

fs.readFile('D:\\HTML-builder\\01-read-file\\text.txt', 'utf8', function(error, fileContent){
   if(error) throw error; // ошибка чтения файла, если есть
   console.log(fileContent); // содержимое файла
});