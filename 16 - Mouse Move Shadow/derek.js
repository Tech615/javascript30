const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // max stretch / shadow distance

function shadow(event) {
  // The style of destructuring Wes uses in the video doesn't
  // sit right with me because the values are assigned left to
  // right rather than right to left. I find the syntax below
  // much easier to follow.
  const [width, height] = [hero.offsetWidth, hero.offsetHeight];
  // Using clientX / clientY or screenX / screenY here avoids the
  // need for the extra math in the video. Can also use `cosnt`
  // rather than `let`.
  const [x, y] = [event.clientX, event.clientY];
  const shadowX = calculate(x, width);
  const shadowY = calculate(y, height);

  text.style.textShadow = `
    ${shadowX}px ${shadowY}px 0 rgba(255,0,255,0.7),
    ${shadowX * -1}px ${shadowY}px 0 rgba(0,255,255,0.7),
    ${shadowY}px ${shadowX * -1}px 0 rgba(0,255,0,0.7),
    ${shadowY * -1}px ${shadowX}px 0 rgba(0,0,255,0.7)
  `;
}

calculate = (position, offset) => {
  return Math.round((position / offset * walk) - (walk / 2));
}

hero.addEventListener('mousemove', shadow);
