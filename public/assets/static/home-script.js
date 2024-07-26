
$(document).ready(function () {
	"use strict";

	$(".scrollDown").click(function () {
		$('html,body').animate({
			scrollTop: $(".scrollto").offset().top
		}, 'slow');
	});

	$(".form-close").click(function() {
		$(".stickyForm").stop().hide(300);
		$(".enquiryBtn").show();
	});
	$(".enquiryBtn").click(function() {
		$(".stickyForm").stop().show(300);
		$(this).hide();
	});
	let formInterval = setInterval(function(){
		$(".stickyForm").stop().show(300);
		$(".enquiryBtn").hide();
	},15000);

	if($(window).innerWidth() < 576){
		clearInterval(formInterval);
	}

	// if($(window).width() < 426){
	// 	//var video = $("#banner-video");
	// 	//var source = $("#vid-source");
	// 	var newmp4 = 'videos/mb-video.mp4';
	// 	$("#banner-video source").attr('src', newmp4);
	// 	$('#banner-video').get(0).load();
	// 	$('#banner-video').get(0).play();
	// }
});

$(window).scroll(function () {
	"use strict";
	var wScroll = $(window).scrollTop();

	// if (wScroll > $('.animate-section1').offset().top - ($(window).height() / 1.5)) {
	// 	$('#img1').css({
	// 		'transform': 'translate(0px, '+wScroll/35+'%)'
	// 	});
	// 	$('.animate-section1 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section1 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section2').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section2 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section2 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section3').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section3 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section3 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section4').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section4 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section4 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section5').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section5 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section5 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section6').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section6 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section6 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
	// if (wScroll > $('.animate-section7').offset().top - ($(window).height() / 1.5)) {
	// 	$('.animate-section7 .animate').each(function (i) {
	// 		setTimeout(function () {
	// 			$('.animate-section7 .animate').eq(i).addClass('doneTranslate');
	// 		}, 150 * (i + 1));
	// 	});
	// }
});