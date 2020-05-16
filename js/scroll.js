$(document).ready(function() {
    $('li a').on('click', function(e) {
        const targetSec = $(this).text();
        $('html, body').animate({
            scrollTop: $(targetSec.toLowerCase() === 'home' ? '#header' : '#section-' + targetSec.toLowerCase()).offset().top
        }, 350);
    });

    $(".top-nav__item").click(function() {
        $(".top-nav__item").removeClass("active");
        // $(".top-nav__item").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });

    $(function() {
        let status = true;
        $(window).scroll(function() {
            const aTop = 300;
            if ($(this).scrollTop() >= aTop && status) {
                $(".back-to-top").addClass("show");
                status = false;
            } else if ($(this).scrollTop() < aTop && !status) {
                $(".back-to-top").removeClass("show");
                status = true;
            };
        });
    });

    $('.back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});