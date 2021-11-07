/* PRIVATE */
(() => {
	// Slider with courses
	// #init #slick #jquery
	$('.course_list_ul').slick({
		dots: false,
		arrows: true,
		prevArrow: $('.course_list_arrow.prev'),
		nextArrow: $('.course_list_arrow.next'),
		speed: 500,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1022,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
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
})();