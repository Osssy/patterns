//testimonials slider

$(document).ready(function() {
    $('.testimonials-slider__list').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});