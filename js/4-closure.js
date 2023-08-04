const createCounter = () => {
	let count = 0;

	const increment = () => {
		count++;
		console.log('Count:', count);
	};

	const decrement = () => {
		count--;
		console.log('Count:', count);
	};

	return {
		increment: increment,
		decrement: decrement,
	};
};

const counterA = createCounter();
const counterB = createCounter();

counterA.increment();
counterA.increment();
counterB.increment();
counterA.decrement();
