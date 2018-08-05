$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
  
    // Main page
    if ($('body').attr('class') == 'main') {
        if (scroll_pos > 650) {
            color();
        } else {
            white();
        }
    }
  
    // Buy page
    if ($('body').attr('class') == 'buy' && window.innerWidth < 700) {
        if (scroll_pos > 320) {
          color()
        } else {
          white()
        }
    }
  });
  
  function color() {
      $('.mnz').css('color', '#f5536e');
      if ($('body').attr('class') == 'main')
          $('.buy-btn').css({'backgroundColor': '#f5536e', 'color': 'white'});
      $('.cart').attr("src", "assets/icons/cart-colored.svg");
      $('.navbolty').attr("src", "./public/icons/bolt-colored.svg");
      $('.selected-page').css("border-bottom", '3px solid #f5536e');
  }
  
  function white() {
      $('.mnz').css('color', 'white');
      if ($('body').attr('class') == 'main')
          $('.buy-btn').css({'backgroundColor': 'white', 'color': '#f5536e'});
      $('.cart').attr("src", "assets/icons/cart.svg");
      $('.navbolty').attr("src", "./public/icons/bolt.svg");
      $('.selected-page').css("border-bottom", '3px solid white');
  }