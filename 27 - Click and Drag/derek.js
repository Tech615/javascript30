const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


function handleDown(event) {
  isDown = true;
  slider.classList.add('active');
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
function handleMove(event) {
  if (isDown) {
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  }
}

function ixnay() {
  isDown = false;
  slider.classList.remove('active');
}

slider.addEventListener('mousedown', handleDown);
slider.addEventListener('mouseleave', ixnay);
slider.addEventListener('mousemove', handleMove);
slider.addEventListener('mouseup', ixnay);
