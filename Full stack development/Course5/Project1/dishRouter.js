var express = require('express');
var router = express.Router();


router.all('/', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/html'});
	next();
});

router.get('/', function(req, res, next){
	res.end("Display all dishes");
});

router.post('/', function(req, res, next){
	res.end("Add dish named "+req.body.name+" with details "+req.body.description+" to DB.");
});

router.delete('/', function(req, res, next){
	res.end('Deleting all dishes.');
});

router.get('/:dishID', function(req, res, next){
	res.end("The dish id number "+req.params.dishID+" will be displayed.");
});

router.put('/:dishID', function(req, res, next){
	res.write("Updating dish id number "+req.params.dishID);
	res.end("dish updated with name as "+req.body.name+" and description as "+req.body.description);
});

router.delete('/:dishID', function(req, res, next){
	res.end("Deleting dish id number "+req.params.dishID+".");
});

module.exports = router;