// register form

$(document).ready(function() {
    let modal = $('.modal__window, .form__register');

    $('.header__register').click(function() {
        modal.removeClass('hide');
        $('body').addClass('no-scrolled');
    });

    $('.form__cancel').click(function() {
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