var colors = ["black", "gray", "green", "lime", "maroon", "olive", "red", "silver", "yellow"];
alert("Color guessing game!");
var target = "";
var guess = false;

function do_game(){
	target = colors[Math.floor(Math.random() * colors.length)];
	alert(target);
	while(!guess){
		userGuess = prompt("I am thinking on one of these colors.\n\n" + colors.join(", ") + "\n\nWhat color I am thinking of?");
		if(target == userGuess){
			guess  = true;
		}
		if(userGuess == "kill"){
			guess  = true; // for debugging purpose only.
		}
	}
}