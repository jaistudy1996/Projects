
var rect = {
	perimeter: function(x, y){
		return (2*(x+y));
	},
	area: function(x, y){
		return x*y;
	}
};

var solve = function(l, b){
	console.log("Length is: " + l + " and breadth is: " + b);
	if(l<0 || b<0){
		console.log("Dimensions should only be positive.");
	}
	else{
		console.log("Perimeter of the rectangle is: " + rect.perimeter(l, b));
		console.log("Area of the rectangle is: " + rect.area(l, b));
	}
};


solve(5, 6);
solve(-5, 7);