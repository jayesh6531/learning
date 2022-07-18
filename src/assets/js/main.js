
// wow js initialize //
function wowjs(){
    if ($('.wow').hasClass('wow')) {
        wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            }
        )
        wow.init();
    }
}
// wow js initialize /
/* tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* tooltip end*/
/* popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
/* popover end*/
/*header-spacer*/
$(function () {
    headerSpacer = function () {
        $('.header-spacer').css('height', $('header').outerHeight());
    }
    headerSpacer();
    $(window).resize(function () {
        headerSpacer();
    });
});
/*header-spacer*/
/*  Hide Header on on scroll down */
function fixedheader(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('header').outerHeight();
    var navbarHeight = headerHeight / 2;
    $(window).scroll(function (event) {
        didScroll = true;
        if ($(window).scrollTop() >= navbarHeight) {
            $('header').addClass('small-header');
        }
        else {
            $('header').removeClass('small-header');
        }
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
}
/* / Hide Header on on scroll down */

/* RXT Travel */
function viewport() { var t = window, r = "inner"; return "innerWidth" in window || (r = "client", t = document.documentElement || document.body), t[r + "Width"] } viewport(); var rxtTravelRef = 1; $(".rxt-travel").each(function () { $(this).wrap('<div class="rxt-travel-container-' + rxtTravelRef + '" data-ref="' + rxtTravelRef + '"></div>'), $(this).closest('[class*="rxt-travel-container-"]').before('<div class="rxt-travel-ref-' + rxtTravelRef + '"></div>'), rxtTravelRef++ }), travelMaxWidth = function () { $('[class*="rxt-travel-container-"]').each(function () { var t = $(this).find(".rxt-travel").attr("data-rxt-travel-max"), r = $(this).find(".rxt-travel").attr("data-rxt-travel-appendTo"), e = $(this).attr("data-ref"), a = $(this).attr("data-ref"); viewport() <= t ? $(this).appendTo(r) : $(r).find(".rxt-travel-container-" + a).insertAfter(".rxt-travel-ref-" + e) }) }, travelMaxWidth(), $(window).on("resize", function () { travelMaxWidth() });
/* / RXT Travel */

/*banner-spacer-img-shape*/
$(function () {
    bannerWrapSpacer = function () {
        $('.banner-spacer-height').css('height', $('.img-spacer').outerHeight());
        var imgHeight = $('.img-spacer').outerHeight();
        $('.img-spacer').css('margin-top', -imgHeight);
        $('.img-spacer').css('margin-bottom', -1);
        $('.banner-spacer-height').css('margin-top', -imgHeight / 2);
    }
    bannerWrapSpacer();
    $(window).resize(function () {
        bannerWrapSpacer();
    });
});
/*banner-spacer-img-shape*/
/* Back To Top Button */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".backtop").addClass("backtopActive");
        } else {
            $(".backtop").removeClass("backtopActive");
        }
    });
    $('.backtop').click(function () {
        $('.backtop').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.backtop').tooltip('show');
});
/* /Back To Top Button */
/* pass Video URL Dynamically*/
$(document).ready(function () {
    function videoURLDynamic() {
        var n = $("body").find('[data-bs-toggle="modal"]');
        n.click(function () {
            var n = $(this).data("target"),
                t = $(this).attr("data-theVideo"),
                i = t + "&autoplay=1";
            $(n + " iframe").attr("src", i);
            /*Stop Video*/
            $(n + " button.close").click(function () {
                $(n + " iframe").attr("src", "")
            });
            $(".modal").click(function () {
                $(n + " iframe").attr("src", "")
            })
            /*Stop Video*/
        })
    }
    videoURLDynamic();
    /* Video Stop */
    $('#modalVideo .close').click(function () {
        $('.embed-responsive-item').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    });
    /* / Video Stop */
});
/* pass Video URL Dynamically*/
/* /success-stories-clients*/
function owlcarouselmultiple(){
        var owl = $('.owl-carousel-multiple');
        owl.owlCarousel({
            margin: 10,
            autoHeight: false,
            autoplay: true,
            nav: false,
            dots: false,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                575: {
                    items: 2,
                    dots: true
                },
                767: {
                    items: 2,
                    dots: true
                },
                1000: {
                    mouseDrag: false,
                    autoplay: false,
                    items: 3
                },
                1199: {
                    mouseDrag: false,
                    autoplay: false,
                    items: 4
                }
            }
        });
}
/* /success-stories-clients*/
/* /success-stories-clients*/
function owlcarouselpartners(){
    var owl = $('.owl-carousel-partners');
    owl.owlCarousel({
        margin: 20,
        autoHeight: false,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 2
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            },
            1199: {
                items: 5
            },
            1399: {
                items: 5
            }
        }
    });
}

        
    
/* /success-stories-clients*/
/* Online Coaching & Measure*/
$(".owl-carousel-coaching-Measure").each(function () {
    $('.owl-carousel-coaching-Measure').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
/* /Online Coaching & Measure*/
/* comments*/
$(".owl-carousel-comments").each(function () {
    $('.owl-carousel-comments').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
/* /comments*/
/* What The App */
$(".owl-carousel-WhatTheApp").each(function () {
    $('.owl-carousel-WhatTheApp').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })
});
/* What The App */

$(".owl-carousel-mystories").each(function () {
    $('.owl-carousel-mystories').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 10
            }
        }
    })
});


/* comments*/
$(".owl-carousel-comments").each(function () {
    $('.owl-carousel-comments').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
/* /comments*/

/* What The App */
$(".owl-carousel-WhatTheApp1").each(function () {
    $('.owl-carousel-WhatTheApp1').owlCarousel({
        margin: 0,
        nav: false,
        dots: false,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
$(".owl-carousel-WhatTheApp2").each(function () {
    $('.owl-carousel-WhatTheApp2').owlCarousel({
        margin: 0,
        nav: false,
        dots: false,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
});
/* What The App */

/* Mobile Navigation Accordion */
var oldclick;
var clickcount = 0;
$('#rxtNavTravel ul li').click(function () {
    if ($(this).hasClass("activeOpenul")) {
        $(this).removeClass('activeOpenul');
    }
    else {
        $("li").removeClass('activeOpenul');
        $(this).addClass('activeOpenul');
    }
    if (oldclick == this) {
        if (clickcount != 1) {
            clickcount = 1
            $(this).removeClass('activeOpenul');
        }
        else {
            clickcount = 0
            $(this).addClass('activeOpenul');
        }
    }
    oldclick = this;
});
/* /Mobile Navigation Accordion */

/* Sticky On scroll */
$(document).ready(function() {
	var s = $(".stripeSticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=200) {
			s.removeClass("stripeStickerActive");
		} else {
			s.addClass("stripeStickerActive");	
        }
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".stripeSticker").removeClass("stripeStickerActive");
        }
	});
});
/* /Sticky On scroll */