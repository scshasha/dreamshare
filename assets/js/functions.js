
$(document).ready(function(){

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


	///////////////
	/// MENU BAR //
	///////////////
	
	$('.menu').click(function() {
		$('nav ul').toggleClass('active');
		if (window.pageYOffset == 0) {
			$('header').toggleClass('sticky-nav');
		}
	});

});
