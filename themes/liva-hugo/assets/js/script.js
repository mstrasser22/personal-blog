  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    $('.featured-post-slider').slick({
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });

    // venobox initialize
    $('.venobox').venobox();
	
	// newsletter
	$('#newsletter').on('click', function() {
		const emaildata = $('#newsletterEmail').val();
		const url = 'https://newsletterfuncapp.azurewebsites.net/api/AddNewsletterEmail?code=OQR48lOOdv2qb7jJqOK1AVP6DwXzoqpeAn7gX32FYEIwq4bj05IPQA==';
		
		$.ajax(url, {
			data: JSON.stringify({email: $('#newsletterEmail').val() }),
			type: "POST",
			contentType: "application/json; charset=UTF-8",
			
			Success: function(msg){
				$('#success').text('Anmeldung erfolgreich');
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$('#success').text('Anmeldung fehlgeschlagen');
			}
		});	
      })

  })(jQuery);