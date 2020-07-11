 const http = require('http');

 http.createServer((req, res) => {
   res.write("hello.World!");
   res.end()
 }).listen(5000, ()=> console.log('Sever running!'));
