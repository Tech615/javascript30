const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// empty array we'll fill from our remote JSON data
const cities = [];
// gather up our relevant UI elements
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
// fetch remote response, parse it to json data, then push the data to cities
fetch(endpoint).then(r => r.json()).then(d => cities.push(...d));
/**
 * @param rx A RegExp object to match against city and state info
 * @param world An array of objects representing locations to search
 * @return Filtered array of any matches found
 *
 * Filter a list of locations by searching city and state keys by RegExp.
 */
function wordSearch(rx, world) {
  return world.filter(loc => rx.test(loc.city) || rx.test(loc.state));
}
/**
 * @param num An int, float, string, etc that can be converted to a Number
 * @return A string representation of the Number converted to en-US standard
 *  display
 *
 * Format a number.
 */
function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}
/**
 * @param word A string literal version of our search term
 * @param rx A RegExp object representing our search term
 * @param searchstring The full string to search within
 * @return A string with any occurances of our search term styled for hilight
 *
 * Wraps all occurances of our search term (word) found within our search
 * context (searchstring) in a span.hl element used to hilight the relevant
 * substring.
 */
function hl(word, rx, searchstring) {
  return searchstring.replace(rx, `<span class="hl">${word}</span>`);
}
/**
 * @param word A string literal version of our search term
 * @param rx A RegExp object representing our search term
 * @param location A location object, assumed to have city and state keys
 * @return A string with formatted city and state names
 *
 * Returns a string containing our city and state names separated by a comma
 * and with all occurances of our search term formatted for hilight.
 */
function citystate(word, rx, location) {
  return `${hl(word, rx, location.city)}, ${hl(word, rx, location.state)}`;
}
/**
 * @param word A string literal version of our search term
 * @param rx A RegExp object representing our search term
 * @param location A location object, assumed to have city and state keys
 * @return A string filling a list item template with values based on our
 *  search term and matching location.
 *
 * Returns a string containing an HTML formatted list item for our location.
 */
function matchTemplate(word, rx, location) {
  return `
    <li>
      <span class="name">${citystate(word, rx, location)}</span>
      <span class="population">${formatNumber(location.population)}</span>
    </li>
  `;
}
/**
 * @param word The string literal user input for searching
 * @param rx A RegExp object created from the input string
 * @param matches Array of filtered results
 * @return HTML string with a formatted list item per matching location
 *
 * Concats a formatted template string together for each matching location.
 */
function formatMatches(word, rx, matches) {
  return matches.reduce((acc, loc) => acc + matchTemplate(word, rx, loc), '');
}
/**
 * Captures user input for our search term, filters our list of locations
 * based on the search term, and populates .suggestions with a formatted list
 * of matching locations.
 */
function updateUI() {
  const word = this.value;
  const rx = new RegExp(word, 'gi');
  const matches = wordSearch(rx, cities);
  suggestions.innerHTML = formatMatches(word, rx, matches);
}
// call updateUI on both change and keyup events on our search input
searchInput.addEventListener('change', updateUI);
searchInput.addEventListener('keyup', updateUI);
