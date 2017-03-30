level = 1;
restart = false;

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
  alert("todo");
}

function nextLevel() {
  pandaX = 100;
	pandaY = 275;
	document.querySelector('.character').style.left=pandaX;
	document.querySelector('.character').style.top=pandaY;
  $('.end-window').fadeOut(100);
  setTimeout("backCount();",1000);
}

function backCount() {
  $('.context').html('STAGE '+level);
  $('.context').fadeIn(500);
  setTimeout("$('.context').html('3');",1000);
  setTimeout("$('.context').html('2');",2000);
  setTimeout("$('.context').html('1');",3000);
  setTimeout("$('.context').html('GO!');$('.context').fadeOut(500);keyPressed();",4000);
  setTimeout(function() {
    if (level == 1) {
    spawn(80);
    }
    else if (level == 2) {
      spawn(160);
    }
    else if (level == 3) {
      end();
    }
    gagne = false;
    perdu = false;
  },3000);
}

function lose() {
  // clearInterval(moveInterval);
  clearInterval(bracoloop);
  // clearInterval(itemInterval);
  $('.sentence').html('You lose');
  $('.stage').fadeOut();
  $('button').html('Restart');
  restart = true;
  $('.context').html('CAUGHT');
  $('.context').fadeIn(500);
  setTimeout("$('.context').fadeOut(200);$('.end-window').fadeIn(500);",2000);
}

function win() {
  // clearInterval(moveInterval);
  clearInterval(bracoloop);
  // clearInterval(itemInterval);
  $('button').html('Next level');
  if (level == 1) {
    $('.sentence').html('The giant panda has been on the endangered species list since 1990.');
  }
  else if (level == 2) {
    $('.sentence').html('From 1974-1989, half of the panda’s habitat in China’s Sichuan areas was destroyed by human activity.');
  }
  else if (level == 3) {
    $('.sentence').html('From 1974-1989, half of the panda’s habitat in China’s Sichuan areas was destroyed by human activity.');
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
