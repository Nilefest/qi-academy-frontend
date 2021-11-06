/* PRIVATE */
(() => {
	// Add event 'click' for dynamic elements
	document.body.addEventListener('click', event => {
		// Open modal Team
		// #event #function #nojquery
		if (event.target && event.target.classList.contains('team_open_modal') && event.target.classList.contains('view')) {

			/* -- GET DATA FROM SERVER -- */

			document.querySelectorAll('.modal, .modal_team').forEach(element => element.classList.add('modal_show'));
		}
	});
})();