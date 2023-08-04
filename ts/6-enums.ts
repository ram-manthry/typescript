enum Direction {
	North,
	East,
	South,
	West,
}

const fromDirection: Direction = Direction.North;
const toDirection: Direction = Direction.South;

console.log(`Going from ${fromDirection} to ${toDirection}`);

console.log(
	`Going from ${Direction[fromDirection]} to ${Direction[toDirection]}`
);
