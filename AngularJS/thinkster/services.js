var myApp = angular.module('app', []);

myApp.factory('messages', [function(){
	var messages = {};
	messages.list = []
	messages.add = function(message){
		messages.list.push({id: messages.list.length, text: message});
	}
	return messages;
}]);


myApp.controller('ListCtrl', ['messages', function(messages){
	var self = this;
	self.messages = messages.list;
}]);

myApp.controller('PostCtrl', ['messages', function(messages){
	var self = this;
	self.post = function(message){
		messages.add(message);
	};
}]);