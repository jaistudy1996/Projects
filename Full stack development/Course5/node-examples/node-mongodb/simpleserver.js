var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connect to MongoDB
var url = 'mongodb://localhost:27017/conFusion';

// Connecting to server collection.
MongoClient.connect(url, function(err, db){
	assert.equal(err, null);
	console.log("Connection successful");

	var collection = db.collection('dishes');

	collection.insertOne({name: "DishName-1", description: "About dish 1"}, function(err, result){
		assert.equal(err, null);
		console.log("Insert complete.");
		console.log(result.ops);

		collection.find({}).toArray(function(err, docs){
			assert.equal(err, null);
			console.log("Found docs are: ");
			console.log(docs);

			db.dropCollection("dishes", function(err, result){
				assert.equal(err, null);
				db.close();
			});
		});
	});
});