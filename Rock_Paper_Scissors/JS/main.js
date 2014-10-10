var userChoice = "paper";
var computerChoice = "rock";

var userWins = ["rockscissors", "paperrock", "scissorspaper"];

varChoices = choices[Math.random()*choices.length];

function evaluate() {
	var msg = "Computer Wins!";

	if(userChoice==computerChoice) {
		msg = 'it is a tie!';
	} else {

		var outcome = userChoice + computerChoice;
		$.each(userWins, function(index, value) {

			$.each(userWins, function(index, value) {
				if (outcome==value){
					msg= "You Win!"
				}
			});

			return msg;
		}
		var outcome = evaluate();
		alert(evaluate());



_______________________________________________

var userWins = []