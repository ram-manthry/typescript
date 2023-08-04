const names: string[] = ['ram', 'manthry', 'alan', 'harvey'];
console.log(names);

const ranks: number[] = [1, 2, 3, 4, 5];
console.log(ranks);

type Employee = {
	employeeId: number;
	name: string;
};

const ram: Employee = {
	employeeId: 1,
	name: 'ram',
};

const alan: Employee = {
	employeeId: 2,
	name: 'alan',
};

const employees: Employee[] = [
	ram,
	alan,
	{
		employeeId: 3,
		name: 'harvey',
	},
];
console.log(employees);
