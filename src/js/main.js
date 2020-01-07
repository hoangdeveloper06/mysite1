import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";


//smooth scroll
function stickyHeader() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('header').addClass("sticky");
			$('.logo').addClass("hiden-logo");
			$('.main-menu').addClass("menu-sticky");
			$('.no-sticky').addClass("y-sticky");
		} else {
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
	$('.hamberger-menu').on('click', function() {
		if ($(this).on('clicked')) {
			$(this).toggleClass('change');
			$('body').toggleClass('noscroll');
			$(this).siblings('.mobile-menu').toggleClass('show-menu');
		}
	});
}
//gotop
function scrolltop() {
	var id_button = '#gotoTop';
	var offset = 300;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$(id_button).fadeIn(duration);
		} else {
			$(id_button).fadeOut(duration);
		}
	});
	$(id_button).click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
}

function closeNav() {
	$('a').on('click', function() {
		$(".mobile-menu").removeClass("show-menu");
		$('.hamberger-menu').removeClass('change');
	});
}

function ajaxForm() {
	$('.form-group button').on('click', function(e) {
		e.preventDefault();
		const url = $(this).attr('data-url');
		const name = $('#name').val();
		const phone = $('#phone').val();
		const email = $('#email').val();
		$.ajax({
			type: "POST",
			url: url,
			data: {
				url: url,
				name: name,
				phone: phone,
				email: email
			},
			success: function(res) {
				if (res.Code === 200) {
					alert('Thành công');
				} else {
					alert('Thất bại');
				}
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Loading();
	HomeBanner();
	activeMenu();
	secSlide();
	stickyHeader();
	closeNav();
	scrolltop();
	ajaxForm();
});