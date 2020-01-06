import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

//smooth scroll
function stickyHeader(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('header').addClass("sticky");
            $('.logo').addClass("hiden-logo");
            $('.main-menu').addClass("menu-sticky");
            $('.no-sticky').addClass("y-sticky");
          }
          else{
            $('header').removeClass("sticky");
            $('.logo').removeClass("hiden-logo");
            $('.main-menu').removeClass("menu-sticky");
          }
    });
}


function HomeBanner() {
    var mySwiper = new Swiper('.banner .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            slowFade: true,
        },
        autoplay: {
            delay: 3000,
            out: 1500,
        },
        slidesPerView: 1
    });
}
function secSlide() {
    var swiper = new Swiper('.i-4 .swiper-container', {
        speed: 900,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            out: 2500,
        }
    });
}
//Hamberger_menu
function activeMenu() {
    $('.hamberger-menu').on('click', function () {
        $(this).find('.bar').toggleClass('change');
        $('body').toggleClass('noscroll');
        $(this).siblings('.mobile-menu').toggleClass('show-menu');
    });
}
//gotop
function scrolltop() {
    var id_button = '#gotoTop';

    // Kéo xuống cách 300
    var offset = 300;

    // THời gian trượt 0.5 giây
    var duration = 500;

    // kiểm tra sự ẩn hiện của button
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(id_button).fadeIn(duration);
        } else {
            jQuery(id_button).fadeOut(duration);
        }
    });

    // trượt lên top
    jQuery(id_button).click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
}

// Thực hiện
$(document).ready(function () {
    scrolltop();
});
document.addEventListener('DOMContentLoaded', () => {
    Loading();
    HomeBanner();
    activeMenu();
    secSlide();
    scrolltop();
    stickyHeader();
});