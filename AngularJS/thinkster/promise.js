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
// function getData($timeout, $q){
// 	return function(){
// 		return $q(function(resolve, reject){
// 			$timeout(function(){
// 				if(Math.round(Math.random())){
// 					resolve("Data was received");
// 				}
// 				else{
// 					reject("Rejected.");
// 				}
// 			});
// 		});
// 	}
// }

// Promise chaining.
function getData($timeout, $q){
	return function(){
		return $q(function(resolve, reject){
			$timeout(function(){
				resolve(Math.floor(Math.random() * 10));
			});
		});
	}
}

var app = angular.module('app', []);

app.factory('getData', getData)
.run(function(getData){
	var promise = getData();
	promise.then(function(number){
		console.log(number);
		return number * 2;
	}, function(string){
		console.log(string);
	}).then(function(number){
		console.log(number);
	}).finally(function(){
		console.log("The promises were finished at: ", new Date());
	});
})


// The chain of promises is paused until the previous chain has finished.


