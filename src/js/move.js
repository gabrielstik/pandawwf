$(document).ready(function() {
	keyPressed();
})

function keyPressed() {
	var up = 0;
	var left = 0;
	var right = 0;
	var down = 0;
	var x = 0;
	var y = 0;
	var speed = 2;
	document.body.onkeydown = function(e) {
		if (e.keyCode == 37) { //leftArrow
			left = 1;
			console.log(x); 
		}
		else if(e.keyCode == 38) { //upArrow
			up = 1;
			console.log(y); 
		}
		else if(e.keyCode == 39) { //rightArrow
			right = 1;
			console.log(x); 
		}
		else if(e.keyCode == 40) { //downArray
			down = 1;
			console.log(y); 
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
	},10);
}
