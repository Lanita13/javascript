// Easy Tasks
//                                            1. The Sorting Hat (Harry Potter)
// Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.
// Example input: `['Harry', 'Hermione', 'Ron', 'Draco']`
// Expected output: `['Harry - Gryffindor', 'Hermione - Ravenclaw', 'Ron - Gryffindor', 'Draco - Slytherin']`

// const students = ['Harry', 'Hermione', 'Ron', 'Draco'];
// const houses = ['Gryffindor', 'Ravenclaw', 'Gryffindor', 'Slytherin'];

// const sorted = students.map((item, index)=>{
//     return item + "-" + houses[index] 
// }) 

// console.log(sorted);



// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 2. The Pokémon Filter
// Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP less than 500 using the `filter()` method.
// Example input: `[ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]`
// Expected output: `[ {name: 'Charizard', CP: 900} ]`


// const pokemons = [{ name: 'Pikachu', CP: 320 },
// { name: 'Charizard', CP: 900 }];

// const strongPokemons = pokemons.filter(pokemon => pokemon.CP >= 500);
// console.log(strongPokemons);




// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Avengers Assemble (Reduce)
// The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger’s mission.
// Example input: `[ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]`
// Expected output: `Total budget: 7000`

// const avengers = [ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];

// const totalBudget = avengers.reduce((acc, item) => acc + item.budget, 0 )



// console.log(totalBudget);






// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 4. The Lost Treasure Map
// A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
// Example input: `['left', 'right', 'forward']`
// Expected output: `['Move left', 'Move right', 'Move forward']`




// const directions = ['left', 'right', 'forward']
// const instructions = directions.map(direction => `Move ${direction}`);

// console.log(instructions);





// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Normal Tasks
// 5. The Jedi Archives
// Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return ‘Master found!’
// Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
// Expected output: `'Master found!'`


// const jedi = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin']
// const master = jedi.find(name => name  === `Yoda`);

// if(master){
//     console.log('Master found!');
// }


// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 6. The One Ring Inventory
// Frodo needs to keep track of his inventory. Implement an array where items can be added with `push()` and removed with `pop()`.
// Example actions: `push('Lembas Bread')`, `push('Ring')`, `pop()`
// Expected output: `['Lembas Bread']`



// const inventory =[];

// inventory.push('Lembas Bread');
// inventory.push('Ring');

// inventory.pop();
// console.log(inventory);







// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 7. Spider-Man’s Web of Crime
// Given an array of crime locations, sort them alphabetically using `sort()`.
// Example input: `['Times Square', 'Central Park', 'Brooklyn']`
// Expected output: `['Brooklyn', 'Central Park', 'Times Square']`

// const crimeLocations = ['Times Square', 'Central Park', 'Brooklyn'];
// crimeLocations.sort();
// console.log(crimeLocations);




// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 8. The Time Stone (Array Slicing)
// Doctor Strange wants to revisit only the last 3 events from an array of mystical occurrences. Use `slice()` to retrieve them.
// Example input: `[ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ]`
// Expected output: `['Ancient One’s Warning', 'Time Loop', 'Portal Opening']`




// const mysticalOccurrences = ['Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening'];
// const lastTreeEvents = mysticalOccurrences.slice(-3);

// console.log(lastTreeEvents);






// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Hard Tasks
// 9. Matrix Reloaded: Data Processing
// A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
// Example input: `[3, 7, 15, 22]`
// Expected output (binary conversion): `['11', '111', '1111', '10110']`
// Expected output (highest value): `22`





// const numbers = [3, 7, 15, 22];

// const binaryNumbers = numbers.map(num => num.toString(2));
// const highestValue = numbers.reduce((max, num) => ( num > max ? num : max), 0);

// console.log(`Binary Numbers:`, binaryNumbers);
// console.log(`Highest Value:`,   highestValue);











// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Cyberpunk City Data Processing
// A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
// 1. Use `map()` to convert each risk level to hexadecimal.
// 2. Use `filter()` to extract levels above 100.
// 3. Use `reduce()` to calculate the total risk level.
// 4. Use `find()` to locate the first risk level above 150.
// 5. Use `splice()` to remove corrupt data (risk levels below 80).
// Example input: `[99, 135, 76, 200, 150, 89]`
// Expected output:
// Hex values: `['63', '87', '4c', 'c8', '96', '59']`
// Filtered high risks: `[135, 200, 150]`
// Total risk level: `749`
// First risk above 150: `200`
// Cleaned data (after removing <80): `[99, 135, 200, 150, 89]`


// const risks = [99, 135, 76, 200, 150, 89];


// const hexValues = risks.map(num => num.toString(16));
// console.log("Hex values:", hexValues);

// const highRisks = risks.filter(num => num > 100);
// console.log("Levels over 100:", highRisks); 


// const totalRisk = risks.reduce((sum, current) => sum + current, 0);
// console.log("Full threat level:", totalRisk); 


// const firstAbove150 = risks.find(num => num > 150);
// console.log("First level over 150:", firstAbove150); 


// const cleanedRisks = [...risks]; 
// for (let i = cleanedRisks.length - 1; i >= 0; i--) {
//   if (cleanedRisks[i] < 80) {
//     cleanedRisks.splice(i, 1);
//   }
// }
// console.log("Cleaned data (less than 80 deleted):", cleanedRisks); 

