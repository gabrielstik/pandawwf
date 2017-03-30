function switchen() {
  en = true;
  fr = false;
  $('.fr').css({display: "none"});
  $('.en').css({display: "block"});
}

function switchfr() {
  fr = true;
  en = false;
  $('.en').css({display: "none"});
  $('.fr').css({display: "block"});
}
