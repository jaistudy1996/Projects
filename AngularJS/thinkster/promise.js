// Resolve function. 

// function getData($timeout, $q){
// 	return function(){
// 		var defer = $q.defer();
// 		$timeout(function(){
// 			defer.resolve("resolved this promise");
// 		}, 2000);
// 		return defer.promise;
// 	}
// }

// Adding reject functionality.

// function getData($timeout, $q){
// 	return function(){
// 		var defer = $q.defer(); // Define a promise
// 		$timeout(function(){
// 			if(Math.round(Math.random())){
// 				defer.resolve("Data has been received.");
// 			}
// 			else{
// 				defer.reject("Rejected!");
// 			}
// 		}, 2000);
// 		return defer.promise;
// 	}
// }

// Use $q as it is. 
function getData($timeout, $q){
	return function(){
		return $q(function(resolve, reject){
			$timeout(function(){
				if(Math.round(Math.random())){
					resolve("Data was received");
				}
				else{
					reject("Rejected.");
				}
			});
		});
	}
}

var app = angular.module('app', []);

app.factory('getData', getData)
.run(function(getData){
	var promise = getData();
	promise.then(function(string){
		console.log(string);
	}, function(string){
		console.log(string);
	});
})
