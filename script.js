function onMainNavigationClick() {
    $('.main_navigation li a').click(function () {
        console.log('inside click');
        if ($('.main_navigation').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_navigation').removeClass('open-nav');
        }
    });
}

// mobile icon click
function mobileToggleOnClick() {
    $('.burg').click(function () {
        
        // animate icon
        $('.burg').stop().toggleClass('burg-close');
        
        // animate menu
        $('nav').stop().slideToggle('fast');
        
    });
}

function initialzieFunctions () {
    mobileToggleOnClick();
    onMainNavigationClick();
}

$(initialzieFunctions);