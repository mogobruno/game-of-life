import Citizen from '../../src/model/Citizen';

describe('Citizen', () => {

	let citizen;

	beforeEach(() => {
		citizen = new Citizen(10, 20, 0);
	});

	describe('when born', () => {

		beforeEach(() => {
			citizen.born();
		});

		it('the citizen must be alive', () => {
			expect(citizen.isAlive()).toBeTruthy();
		});

	});

	describe('when dies', () => {

		beforeEach(() => {
			citizen.kill();
		});

		it('the citizen must be dead', () => {
			expect(citizen.isAlive()).toBeFalsy();
		});

	});


	describe('when asked about his position', () => {

		it('the citizen must answer x and y values of his position', () => {
			const coords = citizen.getCurrentPosition();
			expect(coords).toEqual({
				x: 10,
				y: 20
			});
		});

		it('the citizen must answer true or false to passed x and y values', () => {
			const answer = citizen.isInPosition(10, 20);
			expect(answer).toBeTruthy();
		});

	});

	describe('when asked about his neighbours', () => {

		it('the citizen must answer top neighbour x and y position', () => {
			const coords = citizen.getTopNeighbour();
			expect(coords).toEqual({
				x: 9,
				y: 20
			});
		});

		it('the citizen must answer down neighbour x and y position', () => {
			const coords = citizen.getDownNeighbour();
			expect(coords).toEqual({
				x: 11,
				y: 20
			});
		});

		it('the citizen must answer left neighbour x and y position', () => {
			const coords = citizen.getLeftNeighbour();
			expect(coords).toEqual({
				x: 10,
				y: 19
			});
		});

		it('the citizen must answer right neighbour x and y position', () => {
			const coords = citizen.getRightNeighbour();
			expect(coords).toEqual({
				x: 10,
				y: 21
			});
		});

		it('the citizen must answer top left neighbour x and y position', () => {
			const coords = citizen.getTopLeftNeighbour();
			expect(coords).toEqual({
				x: 9,
				y: 19
			});
		});
	
		it('the citizen must answer top right neighbour x and y position', () => {
			const coords = citizen.getTopRightNeighbour();
			expect(coords).toEqual({
				x: 9,
				y: 21
			});
		});
		
		it('the citizen must answer down left neighbour x and y position', () => {
			const coords = citizen.getDownLeftNeighbour();
			expect(coords).toEqual({
				x: 11,
				y: 19
			});
		});

		it('the citizen must answer down right neighbour x and y position', () => {
			const coords = citizen.getDownRightNeighbour();
			expect(coords).toEqual({
				x: 11,
				y: 21
			});
		});

	});

});