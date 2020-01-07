$(document).ready(function() {

  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });
  
  $('a').bind("click", function(e){
    var anchor = $(this);
    var hh = 70; //header height

    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - hh + 'px'
    }, 750);
    e.preventDefault();

  // active item menu
    $('a.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

});



