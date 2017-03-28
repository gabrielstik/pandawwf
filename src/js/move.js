$(document).ready(function() {
	keyPressed();
})

function keyPressed() {
	var up = 0;
	var left = 0;
	var right = 0;
	var down = 0;
	var rotateUp = 360;
	var rotateDown = 180;
	var rotateLeft = 270;
	var rotateRight = 90;
	var rotateActuel = 90;
	var speed = 3;
	var rotateSpeed = 9; 

	document.body.onkeydown = function(e) {

		if (e.keyCode == 37) { //leftArrow
			left = 1;

			var checkRotateLeft = setInterval(function() {
				if(rotateActuel < rotateLeft) {
					rotateActuel += rotateSpeed;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateLeft) {
					rotateActuel -= rotateSpeed;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				console.log(rotateActuel);
				if(rotateActuel == rotateLeft) {
<<<<<<< HEAD
					clearInterval(checkRotateLeft); 
=======
					clearInterval(checkRotateLeft);
					rotateActuel = rotateLeft;
>>>>>>> cbcf005d58ccf5368e09c73201dd82f9b62c0c9f
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
					rotateActuel += rotateSpeed;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateUp) {
					rotateActuel -= rotateSpeed;
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
					rotateActuel += rotateSpeed;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateRight) {
					rotateActuel -= rotateSpeed;
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
					rotateActuel += rotateSpeed;
					document.querySelector(".character").style.transform = "rotate(" + rotateActuel + "deg)";
				}
				else if(rotateActuel > rotateDown) {
					rotateActuel -= rotateSpeed;
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

<<<<<<< HEAD
=======

>>>>>>> cbcf005d58ccf5368e09c73201dd82f9b62c0c9f
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
<<<<<<< HEAD
		pandaX += (right - left)*speed;
		pandaY += (down - up)*speed;
		document.querySelector(".character").style.top = pandaY+"px";
		document.querySelector(".character").style.left = pandaX+"px";
=======
		x += (right - left)*speed;
		y += (down - up)*speed;
		if(x < 0) {
			x = 0;
		}
		if(y < 0) {
			y = 0;
		}
		if(y > 600-35) {
			y = 600-35;
		}
		document.querySelector(".character").style.top = y+"px";
		document.querySelector(".character").style.left = x+"px";
>>>>>>> 629b84a8caa58c6d85da7806be2d597c44c1ca57
	},10);
}
