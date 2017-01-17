let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if(secondsLeft < 0) {
        clearInterval(countdown);
      } else {
        displayTimeLeft(secondsLeft);
      }
    }, 1000);
}

function secondsToTime(sec) {
  const H = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  return H + ':' + twoDigitNum(m) + ':' + twoDigitNum(s);
}

function twoDigitNum(num) {
  const pad = (num < 10) ? '0' : '';
  return pad + num;
}

function displayTimeLeft(seconds) {
  const display = secondsToTime(seconds);
  document.title = display;
  timerDisplay.textContent = display;
}
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${twoDigitNum(minutes)}`;
}

function startTimer(event) { timer(event.target.dataset.time); }

function handleForm(event) {
  event.preventDefault();
  timer(document.customForm.minutes.value * 60);
  document.customForm.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', handleForm);
