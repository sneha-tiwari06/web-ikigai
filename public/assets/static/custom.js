
$(document).ready(function () {
	"use strict";
	$('[data-toggle="tooltip"]').tooltip();
	
	$(".menuBtn").click(function() {
		$(this).toggleClass('closeMenuBtn');
	    $('.menuMoreContainer').toggleClass('active');
	    $('.header').toggleClass('on');
	    $('body').toggleClass('overflow-hidden');
	});

	// $(".hasChild").click(function() {
	// 	$(".dropdown").slideUp(500);
	// 	if($(this).find(".dropdown").is(':hidden') === true) {
	// 		$(this).find(".dropdown").slideDown('normal');
	// 	 }
	// });

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('.button-top').animate({
				opacity: 1,
				bottom: 10
			}, 0);
		}
		else {
			$('.button-top').animate({
				opacity: 0,
				bottom: -40
			}, 0);
		}
	});
	$(".button-top").click(function () {
		$("html,body").animate({ scrollTop: '0px' }, 500);
	});

	$('[data-magnify]').magnify({
		//movable: false,
		//resizable: false,
		headToolbar: [
			'close'
		],
		initMaximized: true
	});
});

$(window).scroll(function () {
	"use strict";

	var wScroll = $(this).scrollTop();

	if (wScroll > 50) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	}
});