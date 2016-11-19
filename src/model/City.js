import Citizen from './Citizen';

export default class City {

	constructor(gameSize) {
		this.generation = 0
		this.gameSize = gameSize;
		this.population = [];
		this.futurePopulation = [];
	}

	populate() {
		for (var x = 1; x <= this.gameSize; x++) {
			for (var y = 1; y <= this.gameSize; y++) {
				this.population.push(new Citizen(x , y, 0));
				this.futurePopulation.push(new Citizen(x , y, 0));
			}
		}
	}

	killAll() {
		this.futurePopulation.forEach(citizen => {
			citizen.kill();
		});
		this.recalculatePopulation();
	}

	getCitizen(x, y) {
		if (x > 0 && y > 0 && x <= 35 && y <= 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			return this.population[position];
		}
	}

	killCitizen(x, y) {
		if (x <= 35 && y <= 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			this.futurePopulation[position].kill();
		}
	}

	createCitizen(x, y) {
		if (x <= 35 && y <= 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			this.futurePopulation[position].born();
		}
	}

	nextGeneration() {
		this.generation++;
		this.recalculatePopulation();
	}

	recalculatePopulation() {
		this.futurePopulation.forEach((futureCitizen, key) => {
			var coords = futureCitizen.getCurrentPosition();
			if (futureCitizen.isAlive()) {
				this.population[key].born();
			} else {
				this.population[key].kill();
			}
		});
	}	

	getPopulation() {
		return this.futurePopulation;
	}

	getGeneration() {
		return this.generation;
	}

}