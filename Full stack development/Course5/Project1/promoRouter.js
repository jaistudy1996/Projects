var express = require('express');
var router = express.Router();


router.all('/', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/html'});
	next();
});

router.get('/', function(req, res, next){
	res.end("Display all promotions");
});

router.post('/', function(req, res, next){
	res.end("Add promotion named "+req.body.name+" with details "+req.body.description+" to DB.");
});

router.delete('/', function(req, res, next){
	res.end('Deleting all promotions.');
});

router.get('/:promoID', function(req, res, next){
	res.end("The promotion id number "+req.params.promoID+" will be displayed.");
});

router.put('/:promoID', function(req, res, next){
	res.write("Updating promotion id number "+req.params.promoID);
	res.end("promotion updated with name as "+req.body.name+" and description as "+req.body.description);
});

router.delete('/:promoID', function(req, res, next){
	res.end("Deleting promotion id number "+req.params.promoID+".");
});

module.exports = router;