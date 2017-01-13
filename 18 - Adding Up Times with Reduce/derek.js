function timeToSeconds(timeString) {
  const [sec, min, hour] = timeString.split(':').map(parseFloat).reverse();
  return sumTimes(hour, min, sec);
}

function sumTimes(hour, min, sec) {
  let h = m = s = 0;
  if (hour) { h = hour * 3600; }
  if (min) { m = min * 60; }
  if (sec) { s = sec; }

  return h + m + s;
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

const totalSeconds = Array.from(document.querySelectorAll('[data-time]'))
 .map(item => item.dataset.time)
 .reduce((acc, item, index) => {
    return acc + timeToSeconds(item);
  }, 0);

const totalTime = secondsToTime(totalSeconds);
console.log({totalSeconds, totalTime});
