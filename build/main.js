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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2Nyb2xsZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IZWFkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPiA2MCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLmFkZENsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcbiAgICB2YXIgZ3ltbmFzdGljU2xpZGVyO1xyXG4gICAgdmFyIHF1ZXN0aW9uc1NsaWRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTA4MCkge1xyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJyNhZHZhbnRhZ2VzU2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcjYWR2YW50YWdlc1NsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFneW1uYXN0aWNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGd5bW5hc3RpY1NsaWRlciA9IG5ldyBTd2lwZXIoJyNneW1uYXN0aWNTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA3Njc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcjZ3ltbmFzdGljU2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcjZ3ltbmFzdGljU2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zU2xpZGVyID0gbmV3IFN3aXBlcignI3F1ZXN0aW9uc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJyNxdWVzdGlvbnNTbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJyNxdWVzdGlvbnNTbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChneW1uYXN0aWNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGd5bW5hc3RpY1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZ3ltbmFzdGljU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyc0luaXQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFcXVhbEhlaWdodCgpIHtcclxuICAgICAgICB2YXIgbWF4X2NhcmRfaGVpZ2h0ID0gMDtcclxuICAgICAgICB2YXIgJGFkdmFudGFnZXNDYXJkcyA9ICQoJy5xdWVzdGlvbi1saXN0X19pdGVtJyk7XHJcbiAgICAgICAgJGFkdmFudGFnZXNDYXJkcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGVpZ2h0KCkgPiBtYXhfY2FyZF9oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG1heF9jYXJkX2hlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkYWR2YW50YWdlc0NhcmRzLmNzcyh7bWluSGVpZ2h0OiAkKHdpbmRvdykud2lkdGgoKSA+IDc2NyA/IG1heF9jYXJkX2hlaWdodCA6ICdhdXRvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVxdWFsSGVpZ2h0KCk7XHJcblxyXG4gICAgLy8gUEFJTiBTWU1QVE9NUyBIb3ZlciBibG9ja1xyXG5cclxuICAgIHZhciAkaW1hZ2VzTGlzdCA9ICQoJyNwYWluLXN5bmRyb20taW1ncyAubGluay1zeW5kcm9tJyk7XHJcbiAgICB2YXIgJHN5bmRyb21zSXRlbXMgPSAkKCcucGFpbi1zeW5kcm9tZS1saXN0X19pdGVtJyk7XHJcblxyXG4gICAgJGltYWdlc0xpc3QuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzeW5kcm9tc0l0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUtc3luZHJvbScpO1xyXG4gICAgICAgICRpbWFnZXNMaXN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1pZD0nICsgJCh0aGlzKS5kYXRhKCdmb3InKSArICddJykuYWRkQ2xhc3MoJ2FjdGl2ZS1zeW5kcm9tJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
