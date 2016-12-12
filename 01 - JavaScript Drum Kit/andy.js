var codes = [65, 68, 70, 71, 72, 74, 75, 76, 83];

document.addEventListener('keydown', function(e){
    // only allowed key presses please
    if (codes.indexOf(e.keyCode) >= 0) {
        var code = e.keyCode;
        // get a reference to the button, and the audioclip
        document.querySelector('[data-key="' + code + '"]').classList.add('playing');
        var audio = document.querySelector('audio[data-key="' + code + '"]');
        audio.currentTime = 0;
        audio.play();
    }
});

document.addEventListener('keyup', function(e){
    // only allowed key presses please
    if (codes.indexOf(e.keyCode) >= 0) {
        var code = e.keyCode;
        // get a reference to the button, and the audioclip
        document.querySelector('[data-key="' + code + '"]').classList.remove('playing');
    }
});