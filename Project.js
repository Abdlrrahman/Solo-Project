//this is the main main function wich holdes all the operations.
$(document).ready(function game() {
	//these varibles are used through out the function to evaluate the operations ans the score of the game.
	var loses = 0;
	var wins = 0;
	var userChoice = "";
	//the computerChoice varible uses Math.random() function to get a value from 0 t0 1 randomly.
	var computerChoice = Math.random();

	//this is the result box it will display the score of the game using the varibles.
	$("#result").html(wins + ' - ' + loses);
	//when you click on any button the varible userChoice will take it's value since each button has its own value but there all connected via the class.
	$('.moves').click(function() {
		//here the first there result boxes wich are userResult and computerResult and finalresult are emptied each time a button is clicked so that the user doesn't get confuse.
		$("#userResult").html('');
		$("#computerResult").html('');
		$("#finalresult").html('');
		//the userChoice takes the value of the moves buttons 
		userChoice = $(this).attr('value');
		//here there is a delay in the results so the copmuter's choices always appers after te user's choices and the buttons will be disabled after the first click untill the entire result appers then they will be enabled again. 
		setTimeout(function(){$("#userResult").html('Your chose is ' + userChoice + '.');$('.moves').attr('disabled', true);}, 0);
		setTimeout(function(){$("#computerResult").html("The computer's chose is " + opponent(computerChoice) + '.')}, 500);
		setTimeout(function(){$("#finalresult").html(compare(userChoice,opponent(computerChoice)))}, 1000);
		setTimeout(function(){$("#result").html(wins + ' - ' + loses);$('.moves').attr('disabled', false);}, 1500);
		computerChoice = Math.random();
	});


	//this function is responsible for returning the computer's choice
	var opponent = function(computerChoice) {
		if (computerChoice < 0.34) {
			return computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			return computerChoice = "paper";
			} else {
			return computerChoice = "scissors";
			}
	}

	//this function takes tow values and copmaers them to each other to see which is greater.
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

//when the reset button is clicked everthing return as an empty string or a zero.
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
//here the function is invaoced in order for it to work.
game();