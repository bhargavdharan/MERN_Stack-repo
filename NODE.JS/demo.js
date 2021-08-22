var http = require('http');
http.createServer(function(req, res){
    res.write("Hello world! welcome to nodejs community");
    res.end();
}).listen(8080);

