function changeHandler() {
  document.documentElement.style
    .setProperty(
      `--${this.name}`,
      this.value + (this.dataset.sizing || '')
  );
}

/**
 * Arrow function syntax is a bit complex. In the video Wes drops the
 * optional parenthesis () for single paramaters AND he's also dropping the
 * optional curly braces {} for single expressions. But to pull that off he
 * ends up writting 2 calls to forEach(). We can do this with a single
 * forEach() if we wrap our multi-statement body in curly braces {}.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
document.querySelectorAll('.controls input').forEach(input => {
  input.addEventListener('change', changeHandler);
  input.addEventListener('mousemove', changeHandler);
});
