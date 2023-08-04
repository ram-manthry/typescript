export {};

const multiplyNumbers = (a: number, b: number, c?: number): number => {
	if (c) {
		return a * b * c;
	}
	return a * b;
};
console.log(multiplyNumbers(1, 2));
console.log(multiplyNumbers(1, 2, 3));
