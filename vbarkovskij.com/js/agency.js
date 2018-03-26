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

    $('.menu-overlay').click(function() {
        $('.navbar-toggle').click();
    });

    $(document).ready(function(){
        $('.parallax').parallax();
    });


    $('.reference-icons li').click(function() {
        var hasClass = $(this).hasClass('clicked');

        if (hasClass) {
            $(this).removeClass('clicked');
            $(this).css('transform', 'none');
        } else {
            $('.reference-icons li').removeClass('clicked').css('transform', 'none');
            $(this).addClass('clicked');

            var screenWidth = window.innerWidth;
            var count = 4;
            var margin = 15;

            if (screenWidth > 659) {
                count = 5;
                margin = 30;
            }

            if (screenWidth > 992) {
                count = 6;
                margin = 30;
            }

            var totalMargin = margin * (count - 1);
            var parentWidth = $('.reference-icons').outerWidth(true);
            var elementSize = (parentWidth - totalMargin) / count - 22;
            var newSize = elementSize * 2 + margin;
            var ratio = newSize / elementSize;

            $(this).css('transform', 'scale(' + ratio +')');
        }
    });
	
})(jQuery); // End of use strict
