// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav : true
});

// owl.on('mousewheel', '.owl-stage', function (e) {
//   if (e.deltaY>0) {
//       owl.trigger('next.owl');
//   } else {
//       owl.trigger('prev.owl');
//   }
//   e.preventDefault();
// });
