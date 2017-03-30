itemX = 0;
itemY = 0;
coinnumber = 0;

function item() { /* create coins */
  if (coinnumber < 5) {
    itemX = Math.floor(Math.random()*950)+50;
    itemY = Math.floor(Math.random()*550);
    fen3.innerHTML='<div class="item-coin"></div>';
    $('.item-coin').css({
      "left": itemX,
      "top": itemY
    });
  }
}

function createitem() { /* create coins loop */
  if (coinnumber < 5) {
    setTimeout(function() {
      var ran = Math.floor(Math.random()*5000)+2000;
      setTimeout(function() {
        item();
      },ran);
    },200);
  }
}

function pluscoin() { /* add score */
  startMusic(coinMusic);
  setTimeout('stopMusic(coinMusic);',1000);
  coin++;
  $('.coins-counter span').html(coin);
}

$(document).ready(function() {
  fen3 = document.querySelector(".items");
  setTimeout('createitem();',5000);
});
