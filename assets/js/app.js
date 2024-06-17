

// :: 1.0 Xử lý chung validate form
// :: 2.0 Marquee
// :: 3.0 Newspapers
// :: 4.0 Chartjs


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

	// const fnVal = () => {
	// 	let hasErr = false;

	// 	if (!$('#email').val().trim()) {
	// 		hasErr = true;
	// 		createdInvalid($('#email'), 'Email không được để trống !')
	// 	}

	// 	if (!$('#password').val().trim()) {
	// 		hasErr = true;
	// 		createdInvalid($('#password'), 'Mật khẩu không được để trống !')
	// 	} else if ($('#password').val().trim().length < 6) {
	// 		hasErr = true;
	// 		createdInvalid($('#password'), 'Tối thiểu 6 ký tự!')
	// 	}

	// 	return hasErr
	// }

	// $('button').click(function (e) {
	// 	e.preventDefault()

	// 	if (fnVal()) return;

	// })

	// :: 2.0 Marquee
	var owlMarquee = $('.owl-carousel.marquee');
	owlMarquee.owlCarousel({
		dots: false,
		loop: true,
		margin: 0,
		autoWidth: true,
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

	owlMarquee.trigger('next.owl.carousel');

	// :: 3.0 Newspapers
	var owlNewspapers = $('.owl-carousel.newspapers__list');
	owlNewspapers.owlCarousel({
		dots: false,
		loop: true,
		margin: 48,
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
				items: 7
			}
		}
	});

	owlNewspapers.trigger('next.owl.carousel');

	// :: 4.0 Chartjs

	var chartData = {
		type: 'line',
		data: {
			labels: [6, 8, 6, 4, 8, 6, 7, 8, 5, 9, 10, 8, 9],
			datasets: [{
				label: '',
				data: [7, 8, 7.5, 8, 8.5, 9, 8, 8, 7, 7.5, 8, 8.5, 9.5],
				backgroundColor: [
					'#00FF47'
				],
				borderColor: [
					'#00FF47'
				],
				borderWidth: 2
			}]
		},
		options: {
			scales: {
				x: {
					display: false,
					grid: {
						drawOnChartArea: false
					},
					ticks: {
						display: false
					}
				},
				y: {
					display: false,
					grid: {
						drawOnChartArea: false
					},
					ticks: {
						display: false
					}
				},
			},
			plugins: {
				legend: {
					display: false,
				},

			},
			elements: {
				point: {
					borderWidth: 0,
					radius: 0,
				}
			}

		}
	};

	// var ctx_1 = document.getElementById("chartjs-1").getContext("2d");
	// var ctx_2 = document.getElementById("chartjs-2").getContext("2d");
	// var ctx_3 = document.getElementById("chartjs-3").getContext("2d");
	// var ctx_4 = document.getElementById("chartjs-4").getContext("2d");
	// var ctx_5 = document.getElementById("chartjs-5").getContext("2d");
	// var ctx_6 = document.getElementById("chartjs-6").getContext("2d");

	// new Chart(ctx_1, chartData);
	// new Chart(ctx_2, chartData);
	// new Chart(ctx_3, chartData);
	// new Chart(ctx_4, chartData);
	// new Chart(ctx_5, chartData);
	// new Chart(ctx_6, chartData);




}(jQuery));


