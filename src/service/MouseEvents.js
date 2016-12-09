export default function MouseEvents(render, city) {
	let isMouseDown = false;

	canvasHide.onmousedown = function canvasMouseDown(ev) {
		isMouseDown = true;
		let x = ev.pageX - this.offsetLeft;
		let y = ev.pageY - this.offsetTop;
		let coords = this.relMouseCoords(ev);
		city.createCitizen(coords.x, coords.y);
		city.recalculatePopulation();
		render.newGeneration(city);
	}

	canvasHide.onmouseup = function canvasMouseUp(ev) {
		isMouseDown = false;
	}

	canvasHide.onmousemove = function canvasMouseMove(ev) {
		if (isMouseDown) {
			let coords = this.relMouseCoords(ev);
			city.createCitizen(coords.x, coords.y);
			city.recalculatePopulation();
			render.newGeneration(city);
		}
	}

	function relMouseCoords(event) {
		let totalOffsetX = 0;
		let totalOffsetY = 0;
		let canvasX = 0;
		let canvasY = 0;
		let currentElement = this;

		do {
			totalOffsetX += currentElement.offsetLeft;
			totalOffsetY += currentElement.offsetTop;
		}
		while (currentElement = currentElement.offsetParent)

		canvasX = event.pageX - totalOffsetX;
		canvasY = event.pageY - totalOffsetY;

		canvasX = Math.ceil(canvasX / 13);
		canvasY = Math.ceil(canvasY / 13);

		return { x: canvasX, y: canvasY }
	}

	HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
}