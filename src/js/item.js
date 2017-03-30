itemX = 0;
itemY = 0;
coinnumber = 0;

function item() {
  itemX = Math.floor(Math.random()*950)+50;
  itemY = Math.floor(Math.random()*550);
  fen3.innerHTML='<div class="item-coin"></div>';
  $('.item-coin').css({
    "left": itemX,
    "top": itemY
  });
}

function createitem() {
  if (coinnumber < 5) {
    setTimeout(function() {
      var ran = Math.floor(Math.random()*5000)+2000;
      setTimeout(function() {
        item();
      },ran);
    },200);
  }
}

function pluscoin() {
  coin++;
  $('.coins-counter span').html(coin);
}

$(document).ready(function() {
  fen3 = document.querySelector(".items");
  setTimeout('createitem();',5000);
});
