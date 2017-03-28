var bracodiv = document.querySelector(".braco");
contact = false;

function reset() {
  id = 0;
  braco = [];
  bracodiv.innerHTML='';
}

function spawn(a) {
  braco = [];
  id = 0;
  for (var i = 0; i < nbbracos*4; i+=4) {
    id++;
    var type = Math.floor(Math.random()*3);
    posY = Math.floor(Math.random()*550);
    posX = Math.floor(Math.random()*3000)+1000;
    speed = Math.random()*1+3;
    braco[i] = id;
    braco[i+1] = posY;
    braco[i+2] = posX;
    braco[i+3] = speed;
    if (type == 1) {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../src/img/braco-hache.gif"/></div>';
    }
    else if (type == 2) {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../src/img/braco-couto.gif"/></div>';
    }
    else {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../src/img/braco-fusil.gif"/></div>';
    }
    document.querySelector(".braco-"+id).style.top=posY+"px";
    document.querySelector(".braco-"+id).style.left=posX+"px";
  }
  move();
}

function move() {
  bracoloop = setInterval(function() {
    for (var j = 0; j < braco.length; j+=4) {
      if (braco[j+1] - pandaY <= 50 && braco[j+1] - pandaY >= -50 && braco[j+2] - pandaX <= 50 && braco[j+2] - pandaX >= -50) {
        contact = true;
      }
      else {
        braco[j+2] -= braco[j+3];
        document.querySelector(".braco-"+braco[j]).style.left=braco[j+2]+"px";
      }
    }
  },20);
}

/*$(document).ready(function() {
  // setInterval(function() {
    try {
      clearInterval(bracoloop);
    }
    catch(e) {}
    reset();
    setTimeout('spawn();',100);
  // },5000);
});*/
