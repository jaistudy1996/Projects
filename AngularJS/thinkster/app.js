var app = angular.module("app", []) // this array is used to define dependencies on oteher modules/


app.controller('mainCtrl', [function(){
	// $scope.message = "Hello controller"; 
	// using scope directly can cause inheritance problems
	var self = this;
	self.message = "Hello controller";

	self.updateMessage = function(message){
		self.message = message;
	}
}])