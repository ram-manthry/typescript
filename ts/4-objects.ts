export {};

// type Person = {
// 	name: string;
// 	age: number;
// 	occupation: string;
// 	isStudent: boolean;
// };

interface Person {
	name: string;
	age: number;
	occupation: string;
	isStudent: boolean;
}

const person: Person = {
	name: 'ram',
	age: 20,
	occupation: 'developer',
	isStudent: true,
};
console.log(person);
