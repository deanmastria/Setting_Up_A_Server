const http = require('http');

const PORT = 3000;  

const contentTypeHtml = { 'Content-Type': 'text/html' };
const contentTypeJSON = { 'Content-Type': 'application/json'};
const contentTypeText = { 'Content-Type': 'text/plain' };

const handleRootRoute = (req, res)  => {
    res.writeHead(200, contentTypeHtml)                                     // Set the status code to 200 (OK) and the content type to text/html
    res.end('<html><body><h1>Home Page</h1></body></html>');                                // Respond with HTML page
    };

const handleAPIRoute = (req, res) => {
    res.writeHead(200, contentTypeJSON);                                                     // Set the status code to 200 (OK) and the content type to text/plain
    res.end(JSON.stringify({ message: 'API'}));
};                                            

const handleNotFound = (req, res) => {
    res.writeHead(404, contentTypeText);                                // Set the status code to 404 (Not Found) and the content type to text/plain
    res.end('404 - Page Not Found');                                                     // Respond with an error message indicating that the page is not found
};

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
    handleRootRoute(req, res);
    } else if (req.url === '/api' && req.method === 'GET') {
        handleAPIRoute(req, res);
      
    } else { 
        handleNotFound(req, res);
                                                           
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);                                     // Log a message to the console indicating that the server is running             
});

