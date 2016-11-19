export default function GenerationLoop(city) {

	let that = this;

	let next = () => {
		let population = city.getPopulation();
		population.forEach(citizen => {
			let neighboursCoords = [
				citizen.getTopNeighbour(),
				citizen.getDownNeighbour(),
				citizen.getRightNeighbour(),
				citizen.getLeftNeighbour()
			]

			let neighboursLifes = lifeCounter(neighboursCoords)

			if (citizen.isAlive()) {
				forAliveCitizen(citizen.getCurrentPosition(), neighboursLifes)	
			} else {
				forZombiesCitizen(citizen.getCurrentPosition(), neighboursLifes)
			}
		})

		city.nextGeneration();
	}

	let forAliveCitizen = (citizenCoords, neighboursLifes) => {
		if (neighboursLifes < 2) {
			city.killCitizen(citizenCoords.x, citizenCoords.y)
		} else if (neighboursLifes >=2 && neighboursLifes <=3) {
			city.createCitizen(citizenCoords.x, citizenCoords.y)
		} else if (neighboursLifes > 3) {
			city.killCitizen(citizenCoords.x, citizenCoords.y)
		}		
	}

	let forZombiesCitizen = (citizenCoords, neighboursLifes) => {
		if (neighboursLifes === 3) {
			city.createCitizen(citizenCoords.x, citizenCoords.y)
		}		
	}

	let lifeCounter = (neighboursCoords) => {
		let lifes = 0;
		neighboursCoords.forEach(neighbourCoords => {
			let neighbour = city.getCitizen(neighbourCoords.x, neighbourCoords.y)
			if (neighbour && neighbour.isAlive()) {
				lifes++;
			}
		})
		return lifes;
	}

	return {
		next		
	}

}