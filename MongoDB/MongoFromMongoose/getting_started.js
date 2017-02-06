var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

var db = mongoose.connection;
db.on('error', console.error.bind(console, "error while connecting"));
db.once('open', function(){
	console.log("Connection established.");

	// Schema -- this is like a database schema analogous to MySQL -- these are
	// the constrains. 
	var kittySchema = mongoose.Schema({
		name: String
	});

	// we can define methods on each document.
	kittySchema.methods.speak = function(){
		if(this.name){
			console.log("Meow name is "+this.name);
		}
		else{
			console.log("I don't have a name");
		}
	}

	// Model == this is like a table based on above schema. 
	var Kitten = mongoose.model('Kitten', kittySchema);
	// these are like rows in model(database) following the constraints defined in schema
	var silence = new Kitten({name: 'Silence'});
	console.log(silence.name);
	silence.speak();

	var fluffy = new Kitten(); 
	fluffy.speak(); // when name is not defined this.name is supposed to be false.
});