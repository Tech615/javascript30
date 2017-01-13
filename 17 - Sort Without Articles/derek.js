const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function compareWithoutArticles(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
}

function removeArticles(phrase) {
  const upperArticles = ['A', 'AN', 'THE'];
  const bits = phrase.split(' ');
  const index = (upperArticles.indexOf(bits[0].toUpperCase()) > -1) ? 1 : 0;
  return bits.slice(index).join(' ');
}

document.querySelector('#bands').innerHTML = bands
  .sort(compareWithoutArticles)
    .reduce((acc, item) => {
      return acc + `<li>${item}</li>`;
    }, '');
