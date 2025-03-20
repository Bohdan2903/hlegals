$(function () {
  //tabs init
  $("#tabs").tabs();
  //slider init
  // $('.slider').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   lazyLoad: 'ondemand',
  //   swipeToSlide: true,
  // });

  const dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
  });

  $(".open-modal").click(function () {
    dialog.dialog("open");
  });
})
