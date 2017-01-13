/* We have a query selector, climbing in your DOM, snatching your elements up*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const pgBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Fun functions to call and invoke */
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function toggleButton() {
  video.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
}
function skip() { video.currentTime += parseFloat(this.dataset.skip); }
function handleRangeUpdate() { video[this.name] = this.value; }
function handleProgress() {
  pgBar.style.flexBasis = ((video.currentTime / video.duration) * 100) + '%';
}
function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
function moveScrub(event) { if (mousedown) { scrub(event); } }
function md(event) { mousedown = true; }
function mu(event) { mousedown = false; }

/* Be vewwy vewwy quiet, I'm hunting events */
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// In the video Wes also calls handleRangeUpdate on mousemove but I don't think
// that's the behavior we want for the sliders. Only on change.

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', moveScrub);
progress.addEventListener('mousedown', md);
// We need to listen for our mouseup event _anywhere_ in the window.
window.addEventListener('mouseup', mu);
