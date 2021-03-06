var bracodiv = document.querySelector(".braco");

function reset() { // main reset function for bracos
	id = 0;
	braco = [];
	bracodiv.innerHTML='';
}

function spawn(nbbracos) { // creating bracos
  braco = [];
  id = 0;
  for (var i = 0; i < nbbracos*4; i+=4) {
    id++;
    var type = Math.floor(Math.random()*3);
    posY = Math.floor(Math.random()*550);
    posX = Math.floor(Math.random()*5000)+1000;
    speed = Math.random()*1+3;
    braco[i] = id;
    braco[i+1] = posY;
    braco[i+2] = posX;
    braco[i+3] = speed;
    if (type == 1) {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../assets/img/braco-hache.gif"/></div>';
    }
    else if (type == 2) {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../assets/img/braco-couto.gif"/></div>';
    }
    else {
      bracodiv.innerHTML+='<div class="braco-'+id+'"><img src="../assets/img/braco-fusil.gif"/></div>';
    }
    document.querySelector(".braco-"+id).style.top=posY+"px";
    document.querySelector(".braco-"+id).style.left=posX+"px";
  }
  move();
}

function move() { // bracos move
  bracoloop = setInterval(function() {
    for (var j = 0; j < braco.length; j+=4) {
      if (braco[j+1] - pandaY <= 50 && braco[j+1] - pandaY >= -50 && braco[j+2] - pandaX <= 50 && braco[j+2] - pandaX >= -20) {
        contact = true;
        pandaX = braco[j+2]-50;
        document.querySelector(".character").style.left=pandaX+"px";
      }
      braco[j+2] -= braco[j+3];
      document.querySelector(".braco-"+braco[j]).style.left=braco[j+2]+"px";
    }
  },20);
}

$(document).ready(function() {
  // setInterval(function() {
    try {
      clearInterval(bracoloop);
    }
    catch(e) {}
  // },6000);
});
