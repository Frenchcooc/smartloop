////////////////////////////////////////////////////////////////////////
// SHOPIFY

var shopClient = ShopifyBuy.buildClient({
	accessToken: '34240ca39873c4c39bc033536dd653ad',
	domain: 'smartlooptest.myshopify.com',
	appId: '67726704709'
  });
  
  $('.add-to-cart').click(function() {
  
	  shopClient.fetchProduct('1402265337925')
	  .then(function (product) {
		
		var color = selectedColor.substr(0,1).toUpperCase()+selectedColor.substr(1);
		var size = '';//$('.phone-model').find(":selected").text();
		var quantity = 1;//parseInt($('.phone-quantity').find(":selected").text());
		console.log(color)
		  var variant = product.variants.filter(function (option) {
			  return option.title === color;
		  })[0];
  
		  console.log(variant)
		  var checkoutURL;
		  checkoutURL = variant.checkoutUrl(quantity);
		  document.location.href = checkoutURL;
	  });
  })
  
  
  ////////////////////////////////////////////////////////////////////////
  // NAVIGATION
  
  // Check "?color=" parameter from URL, display right color
  var urlColor = getUrlParameter('color');
  if (urlColor != null) {
	  $('.icon-dot').removeClass('active');
	  $('.dot'+urlColor).addClass('active');
  }
  switchColor(urlColor);
  
  
  
  ////////////////////////////////////////////////////////////////////////
  // SWITCH COLOR
  
  $('.icon-dot').click(function() {
	  $('.icon-dot').removeClass('active');
	  $(this).addClass('active');
	  switchColor($(this).attr('data-color'));
	  ga('send', 'event', 'Buy Page', 'switched color', $(this).attr('data-color'));
	  resetTimer()
  });
  
  var selectedColor;
  
  function switchColor(color) {
	  selectedColor = color;
	  switch (color) {
		case 'banana':
		  $('.prodtop').attr("src", "./public/images/buy/loop-banana.jpg");
		  break;
  
		case 'melon':
		  $('.prodtop').attr("src", "./public/images/buy/loop-melon.jpg");
		  break;
		
		case 'limonade':
		  $('.prodtop').attr("src", "./public/images/buy/loop-limonade.jpg");
		  break;

		case 'icepops':
		  $('.prodtop').attr("src", "./public/images/buy/loop-icepops.jpg");
		  break;
		
		case 'floral':
		  $('.prodtop').attr("src", "./public/images/buy/loop-floral.jpg");
		  break;
		
		case 'pride':
		  $('.prodtop').attr("src", "./public/images/buy/loop-pride.jpg");
		  break;

		case 'black':
		  $('.prodtop').attr("src", "./public/images/buy/loop-black.jpg");
		  break;

		// case 'white':
		//   $('.prodtop').attr("src", "./public/images/buy/wb.jpg");
		// //   $('.prodmid').attr("src", "./public/images/buy/ws.jpg");
		// //   $('.prodbot').attr("src", "./public/images/buy/wf.jpg");
  
		//   $('.phone-quantity').css("border-color", "beige");
		//   $('.phone-model').css("border-color", "beige");
		//   $('.add-to-cart').css("background-color", "beige");
		//   $('.add-to-cart').css("color", "black");
		//   $('.right-container .divider').css('backgroundColor', "beige");
		//   $('.features-box .title').css('color', "grey");
		//   break;
  
		// case 'clear':
		//   $('.prodtop').attr("src", "./public/images/buy/cb.jpg");
		//   $('.prodmid').attr("src", "./public/images/buy/cs.jpg");
		//   $('.prodbot').attr("src", "./public/images/buy/cf.jpg");
  
		//   $('.phone-quantity').css("border-color", "aliceblue");
		//   $('.phone-model').css("border-color", "aliceblue");
		//   $('.add-to-cart').css("background-color", "aliceblue");
		//   $('.add-to-cart').css("color", "black");
		//   $('.right-container .divider').css('backgroundColor', "aliceblue");
		//   $('.features-box .title').css('color', "grey");
		//   break;
  
		default:
		  console.log('defaulted');
		  selectedColor = 'banana';
	  }
  }
  
  function getUrlParameter(sParam) {
	  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		  sURLVariables = sPageURL.split('&'),
		  sParameterName,
		  i;
  
	  for (i = 0; i < sURLVariables.length; i++) {
		  sParameterName = sURLVariables[i].split('=');
  
		  if (sParameterName[0] === sParam) {
			  return sParameterName[1] === undefined ? true : sParameterName[1];
		  }
	  }
  };