import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

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

//Hamberger_menu
function activeMenu() {
    $('.hamberger-menu').on('click', function() {
        $(this).find('.bar').toggleClass('change');
        $('body').toggleClass('noscroll');
        $(this).siblings('.mobile-menu').toggleClass('show-menu');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    Loading();
    HomeBanner();
    activeMenu();
});