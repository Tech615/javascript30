const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter(event) {
  // by passing in the event as a param and grabbing its target we can avoid
  // all the messiness of `this`
  const me = event.target;
  me.classList.add('trigger-enter');
  setTimeout(() => {
    me.classList.contains('trigger-enter') &&
    me.classList.add('trigger-enter-active')
  }, 150);
  background.classList.add('open');

  const dropdown = me.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(event) {
  // by passing in the event as a param and grabbing its target we can avoid
  // all the messiness of `this`
  const me = event.target;
  me.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter);
  trigger.addEventListener('mouseleave', handleLeave);
});
