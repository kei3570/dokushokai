
const $slider = $('.slider');

$slider.slick({
  accessibility:true,
  autoplay:true,
  autoplaySpeed:3000,
  dots:true,
  
});

$(function(){
  $('.nav_toggle').on('click', function () {
$('.nav_toggle, .nav').toggleClass('show');
});
});











