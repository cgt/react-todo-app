type Animal = Dog | Cat;

interface Dog {
	kind: 'dog';
	bark(): void;
}

interface Cat {
	kind: 'cat';
	beUseless(): void;
}

function f(animal: Animal) {
	switch (animal.kind) {
		case "dog":
			animal.bark();
			break;
		case "cat":
			animal.beUseless();
	}
}

export { };