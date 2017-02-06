var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(req, res, next){
	console.log(req.headers, req.method, req.url);
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end("<h1>Hello world express</h1><p>Page was served using express</p>");
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
	console.log(`Server initialized at: ${port} and hostname is ${hostname}`);
});