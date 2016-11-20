import City from '../../src/model/City';
import GenerationLoop from '../../src/service/GenerationLoop';

describe('Citizen', () => {

	let city;
	let generationLoop;

	beforeEach(() => {
		city = new City(10);
		generationLoop = GenerationLoop(city);
	});

	describe('when we call next generation', () => {

		it('city generation need to be incremented', () => {
			generationLoop.next();
			expect(city.getGeneration()).toBe(1);
		});

	});
	
});