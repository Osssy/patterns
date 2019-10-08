//clients slider

$(document).ready(function() {
    $('.clients__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});