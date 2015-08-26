var answer = prompt("Please pick a number from 1-100");

function numRequired() {
	answer = prompt("Please pick a number from 1-100");
}

if (isNaN(+answer)) {
	alert("Please supply a number.");
	numRequired();
	} else if (answer % 1 != 0) {
	alert("Please supply a whole number.");
	numRequired();
	} 

var ul = document.createElement("ul");
document.getElementById("ouput").appendChild(ul);

function fizzbuzz(answer) {
	for (var i = 1; i <= +answer; i++) {
		el = document.createElement("li");
			if (i % 15 === 0) {
			el.textContent = "fizzbuzz";
			}
		else if (i % 3 === 0) {
			el.textContent = "fizz";
			}
		else if (i % 5 === 0) {
			el.textContent = "buzz";
			} 
		else {
			el.textContent = i;
			}
			ul.appendChild(el);
		}
	}

fizzbuzz(answer);