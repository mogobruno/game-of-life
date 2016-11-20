import config from '../config/config';

export default function Render() {
	let newGeneration = (city) => {
		let context = canvasHide.getContext('2d');
		context.fillStyle = '#ffffff';
		context.clearRect(0, 0, config.gameSize * config.cellSize, config.gameSize * config.cellSize);
		context.clearRect(0, 0, config.gameSize * config.cellSize, config.gameSize * config.cellSize);
		let population = city.getPopulation();
		population.forEach(citizen => {
			if (citizen.isAlive()) {
				var coords = citizen.getCurrentPosition();
				context.fillStyle = '#ff0000';
				context.fillRect((coords.x - 1) * config.cellSize, (coords.y - 1) * config.cellSize, config.cellSize, config.cellSize);
			}
		});
	}

	let drawGrid = () => {
		let context = canvasCurrent.getContext('2d');
		context.strokeStyle = 'gray';
		context.beginPath();
		for (var i = 0; i <= config.gameSize; i++) {
			context.moveTo(i * config.cellSize + 0.5, 0.5);
			context.lineTo(i * config.cellSize + 0.5, config.gameSize * config.cellSize);
			context.moveTo(0.5, i * config.cellSize + 0.5);
			context.lineTo(config.gameSize * config.cellSize, i * config.cellSize + 0.5);
		}
		context.stroke();		
	}

	return {
		newGeneration,
		drawGrid
	}
}