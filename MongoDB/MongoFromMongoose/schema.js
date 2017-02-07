var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/test");


// Define schema
var blogSchema = new schema({
	title: String,
	author: String,
	body: String,
	comments: [{body: String, date: Date}],
	date: {type: Date, default: Date.now()},
	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number
	}
});

// Define a model
var Blog = mongoose.model('Blog', blogSchema);

// Define schema:
var animalSchema = schema({name: String, type: String});

animalSchema.methods.findSimilarTypes = function(callback){
	return this.model('Animal').find({type: this.type}, callback);
}

// Define a model
var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({name: "dog1", type: "dog"});
var dog2 = new Animal({name: "dog2", type: "dog"});

dog2.save(function(err, result){
	Animal.find({}, function(err, result){
		console.log(result);
	})

	Animal.find({}).remove({type:"dog"}, function(err, result){
		// 
	});
});


// This is a instance method.
dog2.findSimilarTypes(function(err, result){
	if(err){
		console.log(err);
		return;
	}
	console.log(result);
});


