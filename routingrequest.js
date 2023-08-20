const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/username' && req.method === 'POST') {
    fs.writeFileSync('username.txt', 'test value');
    //redirect
    res.writeHead(302, { Location: '/' });
    return res.end();
  }
  //other logic
});

server.listen(3000);
