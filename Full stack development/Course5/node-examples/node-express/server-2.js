var express = require('express');
var morgan = require('morgan');

var port = 3000;
var hostname = 'localhost';

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
	console.log(`Server started at ${port} with hostname as ${hostname}`);
});