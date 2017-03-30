function daisies() { /* creating daisies */
  daiX = Math.floor(Math.random()*1000);
  daiY = Math.floor(Math.random()*550);
  fen.innerHTML+='<div class="dai-'+i+'"></div>';
  $('.dai-'+i).css({
    "left": daiX,
    "top": daiY
  });
}

$(document).ready(function() {
  fen = document.querySelector(".daisies");
  for (i = 0; i < 50; i++) {
    daisies();
  }
});
