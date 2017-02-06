// using callbackModule.js

var rect = require("./callbackModule");

// rect(5, 6, function(err, rectangle){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log("The area of the rectangle is: " + rectangle.area());
// 		console.log("The perimeter of the rectangle is: " + rectangle.perimeter());
// 	}
// });

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, function(err,rectangle) {
        if (err) {
	    console.log(err);
	}
	else {
	    console.log("The area of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.area(l, b));
            console.log("The perimeter of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.perimeter(l, b));
	}
    });
};

solveRect(2,4);


// rect(5, 6);
// rect(-5, 7);