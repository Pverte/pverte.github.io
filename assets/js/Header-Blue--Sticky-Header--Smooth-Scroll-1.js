jQuery(document).ready(function() {
    'use strict';

    // sticky header start 
    var sticker = jQuery(".sticker");
    sticker.sticky({
        topSpacing: 0
    });
    // sticky header end 

    // start smooth scrolling
    var smothscroll = jQuery('.navbar-nav li a[href*="#"]:not([href="#"])');
    smothscroll.on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // end smooth scrolling

});