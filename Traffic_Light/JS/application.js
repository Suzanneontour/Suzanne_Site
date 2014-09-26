 
function buttonClick(turnOnLight) {
	var redElem = document.getElementById('red');
	var orangeElem = document.getElementById('orange');
	var greenElem = document.getElementById('green');

	redElem.style.backgroundColor = "white";
	orangeElem.style.backgroundColor = "white";
	greenElem.style.backgroundColor = "white";

	if (turnOnLight == 'stop') {
		redElem.style.backgroundColor = "red";
	} else if (turnOnLight == 'caution') {
		orangeElem.style.backgroundColor = "orange";
	} else {
		greenElem.style.backgroundColor = "green";
	}
}
