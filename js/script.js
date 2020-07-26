$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 150) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
var html_body = $('html, body');
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 85
            }, 1500);
            return false;
        }
    }
});



    new WOW().init(); 

