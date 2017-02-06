var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var port = 3000;
var hostname = 'localhost';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

var dishes = require('./dishRouter.js');
var promo = require('./promoRouter.js');
var leaders = require('./leaderRouter.js');

app.use('/dishes', dishes);
app.use('/promotions', promo);
app.use('/leadership', leaders);

app.listen(port, hostname, function(){
	console.log(`Server started at ${port} with hostname as ${hostname}`);
});