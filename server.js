const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/' && req.method === 'GET') {
       
        res.writeHead(200, { 'Content-Type': 'text/html' });                                     // Set the status code to 200 (OK) and the content type to text/html
       
        res.end('<html><body><h1>Welcome to the Home Page</h1></body></html>');                // Respond with a simple HTML page
    }
    // Handle the /api route
    else if (req.url === '/api' && req.method === 'GET') {
       
        res.writeHead(200, { 'Content-Type': 'application/json' });                          // Set the status code to 200 (OK) and the content type to application/json
        
        res.end(JSON.stringify({ message: 'Hello, welcome to the API!' }));                  // Respond with a JSON object containing a greeting message
    }
    // Handle any other routes
    else {
       
        res.writeHead(404, { 'Content-Type': 'text/plain' });                                // Set the status code to 404 (Not Found) and the content type to text/plain
      
        res.end('404 - Page Not Found');                                                      // Respond with an error message indicating that the page is not found
    }
});


const PORT = 3000;                                                                          // Specify the port for the server to listen on
// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});