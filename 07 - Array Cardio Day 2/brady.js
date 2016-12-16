// Some and Every Checks

// 1. Array.prototype.some() // is at least one person 19?

const isAdult = people.some(person => ((new Date()).getFullYear() - person.year >= 19 ));

// Wrapping in {} show function name and result
console.log({isAdult});

// 2. Array.prototype.every() // is everyone 19?

const allAdults = people.every(person => ((new Date()).getFullYear() - person.year >= 19));

console.log({allAdults});

// 3. Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

// 4. Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

comments.splice(index, 1);

console.table(comments);
