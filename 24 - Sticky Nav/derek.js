const nav = document.querySelector('#main');
const navTop = nav.offsetTop;

function fixNav() {
  (window.scrollY >= navTop) ? fix() : unfix() ;
}

function fix() {
  document.body.style.paddingTop = nav.offsetHeight + 'px';
  document.body.classList.add('fixed-nav');
}

function unfix() {
  document.body.style.paddingTop = 0;
  document.body.classList.remove('fixed-nav');
}

window.addEventListener('scroll', fixNav);
