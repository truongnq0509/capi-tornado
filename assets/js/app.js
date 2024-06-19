

// :: 1.0 Xử lý chung validate form
// :: 2.0 Marquee
// :: 3.0 Newspapers
// :: 4.0 Chartjs
// :: 5.0 Auth
// :: 6.0 Step
// :: 7.0 Slide đánh giá khách hàng
// :: 8.0 Slide về công ty


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

		if (!$('#fullname').val().trim()) {
			hasErr = true;
			createdInvalid($('#fullname'), 'Họ và tên không được để trống !')
		}

		if (!$('#cmnd').val().trim()) {
			hasErr = true;
			createdInvalid($('#cmnd'), 'Số CMND/CCCD/HC không được để trống !')
		}


		if (!$('#email').val().trim()) {
			hasErr = true;
			createdInvalid($('#email'), 'Email không được để trống !')
		}

		if (!$('#date').val().trim()) {
			hasErr = true;
			createdInvalid($('#date'), 'Ngày cấp không được để trống !')
		}

		if (!$('#from').val().trim()) {
			hasErr = true;
			createdInvalid($('#from'), 'Nơi cấp không được để trống !')
		}

		if (!$('#address').val().trim()) {
			hasErr = true;
			createdInvalid($('#address'), 'Địa chỉ nơi ở hiện tại (để nhận hợp đồng)  không được để trống !')
		}

		if (!$('#phone').val().trim()) {
			hasErr = true;
			createdInvalid($('#phone'), 'Số điện thoại không được để trống !')
		}

		if (!$('#birth').val().trim()) {
			hasErr = true;
			createdInvalid($('#birth'), 'Ngày sinh không được để trống !')
		}

		if (!$('#sex').val().trim()) {
			hasErr = true;
			createdInvalid($('#sex'), 'Giới tính không được để trống !')
		}

		if (!$('#country').val().trim()) {
			hasErr = true;
			createdInvalid($('#country'), 'Quốc tịch không được để trống !')
		}

		return hasErr
	}

	$('#next').click(function (e) {
		e.preventDefault()

		// if (fnVal()) return;

	})

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

	var ctx_1 = document.getElementById("chartjs-1") && document.getElementById("chartjs-1").getContext("2d");
	var ctx_2 = document.getElementById("chartjs-2") && document.getElementById("chartjs-2").getContext("2d");
	var ctx_3 = document.getElementById("chartjs-3") && document.getElementById("chartjs-3").getContext("2d");
	var ctx_4 = document.getElementById("chartjs-4") && document.getElementById("chartjs-4").getContext("2d");
	var ctx_5 = document.getElementById("chartjs-5") && document.getElementById("chartjs-5").getContext("2d");
	var ctx_6 = document.getElementById("chartjs-6") && document.getElementById("chartjs-6").getContext("2d");

	if (ctx_1 &&
		ctx_2 &&
		ctx_3 &&
		ctx_4 &&
		ctx_5 &&
		ctx_6) {
		new Chart(ctx_1, chartData);
		new Chart(ctx_2, chartData);
		new Chart(ctx_3, chartData);
		new Chart(ctx_4, chartData);
		new Chart(ctx_5, chartData);
		new Chart(ctx_6, chartData);
	}



	// :: 5.0 Auth
	$("#add__bank").click(function (e) {
		$("#step__back__item__one").append(
			`<div class="step__bank-item">
				<div class="row">
					<div class="col-12 col-md-3">
						<label for="tk" class="form-label mb-2">
							Số TK <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="tk"
							placeholder=""
						/>
					</div>
					<div class="col-12 col-md-3">
						<label for="user" class="form-label mb-2">
							Tên chủ TK <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="user"
							placeholder=""
						/>
					</div>
					<div class="col-12 col-md-3">
						<label for="bank" class="form-label mb-2">
							Ngân hàng <span>*</span>
						</label>

						<select class="form-control form-select" id="bank">
							<option value="">MB Bank</option>
							<option value="">TP Bank</option>
						</select>
					</div>
					<div class="col-12 col-md-3">
						<label for="branch" class="form-label mb-2">
							Chi nhánh <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="branch"
							placeholder=""
						/>
					</div>
				</div>
				<div class="close">
					<img src="assets/img/icon/close.png" alt="" />
				</div>
			</div>
		`
		);
	});

	$("#step__back__item__one").on("click", ".close", function (e) {
		$(this).closest(".step__bank-item").remove();
	});

	$("#add__reciprocal").click(function (e) {
		$("#step__back__item__two").append(
			`<div class="step__bank-item">
				<div class="row">
					<div class="col-12 col-md-3">
						<label for="tk" class="form-label mb-2">
							Số TK <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="tk"
							placeholder=""
						/>
					</div>
					<div class="col-3">
						<label for="user" class="form-label mb-2">
							Tên chủ TK <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="user"
							placeholder=""
						/>
					</div>
					<div class="col-3">
						<label for="bank" class="form-label mb-2">
							Ngân hàng <span>*</span>
						</label>

						<select class="form-control form-select" id="bank">
							<option value="">MB Bank</option>
							<option value="">TP Bank</option>
						</select>
					</div>
					<div class="col-3">
						<label for="branch" class="form-label mb-2">
							Chi nhánh <span>*</span>
						</label>

						<input
							type="text"
							class="form-control"
							id="branch"
							placeholder=""
						/>
					</div>
				</div>
				<div class="close">
					<img src="assets/img/icon/close.png" alt="" />
				</div>
			</div>
		`
		);
	});

	$("#step__back__item__two").on("click", ".close", function (e) {
		$(this).closest(".step__bank-item").remove();
	});


	// :: 6.0 Step
	const $progress = $("#progress");
	const $prev = $("#prev");
	const $next = $("#next");
	const $steps = $(".step__Mxds");
	const $stepBoxes = $(".step__box");

	console.log('$progress', $progress)

	let currentStep = 1;

	$next.on("click", () => {
		currentStep++;
		if (currentStep > $steps.length) {
			currentStep = $steps.length;
		}
		updateSteps();
	});

	$prev.on("click", () => {
		currentStep--;
		if (currentStep < 1) {
			currentStep = 1;
		}
		updateSteps();
	});

	function updateSteps() {
		$steps.removeClass("active").eq(currentStep - 1).addClass("active");
		$stepBoxes.removeClass("active").eq(currentStep - 1).addClass("active");
		$progress.css("width", `${((currentStep - 1) / ($steps.length - 1)) * 100}%`);

		$prev.prop("disabled", currentStep === 1);

		if (currentStep === $steps.length) {
			$next.text("Hoàn Thành");
		} else {
			$next.text("Tiếp Tục");
		}

		$next.prop("disabled", currentStep === $steps.length + 1);
	}

	// :: 7.0 Slide đánh giá khách hàng
	var owlCustomer = $('.owl-carousel.transaction__customer-list');
	owlCustomer.owlCarousel({
		dots: false,
		loop: true,
		margin: 80,
		stagePadding: 0,
		smartSpeed: 10000,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		slideTransition: 'linear',
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			}
		}
	});

	owlCustomer.trigger('next.owl.carousel');

	// :: 8.0 Slide về công ty
	var owlAboutUs = $('.owl-carousel.about__wrapper-list');
	owlAboutUs.owlCarousel({
		dots: false,
		loop: true,
		nav: false,
		margin: 80,
		stagePadding: 0,
		// smartSpeed: 10000,
		// autoplay: true,
		// autoplayTimeout: 3000,
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
				items: 1.5
			}
		}
	});

}(jQuery));

