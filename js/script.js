// ページトップのパターン
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

$(".hmenu").click(function () {
  $("nav").slideToggle(500);
  $(this).toggleClass("close");
});
