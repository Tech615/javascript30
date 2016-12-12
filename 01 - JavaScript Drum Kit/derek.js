// REQUIREMENTS
// On keypress:
//  play sound file from src attribute of relevant audio element
//  add class 'playing' to appropriate div.key until animation completed
Array.from(document.querySelectorAll('.key')).forEach(function(el) {
  el.addEventListener('transitionend', function(evt) {
      if (evt.propertyName !== 'transform') { return; }
      evt.target.classList.remove('playing');
  })
});
// I tried the above using event bubbling on either the window object or
// selecting the .keys div. Worked fine in Firefox. But if you _really_ spam
// a key in Chrome you can get the playing class to "stick."
window.addEventListener('keydown', function(evk) {
  const kc = evk.keyCode;
  const myAudio = document.querySelector(`audio[data-key="${kc}"]`);
  const myKey = document.querySelector(`.key[data-key="${kc}"]`);
  if (! myAudio && ! myKey) { return; }
  myKey.classList.add('playing');
  myAudio.currentTime = 0;
  myAudio.play();
} );
// On constant repeat in my head as I work on this project:
// https://www.youtube.com/watch?v=Q4QY5Z8LBEo
