function iceBonus() {
	do {
		cubX = Math.floor(Math.random()*500);
	} while(cubX < 200);	
	cubY = Math.floor(Math.random()*500);
	ice.innerHTML+='<div class="ice-'+i+'"></div>';
	$('.ice-'+i).css({
		"left": cubX,
		"top": cubY
	});
}

$(document).ready(function() {
	ice = document.querySelector(".ice");
	for (i = 0; i < nbCubes; i++) {
		iceBonus();
	}
});
