export default class Citizen {
	constructor(x, y, life) {
	    this.x = x;
	    this.y = y;
	    this.life = life;
	}

	getTopNeighbour() {
		return {
			x: this.x - 1,
			y: this.y
		};
	}

	getDownNeighbour() {
		return {
			x: this.x + 1,
			y: this.y
		};
	}

	getRightNeighbour() {
		return {
			x: this.x,
			y: this.y + 1
		};
	}

	getLeftNeighbour() {
		return {
			x: this.x,
			y: this.y - 1
		};
	}

	getCurrentPosition() {
		return {
			x: this.x,
			y: this.y
		};
	}

	isAlive() {
		return this.life === 1;
	}

	born() {
		this.life = 1;
	}

	kill() {
		this.life = 0;
	}

	isInPosition(x, y) {
		return this.x === x && this.y === y
	}
}