function game() {
	var move = "";
	$('#rock').click(function() {
		move = 'rock';
	$("#result").html('You chose is ' + move + '.');
	});
	$('#paper').click(function() {
		move = 'paper';
			$("#result").html('You chose is ' + move + '.');
	});
	$('#scissors').click(function() {
		move = 'scissors';
			$("#result").html('You chose is ' + move + '.');
	});
	var loses = 0;
	var wins = 0;
}
game();