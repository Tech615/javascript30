const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // There are multiple transform transistions, so we need to specify which one we are listening to.  In this case we are waiting until the flex container has finishes its transition
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// in the event listener, if you write toggleOpen(), it'll run on page load, which we don't want... that is why we exclude the () on the function
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
