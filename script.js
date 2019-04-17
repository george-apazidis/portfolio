
// mobile icon click
function mobileToggleOnClick () {
    $('.burg').click(function () {
        
        // animate icon
        animateMobileIcon();
        
        // show or hide menu
        navBarShowHide();  
    });
}

// nav click
function navOnClick () {
    $('nav a').click(function () {
        // hide menu
        navBarShowHide();

        // scroll to section
        smoothScroll();

        // toggle mobile menu icon
        animateMobileIcon();
    });
}

// slide menu
function navBarShowHide () {
	$('nav').stop().slideToggle('fast');
}

// mobile icon animation
function animateMobileIcon () {
    $('.burg').stop().toggleClass('burg-close');
}

// smooth scroll to sections
function smoothScroll () {
	$('a[href*="#"]:not([href="#"])').on('click', function(e){
		e.preventDefault();
		
		if( $( $.attr(this, 'href') ).length > 0 ){
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 'fast');
		}
		return false;
	});
}

function handleButtons() {
    mobileToggleOnClick();
    navOnClick();
    smoothScroll();
}

$(handleButtons);