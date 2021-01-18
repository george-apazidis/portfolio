const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++;
    

    if(currentActive > circles.length) {
        /* if on the last step, do not increment currentActive.
           Always keep it equal to the last step # */
        currentActive = circles.length;
    }

    update();
    
})

prev.addEventListener('click', () => {
    currentActive--;
    
    if(currentActive < 1) {
        /* if on the first step, do not decrement currentActive.
           Always keep it equal to the frist step  */
        currentActive = 1;
    }
    
    update();
})

function update() {

    /* For each circle, check if index of circle is less than currentActive. 
       if true then add 'active', if false then remove 'active'
    */
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle. classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    /* create node list of all active steps */
    const actives = document.querySelectorAll('.active')

    /* create percentage for progress width by using length of active steps node list and divide by length of circles node list */
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%';

    /* disable buttons if step # is on first or last */
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
    

}