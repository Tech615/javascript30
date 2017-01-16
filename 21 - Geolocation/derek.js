const rose = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

handleWin = (data) => {
  const dc = data.coords;
  speed.textContent = murka(dc.speed);
  rose.style.transform = `rotate(${dc.heading}deg);`;
}

handleFail = (error) => {
  alert('This page is really boring without geolocation access.');
}

murka = (kph) => kph * 0.621;

navigator.geolocation.watchPosition(handleWin, handleFail);
