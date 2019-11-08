$(document).ready(function game() {
	var loses = 0;
	var wins = 0;
	var userChoice = "";
	var computerChoice = Math.random();

	$("#result").html(wins + ' - ' + loses);
	$('.moves').click(function() {
		userChoice = $(this).attr('value');
		setTimeout(function(){$("#userResult").html('Your chose is ' + userChoice + '.');$('.moves').attr('disabled', true);}, 0);
		setTimeout(function(){$("#computerResult").html("The computer's chose is " + opponent(computerChoice) + '.')}, 500);
		setTimeout(function(){$("#finalresult").html(compare(userChoice,opponent(computerChoice)))}, 1000);
		setTimeout(function(){$("#result").html(wins + ' - ' + loses);$('.moves').attr('disabled', false);}, 1500);
		computerChoice = Math.random();
	});


	var opponent = function(computerChoice) {
		if (computerChoice < 0.34) {
			return computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			return computerChoice = "paper";
			} else {
			return computerChoice = "scissors";
			}
	}

	function compare(choice1,choice2) {
	if (choice1 == choice2) {
		return "The result is a tie!";
	} else if (choice1 == "rock"){
		if (choice2 == "scissors") {
			wins++;
			$('#imgRock').toggle();;
			return "rock wins.";
		} else {
			$('#imgRock').toggle();;
			loses++;
			return "sorry. paper wins.";
		}
	} else if (choice1 == "paper") {
		if (choice2 == "rock") {
			wins++;
			$('#imgRock').toggle();;
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

$('#reset').click(function() {
	userChoice = ""
	wins = 0;
	loses = 0;
	computerChoice = '';
	$("#userResult").html('');
	$("#computerResult").html('');
	$("#finalresult").html('');
	$("#result").html(wins + ' - ' + loses);
})
	
});
game();