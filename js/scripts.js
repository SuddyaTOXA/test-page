jQuery(document).ready(function($) {

    // for header-fixed padding
    $(window).on('load resize', function() {
        var mobHeader = $('.mobile-header-box'),
            width = $(window).width();
        if (width > '991') {
            setTimeout(function() {
                $(document.body).children('.wrapper').css('padding-top', 0);
                console.log('------------------------------------------');
                console.log('width > '+ width +' no padding!!!');
            }, 10);
        } else if (width < '992'){
            setTimeout(function() {
                var headerHeight = mobHeader.outerHeight();
                console.log('------------------------------------------');
                console.log('width < '+ width +' padding-top: '+ headerHeight);
                $(document.body).children('.wrapper').css('padding-top', headerHeight);
            }, 10);
        }
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
        if (($(this).hasClass('open'))) {
            $(".icon").fadeOut(350, function () {
                $('.search-box').slideUp(500);
            });
            $('.search-title').removeClass('open');
        } else {
            $('.search-box').slideDown(500, function(){
                $(".icon").fadeIn(350);
            });
            $('.search-title').addClass('open');
        }
    });

    $('.nice-select').on('click', function () {
        $(".icon").fadeOut(350, function () {
            $('.search-box').slideUp(500);
        });
        $('.search-title').removeClass('open');
    });

    //for long item description
    $(window).on('load resize', function() {
        var size = 36,
            id = 0;
        $('.item-title').each(function () {
            var itemDesc = $(this),
                itemDescText = itemDesc.text(),
                length = itemDescText.length;
            id++;
            if(length > size){
                itemDesc.text(itemDescText.substr(0, size) + ' ...');
            }
        });
    });
});