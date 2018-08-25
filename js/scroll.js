(function(){
    'use strict';

    $("#portfolio-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
    });

    $("#team-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 2000);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });


})();