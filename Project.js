function game() {
	var loses = 0;
	var wins = 0;
	var userChoice = "";
	var winner;
	var computerChoice;

	$('#rock').click(function() {
		userChoice = 'rock';
		$("#userResult").html('You chose is ' + userChoice + '.');
	});
	$('#paper').click(function() {
		userChoice = 'paper';
		$("#userResult").html('You chose is ' + userChoice + '.');
	});
	$('#scissors').click(function() {
		userChoice = 'scissors';
		$("#userResult").html('You chose is ' + userChoice + '.');
	});

	computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
		} else {
		computerChoice = "scissors";
		}

	function compare(choice1,choice2) {
	if (choice1 == choice2) {
		return "The result is a tie!";
	} else if (choice1 == "rock"){
		if (choice2 == "scissors") {
			wins++;
			return "rock wins.";
		} else {
			loses++;
			return "sorry. paper wins.";
		}
	} else if (choice1 == "paper") {
		if (choice2 == "rock") {
			wins++;
			return "paper wins";
		} else {
			loses++;
			return "sorry. scissors win.";
		}
	} else if (choice1 == "scissors") {
		if (choice2 == "rock") {
			loses++;
			return "sorry. rock wins";
		} else {
			wins++;
			return "scissors win";
		}
	}
};

	$("#computerResult").html("The computer's chose is " + computerChoice + '.');

 winner = compare(userChoice,computerChoice);
}
game();