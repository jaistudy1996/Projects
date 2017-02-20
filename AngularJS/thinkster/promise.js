function getData($timeout, $q){
	return function(){
		var defer = $q.defer();
		$timeout(function(){
			defer.resolve("resolved this promise");
		}, 2000);
		return defer.promise;
	}
}

var app = angular.module('app', []);

app.factory('getData', getData)
.run(function(getData){
	var promise = getData();
	promise.then(function(string){
		console.log(string);
	});
})
