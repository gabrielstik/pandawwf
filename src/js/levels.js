var level = 1;

$(document).ready(function() {
	var level = 1;
	displayLevel(level);
});

function displayLevel(level) {
	
	if(level == 1) {
		try {
			clearInterval(bracoloop);
		}
		catch(e) {}
		reset();
		setTimeout('spawn(80);',100);
	}
	
	else if(level == 2) {
		try {
			clearInterval(bracoloop);
		}
		catch(e) {}
		reset();
		setTimeout('spawn(280);',100);
		
		level = 3; 
	}
}