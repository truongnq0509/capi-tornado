

// :: 1.0 Xử lý chung validate form
// :: 2.0 Marquee

(function ($) {
	'use strict';

	var $window = $(window);

	// :: 1.0 Xử lý chung validate form
	function createdInvalid(locationAppend, text) {
		locationAppend.addClass('is-invalid');

		if ($(locationAppend.parent()).find('.invalid-feedback').length > 0) return true;
		let div = document.createElement("div");
		div.className = 'invalid-feedback';
		div.textContent = text;
		$(locationAppend.parent()).append(div);
	}

	$(document).on('change', '#form input, #form select, #form textarea', function (e) {
		e.preventDefault();
		$(this).removeClass('is-invalid');
		$(this).parent().find('.invalid-feedback').remove();

	});

	const fnVal = () => {
		let hasErr = false;

		if (!$('#email').val().trim()) {
			hasErr = true;
			createdInvalid($('#email'), 'Email không được để trống !')
		}

		if (!$('#password').val().trim()) {
			hasErr = true;
			createdInvalid($('#password'), 'Mật khẩu không được để trống !')
		} else if ($('#password').val().trim().length < 6) {
			hasErr = true;
			createdInvalid($('#password'), 'Tối thiểu 6 ký tự!')
		}

		return hasErr
	}

	$('button').click(function (e) {
		e.preventDefault()

		if (fnVal()) return;

		// CALL API
	})

	// :: 2.0 Marquee
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		dots: false,
		loop: true,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 3000,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		slideTransition: 'linear',
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 5
			}
		}
	});

	// Kích hoạt sự kiện chuyển động ngay lập tức
	owl.trigger('next.owl.carousel');

}(jQuery));