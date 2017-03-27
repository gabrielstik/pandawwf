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
	document.body.onkeydown = function(e) {
		if (e.keyCode == 37) { //leftArrow
			left = 1;
			console.log("hello");
			console.log(left);
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
			console.log(left)
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
		x += (right - left)*15; 
		y += (down - up)*15;
		console.log(x);
		console.log(y);
		document.querySelector(".character").style.top = y+"px";
		document.querySelector(".character").style.left = x+"px";
	},10);
}
