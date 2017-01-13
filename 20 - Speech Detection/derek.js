window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const words = document.querySelector('.words');
const recog = new SpeechRecognition();
recog.interimResults = true;

let p;
newParagraph();

function handleRecognition(event) {
  p.textContent = Array.from(event.results)
    .reduce((acc, item) => acc + item[0].transcript, '');
  if (event.results[0].isFinal) { newParagraph(); }
}

function newParagraph() {
  p = document.createElement('p');
  words.appendChild(p);
}

recog.addEventListener('result', handleRecognition);
recog.addEventListener('end', recog.start);
recog.start();
