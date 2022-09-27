$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});