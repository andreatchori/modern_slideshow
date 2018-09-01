(function(window) {
    $.exists = function(selector) {
        return ($(selector).length > 0);
    }
    window.onpageshow = function(event) {
      if (event.persisted) {
          PageTransition(); 
      }
    };
    // All Funtions
    PageTransition();
    light_on_wallpaper();
    dre_home_slider();

})(window);

/*--------------------
    Page Transition
---------------------*/
function PageTransition() {
    $('.dre-main-container').addClass('loaded');
    let cont = anime({
        targets: '.loaded',
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 300,
        complete: function(preload) {
            $('.ug-thumb-image').css({
                'opacity': '1'
            });
            $('.dre-section__block img').css({
                'opacity': '1'
            });
            $('.ug-thumb-wrapper, .post-item').css({
                'pointer-events': 'auto'
            });
        }
    });
    $(document).on('click', '[data-type="page-transition"]', function(e) {
        let url = $(this).attr('href');
        if (url != '#' && url != '') {
            e.preventDefault();
            let url = $(this).attr('href');
        }
    });
}

/*------------------
Light on Wallpaper
-------------------*/
function light_on_wallpaper() {
    $('.height-full-viewport').on({'mousewheel': function(e) {
        if (e.target.id === 'el') return;
            e.preventDefault();
            e.stopPropagation();
        }
    })
}

/*------------------
    Slider
-------------------*/
    function dre_home_slider() {
        if ($.exists('.swiper-container')) {
            let swiper = new Swiper('.swiper-container', {
            loop: false,
            speed: 1000,
            grabCursor: false,
            mousewheel: true,
            keyboard: true,
            simulateTouch: false,
            parallax: true,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
            });
            $('.expanded-timeline__counter span:first-child').text('1');
            $('.expanded-timeline__counter span:last-child').text(swiper.slides.length);
            swiper.on('slideChange', function () {
                $('.expanded-timeline__counter span:first-child').text(swiper.activeIndex + 1);
            });

            }
    }
