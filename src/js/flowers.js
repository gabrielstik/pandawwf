function paquerettes() {
  paqX = Math.floor(Math.random()*1000);
  paqY = Math.floor(Math.random()*550);
  fen.innerHTML+='<div class="paq-'+i+'"></div>';
  $('.paq-'+i).css({
    "left": paqX,
    "top": paqY
  });
}

$(document).ready(function() {
  fen = document.querySelector(".paquerettes");
  for (i = 0; i < nbpaquerettes; i++) {
    paquerettes();
  }
});
