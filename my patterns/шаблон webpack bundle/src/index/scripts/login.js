// login form

$(document).ready(function() {
    let modal = $('.modal__window, .form__login');

    $('.header__login').click(function() {
        modal.removeClass('hide');
        $('body').addClass('no-scrolled');
    });

    $('.form__close').click(function() {
        modal.addClass('hide');
        $('body').removeClass('no-scrolled');
    });

    $('body').keydown(function(event) {
        if (event.keyCode == 27) {
            modal.addClass('hide');
            $('body').removeClass('no-scrolled');
        }
    });
});