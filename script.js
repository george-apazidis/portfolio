
// mobile icon click
function navClicks () {
    $('.burg, nav a').click(function () {
        
        // animate icon
        animateMobileIcon();
        
        // show or hide menu
        navBarShowHide();  
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


function handleClicks() {
    navClicks();
}

$(handleClicks);