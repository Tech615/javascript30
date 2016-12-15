// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
  "1. Filter the list of inventors for those who were born in the 1500's"
);
const filtered = inventors.filter(function (item) {
  return (1500 <= item.year && item.year < 1600);
})
console.table(filtered);
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log(
  "2. Give us an array of the inventors' first and last names"
);
const inventor_names = inventors.map(function (item) {
  return { first: item.first, last: item.last };
});
console.table(inventor_names);
// Having watched the video now I realize what is meant here is an array of
// full names as strings. Not first and last names as keys in an object.
console.log(
  "Full names as single strings."
);
const fullnames = inventors.map(i => i.first + " " + i.last);
console.log(fullnames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log(
  "3. Sort the inventors by birthdate, oldest to youngest"
);
const birth_sorted = inventors.sort((a, b) => a.year - b.year);
console.table(birth_sorted);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log(
  "4. How many years did all the inventors live?"
);
const total_years = inventors.reduce(
  function (accumulator, currentValue, currentIndex, self) {
  return (accumulator + (currentValue.passed - currentValue.year));
  },
0);
console.log(total_years);
// 5. Sort the inventors by years lived
console.log(
  "5. Sort the inventors by years lived"
);
const age_sorted = inventors.sort(function (a, b) {
  return (b.passed - b.year) - (a.passed - a.year);
});
console.table(age_sorted);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log(
  "6. create a list of Boulevards in Paris that contain 'de' anywhere in the name"
);
//    Array.from(
//      document.querySelector('.mw-category').querySelectorAll('a')
//    ).map(link => link.textContent)
//    .filter(name => name.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(
  "7. Sort the people alphabetically by last name"
);
console.log(
  `It's already sorted alphabetically by last name. What he actually wants
  is to sort by first name, so we gotta split the individual strings at the
  commas.`
);
const what_wes_wants = people.sort((a, b) => {
  const [al, af] = a.split(', ');
  const [bl, bf] = b.split(', ');
  return af > bf ? 1 : -1;
});
console.log(what_wes_wants);
// 8. Reduce Exercise
// Sum up the instances of each of these
//    console.log(
//      "8. Sum up the instances of each of these"
//    );
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const word_counts = data.reduce(
  function (accumulator, currentValue, currentIndex, self) {
    if (accumulator.hasOwnProperty(currentValue)) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
  return accumulator;
  },
{});
console.log(word_counts);
