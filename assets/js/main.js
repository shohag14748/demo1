$(document).ready(function () {
	$(".main-content").prepend("<div class='background'><img src='assets/images/banner-bg.png'></div>");
	$('.collapse-button').on('click', function () {
		$('.navigation').toggleClass('collapse-open');
		$(this).toggleClass('rotate');
	});

	var bg = $('.mainContentMenu').height() + 50;
	$('.main-content .background').css({
		height: bg,
		minHeight: 200
	});

	$(window).resize(function () {
		var bg = $('.mainContentMenu').height() + 50;
		$('.main-content .background').css({
			height: bg,
			minHeight: 200
		});
	});

});
