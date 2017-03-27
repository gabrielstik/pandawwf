var bracodiv = document.querySelector(".braco");

$(document).ready(function() {
  spawn();
});

function spawn() {
  braco = [];
  id = 0;
  for (var i = 0; i < 10; i+=4) {
    id++;
    posY = Math.floor(Math.random()*600);
    posX = 0;
    speed = Math.floor(Math.random()*10);
    braco[i] = id;
    braco[i+1] = posY;
    braco[i+2] = posX;
    braco[i+3] = speed;
    bracodiv.innerHTML+='<div class="braco-'+id+'">'+braco[i]+','+braco[i+1]+','+braco[i+2]+','+braco[i+3]+'</div>';
    document.querySelector(".braco-"+id).style.top=posY+"px";
  }
  move();
}

function move() {
  setInterval(function() {
    for (var j = 0; j < braco.length; j+=4) {
      braco[j+2] += braco[j+3];
      document.querySelector(".braco-"+braco[j]).style.right=braco[j+2]+"px";
      console.log(braco[j+3]);
    }
  },100);
}
