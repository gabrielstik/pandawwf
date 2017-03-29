function moneyBonus() {
	do {
		monX = Math.floor(Math.random()*900);
	} while(monX < 600);	
	monY = Math.floor(Math.random()*500);
	mon.innerHTML+='<div class="mon-'+i+'"></div>';
	$('.mon-'+i).css({
		"left": monX,
		"top": monY,
	});
}

$(document).ready(function() {
	mon = document.querySelector(".money");
	for (i = 0; i < nbMoney; i++) {
		moneyBonus();
	}
});
