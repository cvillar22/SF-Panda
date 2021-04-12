(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function() {
        $('#postsCarousel').carousel('next');
        return false;
    });
    $('.prev').click(function() {
        $('#postsCarousel').carousel('prev');
        return false;
    });

})(jQuery);