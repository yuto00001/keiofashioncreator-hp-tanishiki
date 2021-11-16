$(function () {
  $(".slider").slick({
    // autoplay: true,
    // autoplaySpeed: 6500,
    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $(".slick-prev").text("≪");
  $(".slick-next").text("≫");
  var width = $('.slick-slide').css('width');
});
