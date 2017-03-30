level = 3;
restart = false;
gameMusic = document.querySelector("#gameMusic");
loseMusic = document.querySelector("#loseMusic");
winMusic = document.querySelector("#winMusic");

$(document).ready(function () {
  // nothing
});

function launch() {
  if (restart == true) {
    location.reload();
  }
  else {
    reset();
    nextLevel();
  }
}

function end() {
  console.log("?");
}

function nextLevel() {
  pandaX = 100;
	pandaY = 275;
	document.querySelector('.character').style.left=pandaX;
	document.querySelector('.character').style.top=pandaY;
  $('.end-window').fadeOut(100);
  setTimeout("backCount();",1000);
  stopMusic(gameMusic);
	stopMusic(winMusic);
	stopMusic(loseMusic);
}

function backCount() {
  $('.context').html('STAGE '+level);
  $('.context').fadeIn(500);
  setTimeout("$('.context').html('3');",1000);
  setTimeout("$('.context').html('2');",2000);
  setTimeout("$('.context').html('1');startMusic(gameMusic);",3000);
  setTimeout("$('.context').html('GO!');$('.context').fadeOut(500);keyPressed();",4000);
  setTimeout(function() {
    if (level == 1) {
      blocked = false;
      spawn(80);
    }
    else if (level == 2) {
      blocked = false;
      spawn(120);
    }
    else if (level == 3) {
      blocked = false;
      // spawn(160);
      spawn(1);
    }
    gagne = false;
    perdu = false;
  },4000);
}

function lose() {
  // clearInterval(moveInterval);
  blocked = true;
  clearInterval(bracoloop);
  // clearInterval(itemInterval);
  stopMusic(gameMusic);
  stopMusic(winMusic);
	startMusic(loseMusic);
  $('.end-window').css({
    "background-image": "url(../src/img/panda-triste.png)"
  });
  $('.sentence').html('You lose');
  $('.stage').fadeOut();
  $('.launch-button').html('Restart');
  restart = true;
  $('.context').html('CAUGHT');
  $('.context').fadeIn(500);
  setTimeout("$('.context').fadeOut(200);$('.end-window').fadeIn(500);",2000);
}

function win() {
  // clearInterval(moveInterval);
  blocked = true;
  clearInterval(bracoloop);
  // clearInterval(itemInterval);
  stopMusic(gameMusic);
  stopMusic(loseMusic);
	startMusic(winMusic);
  setInterval(function() {
		winMusic.addEventListener('ended', function(){
			winMusic.load();    //reload audio event (and reset currentTime!)
			winMusic.play();    //play audio event for subsequent 'ended' events
		},false);
	},100);
  $('.launch-button').html('Next level');
  if (level == 1) {
    $('.sentence').html('The giant panda has been on the endangered species list since 1990.');
  }
  else if (level == 2) {
    $('.sentence').html('From 1974-1989, half of the panda’s habitat in China’s Sichuan areas was destroyed by human activity.');
  }
  else {
    $('.sentence').html('You earn '+coinnumber+' coins saving the panda. Save him in real life by donating !');
    $('.launch-button').html('Donate');
  }
  $('.context').html('SAVED!');
  $('.context').fadeIn(500);
  level++;
  $('.context').html('SAVED!');
  setTimeout(function(){$('.context').fadeOut(1000);});
  setTimeout(function() {
    $('.context').html('STAGE '+level);
    $('.stage').html('STAGE '+level);
  },1500);
  setTimeout("$('.end-window').fadeIn(500);",2500);
}

function startMusic(music) {
	music.play();
	setInterval(function() {
		music.addEventListener('ended', function(){
			music.load();    //reload audio event (and reset currentTime!)
			music.play();    //play audio event for subsequent 'ended' events
		},false);
	},100)
}

function stopMusic(music) {
	music.pause();
	music.currentTime = 0;
}
