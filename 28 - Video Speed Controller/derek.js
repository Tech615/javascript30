const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const min = 0.5;
const max = 4.0;

function handleMove(event) {
  const percent = (event.pageY - speed.offsetTop) / speed.offsetHeight;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = (percent * (max - min) + min).toFixed(2);
  bar.style.height = height;
  bar.textContent = playbackRate + 'x';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
