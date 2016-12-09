function play(e) {
    const key = get(".key", e.keyCode);
    const audio = get("audio", e.keyCode);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        key.addEventListener("transitionend", removeTransition);
    }
}

function removeTransition(e) {
    if (e.propertyName === "transform") {
        this.classList.remove("playing");
    }
};

function get(el, code) {
    return document.querySelector(`${el}[data-key="${code}"]`);
}

window.addEventListener("keydown", play);