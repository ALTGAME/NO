// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Get the url from the request
  const url = req.url;

  // Write the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write the response body based on the url
  if (url === '/home') {
    res.write('Welcome home');
  } else if (url === '/about') {
    res.write('Welcome to About Us page');
  } else if (url === '/node') {
    res.write('Welcome to my Node Js project');
  } else {
    res.write('Invalid url');
  }

  // End the response
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
