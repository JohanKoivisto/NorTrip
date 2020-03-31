$(document).ready(function() {
 
    /* sticky navigation */
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
    offset: '60px'
    });

   /* scroll on buttons */
    $(".js--scroll-to-plans").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000)
    });
    
    $(".js--scroll-to-start").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 500)
    });
    
    /* Animatiosn on scroll */
    
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "65%"
    });
    
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "65%"
    });
    
    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animated fadeIn");
    }, {
        offset: "65%"
    });
    
    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animated pulse");
    }, {
        offset: "65%"
    });
    
});




































