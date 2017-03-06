var app = angular.module('app', []);

app.directive('welcome', function(){
	return {
		restrict: "E",
		template: "<div>Howdy there! You look splendid. From inside a directive.</div>"
	}
});
