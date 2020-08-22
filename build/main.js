/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */



/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    /**
     * HEADER SCROLL
     */

    var scrolled;

    function onHeaderScroll() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 60) {
            jQuery(".header").addClass('header_active');
        } else {
            jQuery(".header").removeClass('header_active');
        }
    }

    $(document).on('scroll', function () {
        onHeaderScroll();
    });
    onHeaderScroll();

    /**
     * MOB MENU SCRIPT
     **/

    var nav = $('.main-nav');

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });



    // slider

    var advantagesSlider;
    var gymnasticSlider;
    var questionsSlider;

    function slidersInit() {
        if ($(window).width() <= 1080) {
            if (!advantagesSlider) {
                advantagesSlider = new Swiper('#advantagesSlider', {
                    slidesPerView: 3,
                    breakpoints: {
                        980: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        200: {
                            slidesPerView: 1
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#advantagesSlider .swiper-button-next',
                        prevEl: '#advantagesSlider .swiper-button-prev',
                    },
                });
            }
            if (!gymnasticSlider) {
                gymnasticSlider = new Swiper('#gymnasticSlider', {
                    slidesPerView: 1,
                    breakpoints: {
                        767: {
                            slidesPerView: 2,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#gymnasticSlider .swiper-button-next',
                        prevEl: '#gymnasticSlider .swiper-button-prev',
                    },
                });
            }
            if (!questionsSlider) {
                questionsSlider = new Swiper('#questionsSlider', {
                    slidesPerView: 1,
                    breakpoints: {
                        767: {
                            slidesPerView: 2,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#questionsSlider .swiper-button-next',
                        prevEl: '#questionsSlider .swiper-button-prev',
                    },
                });
            }
        } else {
            if (advantagesSlider) {
                advantagesSlider.destroy(true, true);
                advantagesSlider = null;
            }
            if (gymnasticSlider) {
                gymnasticSlider.destroy(true, true);
                gymnasticSlider = null;
            }
            if (questionsSlider) {
                questionsSlider.destroy(true, true);
                questionsSlider = null;
            }
        }
    }

    slidersInit();

    function setEqualHeight() {
        var max_card_height = 0;
        var $advantagesCards = $('.question-list__item');
        $advantagesCards.each(function () {
            if ($(this).height() > max_card_height) {
                max_card_height = $(this).height();
            }
        });
        $advantagesCards.css({minHeight: $(window).width() > 767 ? max_card_height : 'auto'});
    }

    setEqualHeight();

    // PAIN SYMPTOMS Hover block

    var $imagesList = $('#pain-syndrom-imgs .link-syndrom');
    var $syndromsItems = $('.pain-syndrome-list__item');

    $imagesList.hover(function () {
        $syndromsItems.removeClass('active-syndrom');
        $imagesList.removeClass('active');
        $(this).addClass('active');
        $('[data-id=' + $(this).data('for') + ']').addClass('active-syndrom');
    });



    $(window).on('resize', function () {
        slidersInit();
    });
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2Nyb2xsZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IZWFkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPiA2MCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLmFkZENsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcbiAgICB2YXIgZ3ltbmFzdGljU2xpZGVyO1xyXG4gICAgdmFyIHF1ZXN0aW9uc1NsaWRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTA4MCkge1xyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDk4MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnI2FkdmFudGFnZXNTbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJyNhZHZhbnRhZ2VzU2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWd5bW5hc3RpY1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgZ3ltbmFzdGljU2xpZGVyID0gbmV3IFN3aXBlcignI2d5bW5hc3RpY1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJyNneW1uYXN0aWNTbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJyNneW1uYXN0aWNTbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb25zU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjcXVlc3Rpb25zU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnI3F1ZXN0aW9uc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnI3F1ZXN0aW9uc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGd5bW5hc3RpY1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgZ3ltbmFzdGljU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBneW1uYXN0aWNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXJzSW5pdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVxdWFsSGVpZ2h0KCkge1xyXG4gICAgICAgIHZhciBtYXhfY2FyZF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIHZhciAkYWR2YW50YWdlc0NhcmRzID0gJCgnLnF1ZXN0aW9uLWxpc3RfX2l0ZW0nKTtcclxuICAgICAgICAkYWR2YW50YWdlc0NhcmRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oZWlnaHQoKSA+IG1heF9jYXJkX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbWF4X2NhcmRfaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRhZHZhbnRhZ2VzQ2FyZHMuY3NzKHttaW5IZWlnaHQ6ICQod2luZG93KS53aWR0aCgpID4gNzY3ID8gbWF4X2NhcmRfaGVpZ2h0IDogJ2F1dG8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXF1YWxIZWlnaHQoKTtcclxuXHJcbiAgICAvLyBQQUlOIFNZTVBUT01TIEhvdmVyIGJsb2NrXHJcblxyXG4gICAgdmFyICRpbWFnZXNMaXN0ID0gJCgnI3BhaW4tc3luZHJvbS1pbWdzIC5saW5rLXN5bmRyb20nKTtcclxuICAgIHZhciAkc3luZHJvbXNJdGVtcyA9ICQoJy5wYWluLXN5bmRyb21lLWxpc3RfX2l0ZW0nKTtcclxuXHJcbiAgICAkaW1hZ2VzTGlzdC5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN5bmRyb21zSXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zeW5kcm9tJyk7XHJcbiAgICAgICAgJGltYWdlc0xpc3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLWlkPScgKyAkKHRoaXMpLmRhdGEoJ2ZvcicpICsgJ10nKS5hZGRDbGFzcygnYWN0aXZlLXN5bmRyb20nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyc0luaXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
