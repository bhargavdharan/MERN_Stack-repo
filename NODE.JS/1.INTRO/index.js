// How to run node.js

// we will create a node server and serve an HTTP response

// use 'require' keyword to load modules(libraries)
var http = require('http');
// we need to specify call-back functions with most of the node-module methods.

var app = http.createServer((request, response)=>{
    response.writeHead(200); // status code in header
    response.write("Introduction"); // Response body
    response.end(); // close the connection
})

app.listen(8000); //port which is listen to our connections
console.log("Listening on port 8000")