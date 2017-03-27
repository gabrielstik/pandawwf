$(document).ready(function() {
	keyPressed();
})

function keyPressed() {
	var up = 0;
	var left = 0;
	var right = 0;
	var down = 0;
	pandaX = 0;
	pandaY = 0;
	var speed = 2;
	document.body.onkeydown = function(e) {
		if (e.keyCode == 37) { //leftArrow
			left = 1;
		}
		else if(e.keyCode == 38) { //upArrow
			up = 1;
		}
		else if(e.keyCode == 39) { //rightArrow
			right = 1;
		}
		else if(e.keyCode == 40) { //downArray
			down = 1;
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
		else if(e.keyCode == 40) { //downArray
			down = 0;
		}
	}
	setInterval(function() {
		pandaX += (right - left)*speed;
		pandaY += (down - up)*speed;
		document.querySelector(".character").style.top = pandaY+"px";
		document.querySelector(".character").style.left = pandaX+"px";
	},10);
}
