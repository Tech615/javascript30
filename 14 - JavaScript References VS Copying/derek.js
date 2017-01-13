// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'shut up wesley';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
console.log(players, team);
// however what happens when we update that array?
// now here is the problem!
team[3] = 'Lux';
console.log(players, team);
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // slice with no params clones an array
team2[3] = 'Uncle Steve';
console.log(players, team2);
// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Cousin Nicky';
console.log(players, team3);
// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Mr. Beauregard';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'Baby Wizard';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Sleepy Gary',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;
console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, cap2);

// Wes doesn't cover this in the video but we can also make a 2 param call
// to Object.assign() and do whatever we want with the cloned output. Just
// keep in mind it's a shallow clone.

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};
console.log(wes);

const dev = Object.assign({}, wes);
dev.social.twitter = '@Pencilvestyr'
console.log(wes, dev);
console.log('Shallow but performant');

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@Hamurai';
console.log(wes, dev2);
console.log('Double encoding via JSON is super ineffcient.');
console.log('But you get deep cloning of attributes out of it.');
console.log('However, if your object has any methods on it, your SOL.');
console.log('JSON doesn\'t grok methods.');
