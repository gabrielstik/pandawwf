level = 1;
restart = false;
gameMusic = document.querySelector("#gameMusic");
loseMusic = document.querySelector("#loseMusic");
winMusic = document.querySelector("#winMusic");
character = document.querySelector('.character');

function launch() { /* At the start of the game */
  if (restart == true) {
    location.reload();
  }
  else {
    reset();
    nextLevel();
  }
}

function nextLevel() { /* reset coords and windows if next level */
  pandaX = 100;
	pandaY = 275;
	character.style.left=pandaX;
	character.style.top=pandaY;
  $('.end-window').fadeOut(100);
  setTimeout("backCount();",1000);
  stopMusic(gameMusic);
	stopMusic(winMusic);
	stopMusic(loseMusic);
}

function backCount() { /* backcount before start */
  if (lang == 'fr') { /* for lang */
    $('.context').html('NIV '+level);
  }
  else {
    $('.context').html('STAGE '+level);
  }
  $('.context').fadeIn(500);
  setTimeout("$('.context').html('3');",1000);
  setTimeout("$('.context').html('2');",2000);
  setTimeout("$('.context').html('1');startMusic(gameMusic);",3000);
  setTimeout("$('.context').html('GO!');$('.context').fadeOut(500);keyPressed();",4000);
  setTimeout(function() {
    switch(level) { /* spawn rate after timeout */
      case 1:
        blocked = false;
        spawn(80);
        break;
      case 2:
        blocked = false;
        spawn(120);
        break;
      case 3:
        blocked = false;
        spawn(160);
        break;
    }
    gagne = false;
    perdu = false;
  },4000);
}

function lose() { /* in case of lose */
  blocked = true; /* make the panda can't move */
  clearInterval(bracoloop);
  stopMusic(gameMusic);
  stopMusic(winMusic);
	startMusic(loseMusic);
  $('.end-window').css({
    "background-image": "url(../assets/img/panda-triste.png)"
  });
    if (lang == 'fr') {
    $('.sentence').html("Vous ne l'avez pas sauvé. Sauvez les en vrai, faites un don !");
  }
  else {
    $('.sentence').html("You didn't save him. Save them in real life, donate !");
  }
  $('.stage').fadeOut();
  if (lang == 'fr') {
    $('.launch-button').html('Rééssayer');
  }
  else {
    $('.launch-button').html('Restart');
  }
  restart = true;
  if (lang == 'fr') {
    $('.context').html('CAPUTURÉ');
  }
  else {
    $('.context').html('CAUGHT');
  }
  $('.context').fadeIn(500);
  setTimeout("$('.context').fadeOut(200);$('.end-window').fadeIn(500);",2000);
}

function win() { /* in case of win */
  blocked = true;
  clearInterval(bracoloop);
  stopMusic(gameMusic);
  stopMusic(loseMusic);
	startMusic(winMusic);
  setInterval(function() { /* music managing */
		winMusic.addEventListener('ended', function(){
			winMusic.load();    //reload audio event (and reset currentTime!)
			winMusic.play();    //play audio event for subsequent 'ended' events
		},false);
	},100);
  if (lang == 'fr') {
    $('.launch-button').html('Niveau suivant');
  }
  else {
    $('.launch-button').html('Next level');
  }
  if (level == 1) {
    if (lang == 'fr') {
      $('.sentence').html('Le panda géant a été ajouté à la liste des espèces menacées dès 1990.');
    }
    else {
      $('.sentence').html('The giant panda has been on the endangered species list since 1990.');
    }
  }
  else if (level == 2) {
    if (lang == 'fr') {
      $('.sentence').html("De 1974 à 1989, la moitié des habitats en Chine a été détruite par l'activité humaine.");
    }
    else {
      $('.sentence').html('From 1974 to 1989, half of the panda’s habitat in China’s Sichuan areas was destroyed by human activity.');
    }
  }
  else {
    if (lang == 'fr') {
      $('.sentence').html('Vous avez gagné '+coin+' en sauvant le panda ; sauvez les vraiment en faisant un don !<br/>Si vous faites un don, '+coin+'€ seront ajoutés à votre don!');
    }
    else {
      $('.sentence').html('You earn '+coin+' coins saving the panda. Save him in real life by donating !<br/>If you donate, '+coin+'€ would be added !');
    }
    if (lang == 'fr') {
      $('.launch-button').html('Faire un don');
      $('.launch-button').attr('onclick','window.location="https://faireundon.wwf.fr/"');
    }
    else {
      $('.launch-button').html('Donate');
      $('.launch-button').attr('onclick','window.location="https://faireundon.wwf.fr/"');
    }
  }
  if (lang == 'fr') {
    $('.context').html('SAUVÉ!');
  }
  else {
    $('.context').html('SAVED!');
  }
  $('.context').fadeIn(500);
  level++;
  if (lang == 'fr') {
    $('.context').html('SAUVÉ!');
  }
  else {
    $('.context').html('SAVED!');
  }
  setTimeout(function(){$('.context').fadeOut(1000);});
  setTimeout(function() {
    if (lang == 'fr') {
      $('.context').html('NIV '+level);
      $('.context').html('NIV '+level);
    }
    else {
      $('.context').html('STAGE '+level);
      $('.context').html('STAGE '+level);
    }
  },1500);
  setTimeout("$('.end-window').fadeIn(500);",2500);
}

function startMusic(music) {
	music.play();
}

function stopMusic(music) {
	music.pause();
	music.currentTime = 0;
}
