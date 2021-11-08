/* PRIVATE */
(() => {
	// Slider with courses
	// #init #slick #jquery
	$('.slider_courses_ul').slick({
		dots: false,
		arrows: true,
		prevArrow: $('.slider_courses_arrow.prev'),
		nextArrow: $('.slider_courses_arrow.next'),
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: false
	});

	// Slider with team
	// #init #slick #jquery
	$('.block_team_ul').slick({
		dots: false,
		arrows: true,
		prevArrow: $('.block_team_arrow.prev'),
		nextArrow: $('.block_team_arrow.next'),
		speed: 500,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	// Banner-video. Play/pause. 
	// #event #function
	document.querySelector('.main_banner_media video').addEventListener('click', event => {
		let video_element = event.target;
		if (video_element.paused)
			return video_element.play();
		video_element.pause();
	});

	// Full-video. Play
	// #event #function #jquery
	document.querySelectorAll('.block_full_video_button').forEach(element => element.addEventListener('click', event => {
		let video_container = event.target.closest('.block_full_video');
		let video_element = video_container.querySelector('video');

		setTimeout(function () {
			if (video_element.paused) {
				video_element.play();
				video_container.classList.add('video_play');
				video_container.addEventListener('click', event => full_video_play_toggle(event));
			} else {
				video_element.pause();
				video_container.classList.remove('video_play');
			}
		}, 0);
	}));

	// Full-video. Pause
	// #function-event
	function full_video_play_toggle(event) {
		let video_container = event.target.closest('.block_full_video.video_play');
		if (video_container === null) return false;
		let video_element = video_container.querySelector('video');

		setTimeout(() => {
			if (!video_element.paused) {
				video_element.pause();
				video_container.classList.remove('video_play');
			}
		}, 0);
	}

	// Education-info Open/hide
	// #event #function
	document.querySelectorAll('.block_educations_li').forEach(element => element.addEventListener('click', () => element.classList.toggle('active')));

	// Cursers. Get and add more items
	// #event #function  #server
	document.querySelectorAll('.cursers_more').forEach(element => element.addEventListener('click', event => {
		let cursers_list = document.querySelector('.cursers_list_ul');

		/* -- GET DATA FROM SERVER -- */

		// Append demo items
		for (let n_type = 1; n_type <= 4; n_type++) {
			let curs_item = document.querySelector('.tpl_cursers_item.type_' + n_type).content.cloneNode(true);
			cursers_list.append(curs_item);
		}
	}));

	// Booking to offline courses
	// #event #function #server
	document.querySelector('.book_success').addEventListener('click', event => {
		/* --- POST DATA TO SERVER --- */

		document.querySelector('.modal_book_offline').classList.add('success_step');
	});

	document.querySelectorAll('.block_events .row').forEach(element => element.addEventListener('click', event => modalOpen('.modal_book_offline')));
})();