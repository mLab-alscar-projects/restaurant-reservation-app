// Import the built-in http module
const http = require('http');

// Define the port the server will listen on
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header to indicate plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the "Hello World" response
  res.end('Hello World\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
