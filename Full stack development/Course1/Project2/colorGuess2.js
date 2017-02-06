var colors = ["black", "gray", "green", "lime", "maroon", "olive", "red", "silver", "yellow"];
alert("Color guessing game!");
var target = "";
var guess = false;
var totalGuess = 0

function do_game(){
	target = colors[Math.floor(Math.random() * colors.length)];
	alert(target);
	while(!guess){
		userGuess = prompt("I am thinking on one of these colors.\n\n" + colors.join(", ") + "\n\nWhat color I am thinking of?");
		totalGuess++;
		check_guess();
	}
}

function check_guess(){
	if(colors.indexOf(userGuess) == -1){
		alert("I don't recognize that color!");
		return;
	}
	else{
		if(colors.indexOf(target) == colors.indexOf(userGuess)){
			document.body.style.backgroundColor = userGuess;
			guess = true;
			alert("You are right!. You took "+totalGuess+" guesses!");
			return;
		}
		if(colors.indexOf(target) > colors.indexOf(userGuess)){
			alert("Your input is alphabetically lower than mine!");
			return;
		}
		else{
			alert("Your input in alphabetically higher than mine!");
			return;
		}
	}
}