var express = require('express');
var router = express.Router();


router.all('/', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/html'});
	next();
});

router.get('/', function(req, res, next){
	res.end("Display all leaders");
});

router.post('/', function(req, res, next){
	res.end("Add leader named "+req.body.name+" with details "+req.body.description+" to DB.");
});

router.delete('/', function(req, res, next){
	res.end('Deleting all leaders.');
});

router.get('/:leaderID', function(req, res, next){
	res.end("The leader id number "+req.params.leaderID+" will be displayed.");
});

router.put('/:leaderID', function(req, res, next){
	res.write("Updating leader id number "+req.params.leaderID);
	res.end("leader updated with name as "+req.body.name+" and description as "+req.body.description);
});

router.delete('/:leaderID', function(req, res, next){
	res.end("Deleting leader id number "+req.params.leaderID+".");
});

module.exports = router;