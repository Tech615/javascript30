  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  msg.text = document.querySelector('[name="text"]').value;

  function voiceTempalte(v) {
    return `<option value="${v.name}">${v.name} (${v.lang})</option>`;
  }

  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.filter(v => v.lang.includes('en'))
      .reduce((acc, voice) => {
        return acc + voiceTempalte(voice);
      }, '');
  }

  function setVoice() {
    msg.voice = voices.find(v => v.name === this.value);
    toggleSpeech();
  }

  function toggleSpeech(startOver = true) {
    console.log(msg);
    speechSynthesis.cancel();
    if (startOver) { speechSynthesis.speak(msg); }
  }

  function setOption() {
    msg[this.name] = this.value;
    toggleSpeech();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggleSpeech);
  stopButton.addEventListener('click', () => toggleSpeech(false));
