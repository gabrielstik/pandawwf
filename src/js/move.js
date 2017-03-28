$(document).ready(function() {
	keyPressed();
})

function keyPressed() {
	var up = 0;
	var left = 0;
	var right = 0;
	var down = 0;
	var rotateUp = 180;
	var rotateDown = 0;
	var rotateLeft = 90;
	var rotateRight = 270;
	var rotateActuel = 270;
	pandaX = 0;
	pandaY = 0;
	var speed = 3;

	document.body.onkeydown = function(e) {

		if (e.keyCode == 37) { //leftArrow
			left = 1;

			var checkRotateLeft = setInterval(function() {
				if(rotateActuel < rotateLeft) {
					rotateActuel += 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateLeft) {
					rotateActuel -= 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				console.log(rotateActuel);
				if(rotateActuel == rotateLeft) {
					clearInterval(checkRotateLeft);
					rotateActuel = rotateLeft;
				}
			},10);
		}

		else if(e.keyCode == 38) { //upArrow
			up = 1;

			if(rotateActuel == 90) {
				rotateActuel = 450;
			}
			var checkRotateUp = setInterval(function() {
				if(rotateActuel < rotateUp) {
					rotateActuel += 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateUp) {
					rotateActuel -= 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				console.log(rotateActuel);
				if(rotateActuel == rotateUp) {
					clearInterval(checkRotateUp);
					rotateActuel = rotateUp;
				}
			},10);
		}

		else if(e.keyCode == 39) { //rightArrow
			right = 1;

			if(rotateActuel == 360) {
				rotateActuel = 0;
			}

			var checkRotateRight = setInterval(function() {
				if(rotateActuel < rotateRight) {
					rotateActuel += 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateRight) {
					rotateActuel -= 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}

				console.log(rotateActuel);
				if(rotateActuel == rotateRight) {
					clearInterval(checkRotateRight);
					rotateActuel = rotateRight;
				}
			},10);
		}

		else if(e.keyCode == 40) { //downArrow
			down = 1;

			var checkRotateDown = setInterval(function() {
				if(rotateActuel < rotateDown) {
					rotateActuel += 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateDown) {
					rotateActuel -= 5;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				console.log(rotateActuel);
				if(rotateActuel == rotateDown) {
					clearInterval(checkRotateDown);
					rotateActuel = rotateDown;
				}
			},10);
		}
	}


	document.body.onkeyup = function(e) {
		if (e.keyCode == 37) { //leftArrow
			left = 0;
		}
		else if(e.keyCode == 38) { //upArrow
			up = 0;
		}
		else if(e.keyCode == 39) { //rightArrow
			right = 0;
		}
		else if(e.keyCode == 40) { //downArrow
			down = 0;
		}
	}

	setInterval(function() {
		pandaX += (right - left)*speed;
		pandaY += (down - up)*speed;
		if(pandaX < 0) {
			pandaY = 0;
		}
		if(pandaY < 0) {
			pandaY = 0;
		}
		if(pandaY > 600-35) {
			pandaY = 600-35;
		}
		document.querySelector(".character").style.top = pandaY+"px";
		document.querySelector(".character").style.left = pandaX+"px";
	},10);
}
