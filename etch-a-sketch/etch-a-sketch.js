//----- SELECT THE ELEMENTS ON THE PAGE -----
const canvas = document.querySelector('#etch-a-sketch');

// the context object is the place where we do our drawing
const ctx = canvas.getContext('2d');

const shakeBTN = document.querySelector('.shake');

// distance in px to move the drawing
const MOVE_AMOUNT = 20;


//----- SETUP CANVAS FOR DRAWING -----

// create variables called height and width from the same properties on our canvas (destructuring)
const { width, height } = canvas;

// create random x and y starting points on the canvas based on width/height of canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// styles for drawing edge
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// start the drawing
ctx.beginPath();

// starting point
ctx.moveTo(x, y);

// ending point
ctx.lineTo(x, y);

// draws line between starting and ending points (moveTo > lineTo)
// on page load, these values will be the same values so that it renders a circle
ctx.stroke();


//----- DRAW -----

function draw(key) {

    // increment the hue
    hue += 5;

    // update HSL value by changing the 'hue'
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // start the drawing
    // necessary to retain color > all lines are separate paths
    ctx.beginPath();

    // starting point
    ctx.moveTo(x, y);


    // update the x and y values depending on what key was pressed
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    // ending point
    ctx.lineTo(x, y);

    // draws line between starting and ending points (moveTo > lineTo)
    ctx.stroke();
}

//----- KEY HANDLERS -----

function handleKey(e) {

    // if key is any arrow key
    if (e.key.includes('Arrow')) {

        // prevent the page from scrolling
        e.preventDefault();

        // call the draw function
        draw(e.key);
    }
}

//----- CLEAR CANVAS -----

function clearCanvas() {
    
    // shake class is used to handle animation
    canvas.classList.add('shake');

    // 
    ctx.clearRect(0, 0, width, height);

    // listen for CSS animation to finish
    canvas.addEventListener('animationend', function() {

        // after animation is complete, remove class shake
        canvas.classList.remove('shake');
        },

        // third argument object 'once' to only add the event listener once
        { once: true }
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeBTN.addEventListener('click', clearCanvas);