function wandBonus() {
	wandX = Math.floor(Math.random()*200);
	wandY = Math.floor(Math.random()*500);
	wand.innerHTML+='<div class="wand-'+i+'"></div>';
	$('.wand-'+i).css({
		"left": wandX,
		"top": wandY,
	});
}

$(document).ready(function() {
	wand = document.querySelector(".wand");
	for (i = 0; i < nbWand; i++) {
		wandBonus();
	}
});
