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

// This is a instance method.
animalSchema.methods.findSimilarTypes = function(callback){
	return this.model('Animal').find({type: this.type}, callback);
}

// This is a statis method.  == work with Model.
animalSchema.statics.findByName = function(name, callback){
	return this.find({name: new RegExp(name, 'i')}, callback);
}

// Query Helper
animalSchema.query.fingByName = function(name){
	return this.find({name: new RegExp(name, 'i')});
}

// Creating an index
animalSchema.index({name: 1}); // This is on schema level.

// Setting up Virtuals: they are getters and setters that only persist in mongoose.
animalSchema.virtual('fullName').get(function(){
	return this.name + ' ' + this.type;
});

// Define a model
var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({name: "dog1", type: "dog"});
var dog2 = new Animal({name: "dog2", type: "dog"});

dog2.save(function(err, result){
	Animal.find({}, function(err, result){
		console.log(result);
	})

	// Instance method
	dog2.findSimilarTypes(function(err, result){
		if(err){
			console.log(err);
			return;
		}
		console.log(result);
	});

	// Static method
	Animal.findByName('g', function(err, result){
		console.log(result);
		Animal.find({}).remove({type:"dog"}, function(err, result){});
	});

	// Query helper
	Animal.find().byName('fido').exec(function(err, animals) {
  		console.log(animals);
	});
});


