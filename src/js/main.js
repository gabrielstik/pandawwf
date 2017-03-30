//Fade In container
$(document).ready(function () {
  $("#div1").fadeIn(1000, function () {
    $("#div2").fadeIn(2000, function () {
      $("#div3").fadeIn(1000)
    });
  });
});


//Panda Hover Buton Animation
$(document).ready(function () {
  $(".button-play").mouseover(function () {
    $(".play-zone img").css("bottom", "-8px");
  });
  $(".button-play").mouseout(function () {
    $(".play-zone img").css("bottom", "-75px");
  });
});

//Legal Notices PopUp
$(document).ready(function () {
  $(".legals").click(function () {
    $(".overlay").fadeIn(300)
  });
});

$(document).ready(function () {
  $(".closePopup").click(function () {
    $(".overlay").fadeOut(300)
  });
});