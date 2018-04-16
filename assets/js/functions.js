////////////////////////////////////////////////
// STICK NAVIGATION BACKGROUND COLOR CHAGNGER //
////////////////////////////////////////////////

window.onscroll = function() {
	isStickyNavigation();
};

var navbar = document.getElementById('navbar');

var sticky = navbar.offsetTop;

function isStickyNavigation() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add('sticky-nav');
	} else {
		navbar.classList.remove('sticky-nav');
	}
}