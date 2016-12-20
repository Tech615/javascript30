// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

age = person => (new Date().getFullYear() - person.year);
idCheck = (obj, num) => obj.id === num;
// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
console.log('Both some() and every() are special applications of reduce()');
const someAdults = people.some(person => (age(person) >= 19));
console.log({someAdults});
const rSomeAdults = people.reduce((acc, p) => acc || (age(p) >= 19), false);
console.log({rSomeAdults});
// Array.prototype.every() // is everyone 19?
const everyAdults = people.every(person => (age(person) >= 19));
console.log({everyAdults});
const rEveryAdults = people.reduce((acc, p) => acc && (age(p) >= 19), true);
console.log({rEveryAdults});
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const myComment = comments.find(c => idCheck(c, 823423));
console.log({myComment});
// Array.prototype.findIndex()
const myIndex = comments.findIndex(c => idCheck(c, 823423));
console.log({myIndex});
// Find the comment with this ID
// delete the comment with the ID of 823423
const deletedComment = comments.filter(c => ! idCheck(c, 823423));
console.log(deletedComment);
