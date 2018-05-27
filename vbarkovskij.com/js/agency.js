// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 75)
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
        $('.navbar-toggle').click();
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
    var isMenuOpen = false;

    $('.navbar-toggle').click(function() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            $(this).removeClass('collapsed');
            $(this).attr('aria-expanded', true);
            $('.menu-overlay').removeClass('hidden');
            $('#bs-example-navbar-collapse-1').addClass('in');
            $('body').addClass('non-scrollable');
        } else {
            $(this).addClass('collapsed');
            $(this).attr('aria-expanded', false);
            $('.menu-overlay').addClass('hidden');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('body').removeClass('non-scrollable');
        }
    });

    $('.menu-overlay').click(function() {
        $('.navbar-toggle').click();
    });

    $(document).ready(function(){
        $('.parallax').parallax();
    });



    function addIconClickHandlers() {
        $('.reference-icons li').unbind('click').bind('click', function() {
            addClickHandler(this);
        });
    }

    var config = {
        screenWidth: window.innerWidth
    }

    function addClickHandler(icon) {
        var hasClass = $(icon).hasClass('clicked');

        if (hasClass) {
            $(icon).removeClass('clicked');
            $(icon).css('transform', 'none');
        } else {
            $('.reference-icons li').removeClass('clicked').css('transform', 'none');
            $(icon).addClass('clicked');

            var count = 4;
            var margin = 15;

            if (config.screenWidth > 659) {
                count = 5;
                margin = 30;
            }

            if (config.screenWidth > 992) {
                count = 6;
                margin = 30;
            }

            var totalMargin = margin * (count - 1);
            var parentWidth = $('.reference-icons').outerWidth(true);
            var elementSize = (parentWidth - totalMargin) / count - 22;
            var newSize = elementSize * 2 + margin + 1;
            var ratio = newSize / elementSize;

            $(icon).css('transform', 'scale(' + ratio +')');

            var lastRowIconsCount = $('.reference-icons li').length % count;
            if (lastRowIconsCount === 0) {
                lastRowIconsCount = count;
            }

            var lastRowIconIndex = $('.reference-icons li').length - lastRowIconsCount;
            var index = $('.reference-icons li').index(icon);
            $(icon).css('transformOrigin', '');
            if (index >= lastRowIconIndex) {
                var transform = (index + 1) % count === 0 ? 'right bottom' : 'left bottom';
                $(icon).css('transformOrigin', transform);
            }
        }
    }

    addIconClickHandlers();

    $(window).resize(function() {
        config.screenWidth = window.innerWidth;
    });
	
})(jQuery); // End of use strict
