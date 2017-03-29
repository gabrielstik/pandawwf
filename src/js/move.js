contact = false;
perdu = false;
gagne = false;

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
		if (down != 0 && left == 0 && right == 0) {
			$(".character").css("transform","rotate(0deg)");
		}
		else if (down != 0 && left != 0 && right == 0) {
			$(".character").css("transform","rotate(45deg)");
		}
		else if (down != 0 && left == 0 && right != 0) {
			$(".character").css("transform","rotate(305deg)");
		}
		else if (up != 0 && left == 0 && right == 0) {
			$(".character").css("transform","rotate(180deg)");
		}
		else if (up != 0 && left != 0 && right == 0) {
			$(".character").css("transform","rotate(135deg)");
		}
		else if (up != 0 && left == 0 && right != 0) {
			$(".character").css("transform","rotate(225deg)");
		}
		else if (left != 0) {
			$(".character").css("transform","rotate(90deg)");
		}
		else if (right != 0) {
			$(".character").css("transform","rotate(270deg)");
		}
		if (pandaX <= -25) {
			if (perdu == false) {
				perdu = true;
				lose();
				// reset();
			}
		}
		if (pandaX >= 1025) {
			if (gagne == false) {
				gagne = true;
				win();
				// reset();
			}
		}
	},20);
}
