var app = angular.module('app', []);

app.controller('control', [function control(){
	var self = this;
	self.myString = "hello world";
	self.list = [{
        name: "Eric Simons",
        born: "Chicago"
      },
      {
        name: "Albert Pai",
        born: "Taiwan"
      },
      {
        name: "Matthew Greenster",
        born: "Virginia"
      }];
}]).filter('capitalize', capitalizeFilter);

// A filter must always return a function
// And that funcation do return the final thing that needs to be done.
function capitalizeFilter(){
	return function(text){
		return text.toUpperCase();
	}
}
