const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//   if(err) throw err;
//   console.log('Folder created');
// });


//create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', function(err) {
//   if(err) throw err;
//
//   console.log('File created!');
//
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', function(err) {
//     if(err) throw err;
//     console.log('File created!');
//   });
//
// });

//readFile
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
