const keys = [];
const secret = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft',
  'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

window.addEventListener('keyup', (event) => {
  console.log(event.key);
  keys.push(event.key);
  keys.slice(-secret.length - 1, keys.length - secret.length);
  if (keys.join('').toLowerCase() == secret.join('').toLowerCase()) {
    console.log('https://www.youtube.com/watch?v=Qz6h_sgSJog');
    cornify_add();
  }
});
