// grab our canvas and its context
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// set some reasonable defaults
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// initialize some values using let since we want these to change
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let countUp = true;

// these are like config values so back to const
const line_max = 100;
const line_min = 1;
const hue_max = 360;

// list possible values for globalCompositeOperation
const modes = [
  'source-over', 'source-in', 'source-out', 'source-atop', 'destination-over',
  'destination-in', 'destination-out', 'destination-atop', 'lighter', 'copy',
  'xor', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge',
  'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue',
  'saturation', 'color', 'luminosity'
];
const random_index = Math.floor(Math.random() * modes.length);
console.log({random_index});
const chosen_mode = modes[random_index];
console.log({chosen_mode});
ctx.globalCompositeOperation = modes[random_index];

// set our sentinal bool and x/y coords for draw start
function startDrawing(event) {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

// set our sentinal bool and x/y coords for draw end
function stopDrawing(event) {
  isDrawing = false;
  [lastX, lastY] = [0, 0];
}

// draw a line segment between xy for previous event and xy for this event
function draw(event) {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    groove();
  } // else do nothing
}
// just a function to house all the funky stuff we do
function groove() {
  hue = ++hue % hue_max;
  if (ctx.lineWidth >= line_max || ctx.lineWidth <= line_min) {
    countUp = !countUp;
  }
  if(countUp) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
// attach event listeners for our various functions
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
