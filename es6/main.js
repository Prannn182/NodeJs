const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 5500;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hellllllllllo World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// nodemon keeps the changes and change the changes in the file 
// nodemon main.js
