const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole = 0;
  let timeUp = false;
  let score = 0;

  function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    let top = holes.length - 1;
    let bottom = 0;
    if (lastHole === top) {
      top--;
    } else if (lastHole === bottom) {
      bottom++;
    } else  if (rand(0, 1)) {
      top = lastHole - 1;
    } else {
      bottom = lastHole + 1;
    }
    const index = rand(bottom, top);
    lastHole = index;
    return holes[index];
  }

  function prairiedog() {
    const time = rand(200, 1000);
    const hole = randomHole(holes);
    console.log({time});
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (! timeUp) { prairiedog(); }
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    prairiedog();
    setTimeout(() => timeUp = true, 10000)
  }

  function bonk(event) {
    if(event.isTrusted) {
      score++;
      event.target.classList.remove('up');
      scoreBoard.textContent = score;
    }
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));
