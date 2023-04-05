/*Jquery*/
(function ($){
    "use strict";

    //header carousel
    $('.header-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText:[
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    //Test carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1600,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items: 1
            },
            992:{
                items: 2
            }
        }
    });

    //sticky navbar
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.nav-bar').addClass('sticky-top');
        }else{
            $('.nav-bar').removeClass('sticky-top');
        }
    })
})(jQuery);