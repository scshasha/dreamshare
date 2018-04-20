
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

	///////////////////////
	/// MENU LINK CLICKS //
	///////////////////////

	$('nav ul li').click(function(event) {
		event.preventDefault();

		return navigationRouter(event);
	});

	$('nav ul li a').click(function(event) {
		event.preventDefault();

		return navigationRouter(event);
	});

	function navigationRouter(args)
	{
		var base_url ='http://localhost/apps/website/dreamshare'; // window.location.href; // temp

		var hyper_link = args.currentTarget.innerHTML;
		var route_to = $(hyper_link).attr('href');

		if (route_to == '') {
			var route_to = '/';
		}


		return	window.location = base_url + route_to;
	}

});
