iceX = 0;
iceY = 0;
fen4 = document.querySelector('.ices');

function ice() {
  iceX = Math.floor(Math.random()*950)+50;
  iceY = Math.floor(Math.random()*550);
  fen4.innerHTML='<div class="ice-o"></div>';
  $('.ice-o').css({
    "left": iceX,
    "top": iceY
  });
}

function createice() {
  if (coinnumber < 5) {
    setTimeout(function() {
      var ran = Math.floor(Math.random()*5000)+2000;
      setTimeout(function() {
        ice();
      },ran);
    },200);
  }
}

setTimeout(createice,5000);

function iceeffect() {
  clearInterval(bracoloop);
  setTimeout(move,1500);
}
