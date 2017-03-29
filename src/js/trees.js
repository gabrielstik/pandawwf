// Generates trees

function trees() {
  treX = Math.floor(Math.random()*900)+100;
  treY = Math.floor(Math.random()*550);
  fen2.innerHTML+='<div class="tre-'+j+'"></div>';
  $('.tre-'+j).css({
    "left": treX,
    "top": treY
  });
}

// Generates trees rows

function rowtrees() {
  for (k = 0; k < 13; k++) {
    document.querySelector('.row-trees-top').innerHTML+='<div class="row-tree"></div>';
    document.querySelector('.row-trees-bottom').innerHTML+='<div class="row-tree"></div>';
  }
}

$(document).ready(function() {
  rowtrees();
  fen2 = document.querySelector(".trees");
  for (j = 0; j < nbtrees; j++) {
    trees();
  }
});
