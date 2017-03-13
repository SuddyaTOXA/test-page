jQuery(document).ready(function($) {

    // for header-fixed padding
    var header = $('#header');
    $(window).on('load resize', function() {
        setTimeout(function() {
            var headerHeight = header.outerHeight();
            $(document.body).children('.wrapper').css('padding-top', headerHeight);
        }, 10);
    });

    // header fade
    $(function() {
        var header = $('#header');
        setTimeout(function(){
            header.addClass('show');
        },800);
    });

    // for header scrolling class
    $(window).on('load scroll resize', function() {
        var st2 = $(this).scrollTop();

        if (st2 > 0)
            header.addClass('scrolling');
        else
            header.removeClass('scrolling');
    });

	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    //for custom select
    $('select').niceSelect();

    //for search box
    $('.search-title').on('click', function () {
        $('.search-box').slideToggle(500);
    });
    $('.nice-select').on('click', function () {
        $('.search-box').slideUp(500);
    });
});