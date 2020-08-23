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
        if ($(window).width() <= 1040) {
            if (!advantagesSlider) {
                advantagesSlider = new Swiper('#advantagesSlider', {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    breakpoints: {

                        768: {
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
                    spaceBetween: 10,
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
        $advantagesCards.css({minHeight: $(window).width() > 1040 ? max_card_height : 'auto'});
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2Nyb2xsZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IZWFkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPiA2MCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLmFkZENsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcbiAgICB2YXIgZ3ltbmFzdGljU2xpZGVyO1xyXG4gICAgdmFyIHF1ZXN0aW9uc1NsaWRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTA0MCkge1xyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJyNhZHZhbnRhZ2VzU2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcjYWR2YW50YWdlc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFneW1uYXN0aWNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGd5bW5hc3RpY1NsaWRlciA9IG5ldyBTd2lwZXIoJyNneW1uYXN0aWNTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJyNneW1uYXN0aWNTbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJyNneW1uYXN0aWNTbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb25zU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjcXVlc3Rpb25zU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnI3F1ZXN0aW9uc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnI3F1ZXN0aW9uc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGd5bW5hc3RpY1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgZ3ltbmFzdGljU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBneW1uYXN0aWNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXJzSW5pdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVxdWFsSGVpZ2h0KCkge1xyXG4gICAgICAgIHZhciBtYXhfY2FyZF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIHZhciAkYWR2YW50YWdlc0NhcmRzID0gJCgnLnF1ZXN0aW9uLWxpc3RfX2l0ZW0nKTtcclxuICAgICAgICAkYWR2YW50YWdlc0NhcmRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oZWlnaHQoKSA+IG1heF9jYXJkX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbWF4X2NhcmRfaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRhZHZhbnRhZ2VzQ2FyZHMuY3NzKHttaW5IZWlnaHQ6ICQod2luZG93KS53aWR0aCgpID4gMTA0MCA/IG1heF9jYXJkX2hlaWdodCA6ICdhdXRvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVxdWFsSGVpZ2h0KCk7XHJcblxyXG4gICAgLy8gUEFJTiBTWU1QVE9NUyBIb3ZlciBibG9ja1xyXG5cclxuICAgIHZhciAkaW1hZ2VzTGlzdCA9ICQoJyNwYWluLXN5bmRyb20taW1ncyAubGluay1zeW5kcm9tJyk7XHJcbiAgICB2YXIgJHN5bmRyb21zSXRlbXMgPSAkKCcucGFpbi1zeW5kcm9tZS1saXN0X19pdGVtJyk7XHJcblxyXG4gICAgJGltYWdlc0xpc3QuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzeW5kcm9tc0l0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUtc3luZHJvbScpO1xyXG4gICAgICAgICRpbWFnZXNMaXN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1pZD0nICsgJCh0aGlzKS5kYXRhKCdmb3InKSArICddJykuYWRkQ2xhc3MoJ2FjdGl2ZS1zeW5kcm9tJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
