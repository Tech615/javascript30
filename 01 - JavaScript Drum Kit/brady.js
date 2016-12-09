function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return; // Stop the function from running all together
    audio.currentTime = 0; // Rewinds audio so that it allows same key audio to overlap
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
