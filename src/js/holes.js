function holes() {
	var size = 0; 	
	holX = Math.floor(Math.random()*1000);
	holY = Math.floor(Math.random()*550);
	while(size < 40) {
		size = Math.floor(Math.random()*60); 
	}
	hol.innerHTML+='<div class="hol-'+i+'"></div>';
	$('.hol-'+i).css({
		"width": size,
		"height": size,
		"left": holX,
		"top": holY,
	});
}

function createHoles() {
	hol = document.querySelector(".holes");
	for (i = 0; i < nbholes; i++) {
		holes();
	}
}

function clearHoles() {
	hol = document.querySelector(".holes");
	for (i = 0; i < nbholes; i++) {
		$('.hol-'+i).remove(); 
	}
}