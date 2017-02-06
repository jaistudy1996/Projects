// Module which supports callbacks 

module.exports = function(x, y, callback){
	try{
		if(x<0 || y<0){
			throw new Error("The length and breath of the rectangle should be positive.");
		}
		else{
			callback(null, {
				perimeter: function(x, y){
					return (2*(x+y));
				},
				area: function(x, y){
					return x*y;
				}
			});
		}
	}
	catch(Error){
		callback(Error, null);
	}
}