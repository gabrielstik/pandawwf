function arbres() {
  arbX = Math.floor(Math.random()*900)+100;
  arbY = Math.floor(Math.random()*550);
  fen2.innerHTML+='<div class="arb-'+j+'"></div>';
  $('.arb-'+j).css({
    "left": arbX,
    "top": arbY
  });
}

function rangeearbres() {
  for (k = 0; k < 13; k++) {
    document.querySelector('.rangee-arbres-top').innerHTML+='<div class="rarbre"></div>';
    document.querySelector('.rangee-arbres-bottom').innerHTML+='<div class="rarbre"></div>';
  }
}

$(document).ready(function() {
  rangeearbres();
  fen2 = document.querySelector(".arbres");
  for (j = 0; j < nbarbres; j++) {
    arbres();
  }
});
