"use strict";

// mobile icon click
function navClicks () {
    $('.burg, nav a').click(function () {
        
        // do only if mobile menu is active
        if ($(window).outerWidth() < 576) {

            // animate icon
            animateMobileIcon();
            
            // show or hide menu
            navBarShowHide();  
        }
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