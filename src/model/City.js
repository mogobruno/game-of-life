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
		if (x < 35 && y < 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			return this.population[position];
		}
	}

	killCitizen(x, y) {
		if (x < 35 && y < 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			this.futurePopulation[position].kill();
		}
	}

	createCitizen(x, y) {
		if (x < 35 && y < 35) {
			let position = (((x-1) * this.gameSize) + (y - 1));
			this.futurePopulation[position].born();
		}
	}

	nextGeneration() {
		this.generation++;
		this.population = this.futurePopulation;
	}

	recalculatePopulation() {
		this.futurePopulation.forEach(futureCitizen => {
			var coords = futureCitizen.getCurrentPosition();
			let position = (((coords.x-1) * this.gameSize) + (coords.y - 1));
			if (futureCitizen.isAlive()) {
				this.population[position].born();
			} else {
				this.population[position].kill();
			}
		});
	}	

	getPopulation() {
		return this.population;
	}

	getGeneration() {
		return this.generation;
	}

}