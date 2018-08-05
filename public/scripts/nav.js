$(function(){
    $( ".hamburger" ).click(function() {
      $('.screen').css('opacity', '0.5');
      $('.menu-aside-container')
        .animate({
          right: '0%'
        }, 350);
    });
  
    $('.screen').click(function() {
      if ($('.screen').css('opacity') > 0) {
        $('.menu-aside-container')
        .animate({
          right: '-100%'
        }, 350)
        $('.screen').css('opacity', '0');
      }
    });
  
    $('.menu-aside-close').click(function() {
      $('.menu-aside-container')
      .animate({
        right: '-100%'
      }, 350)
      $('.screen').css('opacity', '0');
    });
  });