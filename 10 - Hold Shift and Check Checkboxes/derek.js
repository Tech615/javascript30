let selectMany = checkMe = prev = false;
const boxes = document.querySelectorAll('input[type="checkbox"]');
document.querySelector('.inbox').addEventListener('change', e => {
  if (selectMany && prev && e.target.checked && prev !== e.target) {
    boxes.forEach(box => {
      if (box === prev || box === e.target) { checkMe = ! checkMe; }
      if (! box.checked && checkMe) { box.checked = true; }
    });
  } // else do nothing
  prev = e.target;
});
// I didn't know about Event.shiftKey on keyboard and mouse events before the
// video. So I used the same keydown and keyup tricks from Day 1 to pull off
// the same general logic.
window.addEventListener('keydown', e => {
  if (e.keyCode === 16) { selectMany = true; }
});
window.addEventListener('keyup', e => {
  if (e.keyCode === 16) { selectMany = false; }
});
