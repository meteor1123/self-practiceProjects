var numSquares = 6;
var colors = generateRandomColorArray(numSquares);
var squares = document.querySelectorAll(".square");
var target = document.querySelector("#target");
var showMessage = document.querySelector("#message");
var h1 = document.querySelector(".h1");
var reset = document.querySelector("#newColor");
var targetColor = pickColor();
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
target.textContent = targetColor;

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColorArray(numSquares);
	targetColor = pickColor();
	target.textContent = targetColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColorArray(numSquares);
	targetColor = pickColor();
	target.textContent = targetColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});



reset.addEventListener("click", function() {
	colors = generateRandomColorArray(numSquares);
	targetColor = pickColor();
	target.textContent = targetColor;
	reset.textContent = "new colors";
	showMessage.textContent = "good luck!";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});



for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	// add Event Listener "Click"
	squares[i].addEventListener("click", function() {
	// compare picked color to target color
	var pickedColor = this.style.backgroundColor;
		if (pickedColor === targetColor) {
			showMessage.textContent = "correct!";
			changeColor(targetColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "play again?";
		} else {
			this.style.backgroundColor = "#232323";
			showMessage.textContent = "try again!";
		}
	});
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColorArray(len) {
	var array = [];
	for (var i = 0; i < len; i++) {
		array[i] = randomColor();
	}
	return array;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}