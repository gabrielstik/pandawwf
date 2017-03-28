contact = false;

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
	pandaX = 50;
	pandaY = 275;
	var speed = 3;
	var sp = 1;
	var rotateSpeed = 9;

	document.body.onkeydown = function(e) {

		if (e.keyCode == 37) { //leftArrow
			left = 1 * sp;
			contact = false;
		}

		if(e.keyCode == 38) { //upArrow
			up = 1 * sp;
			contact = false;
		}

		if (contact == false) {
			if(e.keyCode == 39) { //rightArrow
				if (contact == false) {
						right = 1 * sp;
				}
				else {
					right = 0;
				}
			}
		}

		if(e.keyCode == 40) { //downArrow
			down = 1 * sp;
			contact = false;
		}
		if (e.keyCode == 16) {
			sp = 5;
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
			if (contact == false) {
				right = 0;
			}
		}
		else if(e.keyCode == 40) { //downArrow
			down = 0;
		}
		else if(e.keyCode == 16) {
			sp = 1;
		}
	}

	setInterval(function() {
		console.log(contact);
		if (contact == false) {
			pandaX += (right - left)*speed;
			pandaY += (down - up)*speed;
		}
		else {
			pandaY += (down - up)*(speed+1);
		}
		if(pandaY < 0) {
			pandaY = 0;
		}
		if(pandaY > 600-70) {
			pandaY = 600-70;
		}
		document.querySelector(".character").style.top = pandaY+"px";
		document.querySelector(".character").style.left = pandaX+"px";
	},20);
}
