"use strict";

// variables for throttling
let scrollTimeout;
let throttle = 200;

// define boolean for largest breakpoint to be used scroll listener event
let largeBreakPoint = $(this).outerWidth() >= 768 ? true : false;

// function to animate the header/nav when the browser is scrolled down 80px only on largest breakpoint
function animateHeader() {
    if (largeBreakPoint == true) {
        if ($(window).scrollTop() > 80) {

            // if cover does not exist then add the following HTML/CSS classes to handle animations
            if (!$('.navCover').length) {

                // insert top white block above nav
                $('body').prepend(`<div class="navCover"></div>`);

                // add class to animate header elements via CSS
                $('header').addClass('animate');

                // add class to animate nav via CSS
                $('nav').addClass('animate');
            }
        } else {
            // if cover exists, then reset header/nav to original states
            if ($('.navCover').length) {

                // remove nav cover
                $('.navCover').remove();

                // animate header elements back to original locations
                $('header, nav').removeClass('animate');
            }
        }
    }
}

// throttle function for browser resize
$(window).on('resize', function () {
    /* $(window).on('resize, scroll' , function(){ */

    // console.log('resize NO throttle');
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {

            // console.log('resize WITH throttle');

            // recalculate this variable
            largeBreakPoint = $(this).outerWidth() >= 768 ? true : false;

            // run animations when browser is resized
            animateHeader();

            scrollTimeout = null;
        }, throttle);
    }
});

// throttle function for browser scroll
$(window).on('scroll', function () {

    //  console.log('scroll NO throttle');

    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {

            // console.log('scroll WITH throttle');

            // run animations when browser is scrolled
            animateHeader();

            scrollTimeout = null;
        }, throttle);
    }
});

// mobile icon click
$('.burg, nav a').click(function () {

    // do only if mobile menu is active
    if ($(window).outerWidth() < 576) {

        // animate icon
        $('.burg').stop().toggleClass('burg-close');

        // show or hide menu
        $('nav').stop().slideToggle('fast');
    }
});

// function for smooth scrolling
$('a[href^="#"]').on('click', function (e) {
    //  this conflicts with the offset
    //  e.preventDefault(); 

    let target = this.hash,
        $target = $(target);

    // set offset of larg breakpoint to 60px, otherwise keep at 0
    let offsetNum = (largeBreakPoint == true) ? 60 : 0;

    // offset scroll function
    $('html, body')
        .stop()
        // animate the scroll to top of page minus the offset 
        .animate({
            'scrollTop': $target.offset().top - offsetNum
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
});