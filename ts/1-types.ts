// Primitive
const name: string = 'Harvey Norman';
console.log(name);

const age: number = 20;
console.log(age);

const isStudent: boolean = true;
console.log(isStudent);

// Advanced
const colors: string[] = ['Red', 'Blue', 'Green'];
console.log(colors);

type Person = {
	name: string;
	age: number;
	isStudent: boolean;
};

const person: Person = {
	name: 'Harvey Norman',
	age: 20,
	isStudent: true,
};
console.log(person);

const printMessage = (message: string): void => {
	console.log(message);
};
printMessage('howdy!');

// Special
let occupation;
console.log(occupation);

const currentCart = null;
console.log(currentCart);

// convert file to ES Module
// to solve name clashes with global scope
export {};
