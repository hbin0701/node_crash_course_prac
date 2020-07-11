const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

  //Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  let extname = path.extname(filePath);

  let contentType = 'text/html';


  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.html':
      contentType = 'text/html';
      break;
    case 'jpg':
      contentType = 'image/jpg';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if(err) {
      if (err.code === 'ENOENT') {
        //Page not FOUND
        fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content, 'utf8');
        });
      }
      else {
        // Some server console.error(
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    }

    else {
//Success
      console.log("Called!");
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf8');
    }
  });
});

console.log("HI");
const PORT =  process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
