export {};

const getRandomNumberElement = (items: number[]): number => {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
};
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

const getRandomStringElement = (items: string[]): string => {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
};
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));

// const getRandomElement = (items: any[]): any => {
// 	let randomIndex = Math.floor(Math.random() * items.length);
// 	return items[randomIndex];
// };
// console.log(getRandomElement([1, 5, 7, 4, 2, 9]));
// console.log(getRandomElement(['red', 'green', 'blue']));

const getRandomElement = <T>(items: T[]): T => {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
};
console.log(getRandomElement([1, 5, 7, 4, 2, 9]));
console.log(getRandomElement(['red', 'green', 'blue']));
