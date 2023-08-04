// named functions
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2));

// anonymous function
const multiply = function (a, b) {
	return a * b;
};
console.log(multiply(1, 2));

// arrow function
const subtract = (a, b) => {
	return a - b;
};
console.log(subtract(2, 1));

// callback function
const createGreeting = (name, callback) => {
	const greeting = `Hello ${name}!!`;
	callback(greeting);
};

const logGreeting = (greeting) => {
	console.log(greeting);
};

createGreeting('Ram', logGreeting);

// anonymous callback function
createGreeting('Manthry', (greeting) => {
	console.log(greeting);
});
