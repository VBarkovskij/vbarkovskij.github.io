// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 750, 'linear');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
	})

	var expandButton = $('.expand-more');

	expandButton.click(function(e) {
		var parent = $(e.target).parent();
		var hiddable = parent.find('.hiddable:not(.shown)').first();

		if (hiddable.length > 0) {
			hiddable.addClass('shown');
		}

		hiddable = parent.find('.hiddable:not(.shown)').first();
		console.log(hiddable);

		if (hiddable.length === 0) {
			$(e.target).css('display', 'none')
		}
	});

	$('.expertise-dropdown').click(function() {

        $('.expertise-dropdown').removeClass('open');
        $(this).addClass('open');

    }).find('.dropdown-menu').click(function() {
        return false;
    });

	$('.dropdown-close').click(function() {
	   $(this).parent().parent().removeClass('open');
    });

    var options = {
        strings: ['Digital', 'Physical'],
        typeSpeed: 150,
        loop: true,
        showCursor: false,
        backSpeed: 50,
        backDelay: 1500
    };

    var typed = new Typed(".dynamic-phrase", options);

    $('.navbar-toggle').click(function() {
        $('.menu-overlay').toggleClass('hidden');
    });
	
})(jQuery); // End of use strict
