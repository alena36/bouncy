;(function() {
    'use strict';

    $(document).ready(function(){
        $('.slider').slick({
            infinite: false,
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            //autoplay: true,
            //autoplaySpeed: 4000
        });
    });
})();