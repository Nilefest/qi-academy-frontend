/* PRIVATE */
(() => {
	// Add/remove mark to this lesson
	// #event #function #nojquery
	document.querySelectorAll('.course_mark').forEach(element => element.addEventListener('click', () => element.classList.toggle('active')));
});