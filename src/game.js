import './style/game.scss';
import 'bootstrap/dist/css/bootstrap.css';

import City from './model/City';
import Render from './service/Render';
import GenerationLoop from './service/GenerationLoop';
import MouseEvents from './service/MouseEvents';

((global) => {
	
	let render = Render();
	let city = new City(35);
	let generation = GenerationLoop(city);
	let gameTimer;

	render.drawGrid();

	city.populate();

	render.newGeneration(city);

	MouseEvents(render, city);

	let nexGeneration = () => {
		generation.next();
		render.newGeneration(city);
	}

	let clearGame = () => {
		if (gameTimer) {
			clearInterval(gameTimer);
			gameTimer = null;
		}
		city.killAll();
		render.newGeneration(city);
	}

	let start = () => {
		if (!gameTimer) {
			gameTimer = setInterval(() => { nexGeneration() }, 500);
		}
	}

	let stop = () => {
		if (gameTimer) {
			clearInterval(gameTimer);
			gameTimer = null;
		}
	}

	global.nexGeneration = nexGeneration
	global.clearGame = clearGame
	global.start = start
	global.stop = stop

})(window)