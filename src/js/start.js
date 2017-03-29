level = 0;

$(document).ready(function () {
  nextLevel();
});

function nextLevel() {
  $('.morale').fadeOut(100);
  $('.context').html('NIV. '+level);
  setTimeout("backCount();",1000);
}

function backCount() {
  $('.context').html('3');
  setTimeout("$('.context').html('2');",1000);
  setTimeout("$('.context').html('1');",2000);
  setTimeout("$('.context').html('GO!');$('.context').fadeOut(500);spawn();keyPressed();",3000);
}

function lose() {
  $('.context').html('CAPTURÉ...');
  $('.context').fadeIn(500);
  setTimeout("$('.context').fadeOut(200);$('.morale').fadeIn(500);",2000);
}

function win() {
  $('.context').html('SAUVÉ!');
  $('.context').fadeIn(500);
  setTimeout("$('.context').fadeOut(200);$('.morale').fadeIn(500);",2000);
  level++;
}
