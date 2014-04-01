// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).scroll(function(e) {
    var s = $(window).scrollTop(),
        opacityVal = (s / 150.0);

    $('.blur').css('opacity', opacityVal);
});