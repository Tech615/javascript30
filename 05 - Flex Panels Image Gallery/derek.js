/**
 * REQUIREMENTS
 *  Clicking a panel should toggle it to an "open" state as defined by
 *    .open class in the CSS above.
 *  Transitioning into the .open state should also briefly apply the
 *    .open-active class, which can safely be removed on transitionend.
 */
document.querySelectorAll('.panel').forEach(p => {
  p.addEventListener('click', function (c_event) {
    this.classList.toggle('open');
  });
  p.addEventListener('transitionend', function (t_event) {
    if (t_event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
  });
});
// This one also involves several lines of CSS changes not reflected here
