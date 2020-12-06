/*

Fix for viewport units on mobile
https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

Check here for when vhc values will be available:
https://github.com/w3c/csswg-drafts/issues/4329

*/


// function that will resize the body height when the window is resized.
function resizeHeight() {

    let vh = window.innerHeight * 0.01;    
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

let resizeTimer = false;

// bind event to the end of resize
// https://css-tricks.com/snippets/jquery/done-resizing-event/
window.addEventListener('resize', () => {
    if(resizeTimer !== false) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(resizeHeight, 200); 
});


resizeHeight();