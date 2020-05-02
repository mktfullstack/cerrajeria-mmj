(function($) {
	
	"use strict";


    // Back to top
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    // Menu sticky
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
         $(".header-area").removeClass("sticky-header");
        }else{
         $(".header-area").addClass("sticky-header");
        }
     });
    
	
    //js code for mobile menu toggle
   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });

    // banner content animation
    $(".hero-area-1").on("translate.owl.carousel", function() {
        $(".hero-sub h1").removeClass("animated flipInX").css("opacity", "0"),
        $(".hero-sub p").removeClass("animated fadeInUp").css("opacity", "0"),
        $(".hero-sub a").removeClass("animated fadeInUp").css("opacity", "0")
    }),
    $(".hero-area-1").on("translated.owl.carousel", function() {
        $(".hero-sub h1").addClass("animated flipInX").css("opacity", "1"),
        $(".hero-sub p").addClass("animated fadeInUp").css("opacity", "1"),
        $(".hero-sub a").addClass("animated fadeInUp").css("opacity", "1")
    });

    
    //portfolio filtering

    var $portfolio = $('.portfolio');
    if ($.fn.imagesLoaded && $portfolio.length > 0) {
        imagesLoaded($portfolio, function () {
            $portfolio.isotope({
                itemSelector: '.portfolio-item',
                filter: '*'
            });
            $(window).trigger("resize");
        });
    }

    $('.portfolio-filter').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({filter: filterValue});
    });

    
    // Portfolio popup

    $(".portfolio-gallery").each(function () {
        $(this).find(".popup-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }); 

    $('.video-popup').magnificPopup({
        type: 'iframe',
    });


    // Hero Slider
    $('.hero-area-1').owlCarousel({
        loop:true,
        dots: true,
        autoplay: false,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        nav:false,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            576:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    
    //Counter-JS
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });


    // Preloader Js
    $(window).on('load', function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // Wow js active
    new WOW().init(); 
    
    
    

	
})(jQuery);