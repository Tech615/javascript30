    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // For shorthand, replace filter(function(inventor){...}) with filter(inventor => ...)
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));

    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // can also use template literals instead of concatenation `${inventor.first} ${inventor.last}`
    const names = inventors.map(inventor => (inventor.first + ' ' + inventor.last));

    console.log(names);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const ageSort = inventors.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });

    // Shorthand inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ageSort);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const years = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(years);

    // 5. Sort the inventors by years lived

    // Youngest to oldest
    const oldestSort = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);

    console.table(oldestSort);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // could also do this referencing the first object:
    // const category = document.querySelector('.my-category');
    // const links = Array.from(category.querySelectorAll('a'));

    const links = Array.from(document.querySelectorAll('.mw-category a'));

    const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // This converts to objects first... not sure if that's what he intended or not.
    const splitNames = people.map(function(person) {
        return person.split(', ');
    });

    const lastNameSort = splitNames.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    console.table(lastNameSort);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const vehicleCount = data.reduce((obj, item) => {
        // if object doesn't exist, create a value of zero
        if(!obj[item]) {
            obj[item] = 0;
        }
        // if object already exists, add to count
        obj[item]++;
        return obj;
    }, {}); // Initially creates an empty object

    console.log(vehicleCount);
