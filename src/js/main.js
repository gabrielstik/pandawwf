$(document).ready(function () {
  $("#div1").fadeIn(1000, function () {
    $("#div2").fadeIn(1000, function () {
      $("#div3").fadeIn(1000, function () {
        $("#div4").fadeIn(1000)
      });
    });
  });
});

$(document).ready(function () {
  $(".button-play").mouseover(function () {
    $(".play-zone img").css("bottom", "-8px");
  });
  $(".button-play").mouseout(function () {
    $(".play-zone img").css("bottom", "-80px");
  });
});