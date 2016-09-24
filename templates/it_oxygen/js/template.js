(function ($) {
    'use strict';


    jQuery.each($('.slide'), function (index, val) {
        $(this).find('img').css('opacity', '0');
        $(this).find('.bt_img').css({
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': 'center center',
            'min-width': '960px',
            'height': '600px',
            'background-image': 'url("' + $(this).find('img').prop('src') + '")'
        });
    });

    // Move the Offcanvas Toggle button in the Header
    $(document).ready(function () {
        $("div.g-offcanvas-toggle:not(.offcanvas-toggle-particle)").prependTo($("#g-header"));
    });


    // baguetteBox.run('.gallery');
})(jQuery);



