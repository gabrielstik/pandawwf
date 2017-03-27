var bracodiv = document.querySelector(".braco");

function reset() {
  id = 0;
  braco = [];
  bracodiv.innerHTML='';
}

function spawn() {
  braco = [];
  id = 0;
  for (var i = 0; i < 80; i+=4) {
    id++;
    posY = Math.floor(Math.random()*550);
    posX = 0;
    speed = Math.random()*4+3;
    braco[i] = id;
    braco[i+1] = posY-50;
    braco[i+2] = posX;
    braco[i+3] = speed;
    bracodiv.innerHTML+='<div class="braco-'+id+'"></div>';
    document.querySelector(".braco-"+id).style.top=posY+"px";
  }
  move();
}

function move() {
  bracoloop = setInterval(function() {
    for (var j = 0; j < braco.length; j+=4) {
      braco[j+2] += braco[j+3];
      document.querySelector(".braco-"+braco[j]).style.right=braco[j+2]+"px";
    }
  },20);
}

$(document).ready(function() {
  // setInterval(function() {
    try {
      clearInterval(bracoloop);
    }
    catch(e) {}
    reset();
    setTimeout('spawn();',100);
  // },5000);
});
