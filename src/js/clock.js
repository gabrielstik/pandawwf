function clockBonus() {
	do {
		clockX = Math.floor(Math.random()*500);
	} while(clockX < 300);	
	clockY = Math.floor(Math.random()*500);
	clock.innerHTML+='<div class="clock-'+i+'"></div>';
	$('.clock-'+i).css({
		"left": clockX,
		"top": clockY,
	});
}

$(document).ready(function() {
	clock = document.querySelector(".clock");
	for (i = 0; i < nbClock; i++) {
		clockBonus();
	}
});
