(function($) {
        "use strict"
        var nav_offset_top = $('.top-nav').height() + 50;
        //* Navbar Fixed  
        function navbarFixed() {
            if ($('.top-nav').length) {
                $(window).scroll(function() {
                        var scroll = $(window).scrollTop();

                        if (scroll >= nav_offset_top) {
                            $(".top-nav").addClass("navbar-fixed");
                        } else {
                            $(".top-nav").removeClass("navbar-fixed");
                        }
                    }

                );
            }

            ;
        }

        ;
        navbarFixed();


        /*  Parallax Effect js */
        function parallaxEffect() {
            $('.bg-parallax').parallax();
        }

        parallaxEffect();


        /*  Clients Slider */
        function clients_slider() {
            if ($('.clients_slider').length) {
                $('.clients_slider').owlCarousel({

                        loop: true,
                        margin: 30,
                        items: 5,
                        nav: false,
                        autoplay: false,
                        smartSpeed: 1500,
                        dots: false,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 1,
                            }

                            ,
                            400: {
                                items: 2,
                            }

                            ,
                            575: {
                                items: 3,
                            }

                            ,
                            768: {
                                items: 4,
                            }

                            ,
                            992: {
                                items: 5,
                            }
                        }
                    }

                )
            }
        }

        clients_slider();

        /*  MailChimp Slider */
        function mailChimp() {
            $('#footer-input').find('form').ajaxChimp();
        }
        mailChimp();
        $('select').niceSelect();

        /*  Simple LightBox js */
        $('.imageGallery1 .light').simpleLightbox();

        $('.counter').counterUp({
                delay: 10,
                time: 1000
            }

        );

        $(".skills").each(function() {
            $(this).waypoint(function() {
                var progressBar = $(".progress-bar");
                progressBar.each(function(indx) {
                    $(this).css("width", $(this).attr("aria-valuenow") + "%")
                })
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'

            });
        });

        /* Isotope Fillter js */
        function projects_isotope() {
            if ($('.projects').length) {

                // Activate isotope in container
                $(".project__inner").imagesLoaded(function() {
                        $(".project__inner").isotope({

                                layoutMode: 'fitRows',
                                animationOptions: {
                                    duration: 750,
                                    easing: 'linear'
                                }
                            }

                        );
                    }

                );

                // Add isotope click function
                $(".filter li").on('click', function() {
                        $(".filter li").removeClass("active");
                        $(this).addClass("active");

                        var selector = $(this).attr("data-filter");

                        $(".project__inner").isotope({

                                filter: selector,
                                animationOptions: {
                                    duration: 450,
                                    easing: "linear",
                                    queue: false,
                                }
                            }

                        );
                        return false;
                    }

                );
            }
        }
        projects_isotope();
    }

)(jQuery)