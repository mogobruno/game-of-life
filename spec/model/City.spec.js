import City from '../../src/model/City';

describe('City', () => {

	let city;

	beforeEach(() => {
		city = new City(10);
		city.populate();
	});

	it('need to be created with 100 citizens', () => {
		expect(city.getPopulation().length).toBe(100);
	});

	describe('when asked about create some citizen', () => {

		it('the city creates him in passed x and y values', () => {
			city.createCitizen(5, 5);
			city.recalculatePopulation();
			const citizen = city.getCitizen(5, 5);
			expect(citizen.isAlive()).toBeTruthy();
		});

	});

	describe('when asked about kill some citizen', () => {

		it('the city kill him in passed x and y values', () => {
			city.killCitizen(5, 5);
			city.recalculatePopulation();
			const citizen = city.getCitizen(5, 5);
			expect(citizen.isAlive()).toBeFalsy();
		});

	});

	describe('when asked about generation', () => {

		it('the city answer generation number', () => {
			city.nextGeneration();
			city.nextGeneration();
			city.nextGeneration();
			city.nextGeneration();
			expect(city.getGeneration()).toBe(4);
		});

	});

});