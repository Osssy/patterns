// hamburger menu

$(document).ready(function() {
    let toggle = $('.navigation__toggle');
    let item = $('.navigation__item');

    toggle.click(function() {
        item.slideToggle('slow', function() {});
        $(this).find('.fa').toggleClass('fa-bars');
        $(this).find('.fa').toggleClass('fa-close');
    });

    $(window).resize(function() {
        if (window.innerWidth > 767) {
            item.show()
        } else {
            item.hide()
            toggle.find('.fa').removeClass('fa-close').addClass('fa-bars');
        }
    });
});