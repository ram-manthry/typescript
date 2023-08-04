export {};
type Sum = (a: number, b: number) => number;

const addTwoNumbers: Sum = (a, b) => a + b;
console.log(addTwoNumbers(1, 2));

type CallbackFn = (result: number) => void;

type Multiply = (a: number, b: number, callback: CallbackFn) => number;

const printMessage: CallbackFn = (result: number) =>
	console.log(`Result is ${result}`);

const multiplyTwoNumbers: Multiply = (a, b, callback) => {
	const result = a * b;
	callback(result);
	return result;
};
console.log(multiplyTwoNumbers(1, 2, printMessage));
