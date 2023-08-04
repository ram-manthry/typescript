let limit; // Declaration
console.log(limit);

limit = 50; // Initialization
console.log(limit);

let limit = 60; // SyntaxError: Identifier 'limit' has already been declared
console.log(limit);

var age = 20; // Declaration
console.log(age);

var age = 21; // Re-Declaration
console.log(age);

const score = 90;
console.log(score);

score = 100; // TypeError: Assignment to constant variable.
console.log(score);
