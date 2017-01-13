function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliders = Array.from(document.querySelectorAll('.slide-in'));

// image has active class
isActive = img => img.classList.contains('active');
// bottom of image is higher than top of window
isOffTop = img => (img.offsetTop + img.height < window.scrollY);
// top of image is below bottom of window
isOffBottom = img => (img.offsetTop > window.scrollY + window.innerHeight);
// no part of the image is within the viewport
isOffScreen = img => (isOffTop(img) || isOffBottom(img));
// some part of the image is within the viewport
isOnScreen = img => (! isOffScreen(img));
// image currently in a state we don't wanna allow
needsClassChange = img => (
  (isActive(img) && isOffScreen(img))
  ||
  (isOnScreen(img) && ! isActive(img))
);
// just a bit shorter
activeToggle = img => img.classList.toggle('active');

function scrollHandler() {
  sliders.filter(needsClassChange).forEach(activeToggle);
}

window.addEventListener('scroll', debounce(scrollHandler));
