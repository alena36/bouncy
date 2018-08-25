(function(){
    'use strict';

    $('.grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: 270,
        gutter: 10,
        horizontalOrder: true
    });

})();