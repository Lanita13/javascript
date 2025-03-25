//                         1. Batman’s Night Patrol (If Statements & Boolean Conditions)
// Story: Gotham City is in danger, but Batman only patrols if the Bat-Signal is on.
// Task: Write a function batmanPatrol(signalOn) that:
// Logs “Batman is on patrol!” if signalOn is true.
// Logs “Gotham is quiet tonight.” if signalOn is false.
// Example:
// batmanPatrol(true);  // Output: "Batman is on patrol!"
// batmanPatrol(false); // Output: "Gotham is quiet tonight."


// const batmanPatrol = (signalOn) =>{
//     if (signalOn){
//         console.log ("Batman is on patrol!");
//     } else{
//         console.log("Gotham is quiet tonight");
//     }
// }


// batmanPatrol(true);




// -----------------------------------------------------------------------------------------------------------------------------------------------

//                                               2. Sorting Avengers (Truthy & Falsy Values)
// Story: Nick Fury is sorting Avengers based on availability.
// Task: Write a function availableAvengers(avengers) that:
// Takes an array of names and falsy values.
// Returns a new array with only truthy values.
// Example:
// console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));
// // Output: ["Iron Man", "Thor"]


// 1)

// function availableAvengers(avengers) {
//    return availableAvengers.filter(item => item)
// }

// console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));



//  OR



// 2)
// function availableAvengers(avengers) {
//     let result = [];

//     for(let i =0; i< avengers.length; i++){
//         if(avengers[i]){
//             result.push(avengers[i]);
//         }
//     }
//     return result;
// }

// console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));



// ------------------------------------------------------------------------------------------------------------------------------------------------

// 3.                                                              Spider-Man’s Mask Check (Negation !)
// Story: Peter Parker can remove his mask only when he is alone.
// Task: Write a function canRemoveMask(peopleAround) that:
// Logs “Safe to remove mask!” if peopleAround is 0.
// Logs “Keep the mask on!” otherwise.
// Example:
// canRemoveMask(0);  // Output: "Safe to remove mask!"
// canRemoveMask(3);  // Output: "Keep the mask on!"



// function canRemoveMask(peopleAround) {
//     if (!peopleAround) {
//         console.log("Safe to remove mask!");
//     } else {
//         console.log("Keep the mask on!");
//     }
// }
// canRemoveMask(7);

                                //    OR
  

// const canRemoveMask = (peopleAround) => peopleAround ? "Safe to remove mask!" : "Keep the mask on!"

// console.log (canRemoveMask(0));


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4.                                               Naruto’s Chakra Levels (Ternary Operator)
// Story: Naruto’s chakra determines his combat readiness.
// Task: Write a function checkChakra(level) that:
// Returns "Full Power" if level > 80.
// Returns "Still Fighting" if level >= 50.
// Returns "Need Ramen Recharge" otherwise.
// Example:
// console.log(checkChakra(90)); // "Full Power"
// console.log(checkChakra(60)); // "Still Fighting"
// console.log(checkChakra(30)); // "Need Ramen Recharge"



// const checkChakra = (level) => level > 80 ? "Full Power" : level >= 50 ? "Still Fighting" : "Need Ramen Recharge"


// console.log(checkChakra(90)); // "Full Power"
// console.log(checkChakra(60)); // "Still Fighting"
// console.log(checkChakra(30)); // "Need Ramen Recharge"


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                      5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)
// Story: A Jedi can become a master only if their wisdom is high and anger is low.
// Task: Write a function isJediMaster(angerLevel, wisdomLevel) that:
// Returns true if angerLevel < 30 and wisdomLevel > 70.
// Returns false otherwise.
// Example:
// console.log(isJediMaster(20, 80)); // true
// console.log(isJediMaster(50, 90)); // false


// const isJediMaster = (angerLevel, wisdomLevel) => angerLevel < 30 && wisdomLevel > 70;

// console.log(isJediMaster(20, 80)); // true
// console.log(isJediMaster(50, 90)); // false



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6.                                           One Piece Treasure Hunt (Boolean Coercion & Conditionals)
// Story: Luffy finds a treasure if the location contains a truthy value.
// Task: Write a function isTreasureSpot(content) that:
// Returns true if JavaScript treats content as truthy.
// Returns false otherwise.
// Example:
// console.log(isTreasureSpot("gold")); // true
// console.log(isTreasureSpot(0)); // false

// const isTreasureSpot = (content) =>  !!content


// console.log(isTreasureSpot("gold")); // true
// console.log(isTreasureSpot(0)); // false


// !----------------------------------------------------------------------------------------------------------------------------------------------

// 7.                                Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)
// Story: Doctor Strange needs a passcode that JavaScript considers equal under coercion but not strict equality.
// Task: Write a function strangePasscode(code1, code2) that:
// Returns true if code1 == code2 but false if code1 === code2.
// Hint: Use JavaScript quirks with null, undefined, false, 0, and empty strings.
// Example:
// console.log(strangePasscode(null, undefined)); // true
// console.log(strangePasscode("0", 0)); // true
// console.log(strangePasscode(0, false)); // true
// console.log(strangePasscode(0, 0)); // false

// const strangePasscode = (code1, code2) => code1 == code2 && code1 !== code2


// console.log(strangePasscode(null, undefined)); // true
// console.log(strangePasscode("0", 0)); // true
// console.log(strangePasscode(0, false)); // true
// console.log(strangePasscode(0, 0)); // false


// !--------------------------------------------------------------------------------------------------------------------------------------------------

// 8.             Loki’s Illusions (Object Comparison & Identity)
// Story: Loki creates magical duplicates of himself. The Avengers must check if two Loki instances are actually the same.
// Task: Write a function isSameLoki(loki1, loki2) that:
// Returns true if both objects reference the same instance.
// Returns false otherwise.
// Example:
// let lokiA = { name: "Loki" };
// let lokiB = { name: "Loki" };
// let lokiC = lokiA;

// console.log(isSameLoki(lokiA, lokiB)); // false
// console.log(isSameLoki(lokiA, lokiC)); // true



// let lokiA = { name: "Loki" };
// let lokiB = { name: "Loki" };
// let lokiC = lokiA;

// const isSameLoki = (loki1, loki2) => loki1 === loki2;


// console.log(isSameLoki(lokiA, lokiB)); // false
// console.log(isSameLoki(lokiA, lokiC)); // true


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9.                                                             Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)
// Story: Schrödinger’s Cat is in a box, but until observed, it is both alive and dead. Can JavaScript express this paradox?
// Task: Write a function schrodingerCat(state1, state2) that:
// Returns true if state1 and state2 are both truthy or both falsy.
// Returns false otherwise.
// Example:
// console.log(schrodingerCat("alive", "dead")); // true
// console.log(schrodingerCat(10, undefined)); // false
// console.log(schrodingerCat(1, "yes")); // true
// console.log(schrodingerCat("cat", 0)); // false



// const schrodingerCat = (state1, state2) => !!state1 === !!state2;


// console.log(schrodingerCat("alive", "dead")); // true
// console.log(schrodingerCat(10, undefined)); // false
// console.log(schrodingerCat(1, "yes")); // true
// console.log(schrodingerCat("cat", 0)); // false

