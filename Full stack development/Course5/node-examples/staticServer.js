var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = "localhost";
var port = 3000;

var server = http.createServer(function(req, res){
	console.log("The request method is: "+req.method+" and URL requested was: "+req.url);
	if(req.method == 'GET'){
		res.writeHead(200, {'Content-Type': 'text/html'});

		var fileUrl;
		var filePath;
		var fileExt;
		if(req.url == "/"){
			fileUrl = '/index.html';
		}
		else{
			fileUrl = req.url;
		}
		filePath = path.resolve("./public" + fileUrl);
		fileExt = path.extname(filePath);
		console.log(fileUrl, fileExt, req.url);
		if(fileExt == '.html'){
			fs.exists(filePath, function(exists){
				if(!exists){
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.end("<h1>404 Not Found</h1><p>The file you requested at "+req.url+" is not available.</p>");
					return;
				}
				res.writeHead(200, {'Content-Type': 'text/html'});
				fs.createReadStream(filePath).pipe(res);
			});
		}
		else{
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end("<h1>404 you requested an invalid html file. Try again.</h1>");
		}
		// else{
		// 	fileUrl = '/abtus.html';
		// }
	}
	else{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.send("<h1>404 you requested an invalid request method: "+req.method+". Try again.</h1>");
	}
});

server.listen(port, hostname, function(){
	console.log("Port is: "+port+" and hostname is: "+hostname);
});