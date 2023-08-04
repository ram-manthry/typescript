const sum = (a, b) => {
	return a + b;
};

const sum1 = sum(1, 2); // works
console.log(sum1);

// All of the below return unintended results
const sum2 = sum(1, 'ram');
console.log(sum2);

const sum3 = sum('ram', 'manthry');
console.log(sum3);

const sum4 = sum('ram', true);
console.log(sum4);

const sum5 = sum(1, () => 'hi!');
console.log(sum5);
