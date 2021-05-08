$(document).ready(function () {
    
    $('.diets__boxes').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2500,
        mobileFirst: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 776,
                settings: {
                    slidesToShow:2
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3
                }
            },

        ],

        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
    });
})