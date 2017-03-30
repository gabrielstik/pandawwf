/* lang switches */

lang = 'en';

function switchen() {
  lang = 'en';
  $('.fr').css({display: "none"});
  $('.en').css({display: "block"});
}

function switchfr() {
  lang = 'fr';
  $('.en').css({display: "none"});
  $('.fr').css({display: "block"});
  try {
    $('.sentence').html("Jouons pour sauver le panda");
  }
  catch(e) {}
}
