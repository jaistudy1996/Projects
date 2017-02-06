var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var port = 3000;
var hostname = 'localhost';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.all('/dishes', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/html'});
	next();
});

app.get('/dishes', function(req, res, next){
	res.end("Display all dishes");
});

app.post('/dishes', function(req, res, next){
	res.end("Add dish named "+req.body.name+" with details "+req.body.description+" to DB.");
});

app.delete('/dishes', function(req, res, next){
	res.end('Deleting all dishes.');
});

app.get('/dishes/:dishID', function(req, res, next){
	res.end("The dish id number "+req.params.dishID+" will be displayed.");
});

app.put('/dishes/:dishID', function(req, res, next){
	res.write("Updating dish id number "+req.params.dishID);
	res.end("dish updated with name as "+req.body.name+" and description as "+req.body.description);
});

app.delete('/dishes/:dishID', function(req, res, next){
	res.end("Deleting dish id number "+req.params.dishID+".");
});

app.listen(port, hostname, function(){
	console.log(`Server started at ${port} with hostname as ${hostname}`);
});