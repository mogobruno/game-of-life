export default function Render() {
	let newGeneration = (city) => {
		let context = canvasHide.getContext('2d');
		context.fillStyle = '#ffffff';
		context.clearRect(0, 0, 35 * 13, 35 * 13);
		context.clearRect(0, 0, 35 * 13, 35 * 13);
		let population = city.getPopulation();
		population.forEach(citizen => {
			if (citizen.isAlive()) {
				var coords = citizen.getCurrentPosition();
				context.fillStyle = '#ff0000';
				context.fillRect((coords.x - 1) * 13, (coords.y - 1) * 13, 13, 13);
			}
		});
	}

	let drawGrid = () => {
		var context = canvasCurrent.getContext('2d');
		context.strokeStyle = 'gray';
		context.beginPath();
		for (var i = 0; i <= 35; i++) {
			context.moveTo(i * 13 + 0.5, 0.5);
			context.lineTo(i * 13 + 0.5, 35 * 13);
			context.moveTo(0.5, i * 13 + 0.5);
			context.lineTo(35 * 13, i * 13 + 0.5);
		}
		context.stroke();		
	}

	return {
		newGeneration,
		drawGrid
	}
}