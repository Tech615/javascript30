const divs = document.querySelectorAll('div');

function logText(event) {
  console.log(this.classList.value);
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
  event.stopPropagation();
}

// see options param at
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const opts = {
  capture: true,
  once: false
};

divs.forEach(div => div.addEventListener('click', logText, opts));
