jQuery(document).ready(function($) {

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
    $('.search-title').on('click touch keypress', function () {
        var input =  $('.search-box').find('input[name=s]');

        if (($(this).hasClass('open'))) {
            $(".icon").fadeOut(250, function () {
                $('.search-box').slideUp(350);
            });
            input.blur();
            $('.search-title').removeClass('open');
        } else {
            $('.search-box').slideDown(350, function(){
                $(".icon").fadeIn(250);
            });
            input.focus();
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
                itemDesc.text(itemDescText.substr(0, size) + '...');
            }
        });
    });

});