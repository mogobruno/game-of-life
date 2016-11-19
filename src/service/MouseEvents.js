export default function MouseEvents(render, city) {
	var isMouseDown = false;

	canvasHide.onmousedown = function canvasMouseDown(ev) {
		isMouseDown = true;
		var x = ev.pageX - this.offsetLeft;
		var y = ev.pageY - this.offsetTop;
		var coords = this.relMouseCoords(ev);
		city.createCitizen(coords.x, coords.y);
		city.recalculatePopulation();
		render.newGeneration(city);
	}

	canvasHide.onmouseup = function canvasMouseDown(ev) {
		isMouseDown = false;
	}

	canvasHide.onmousemove = function canvasMouseDown(ev) {
		if (isMouseDown) {
			var coords = this.relMouseCoords(ev);
			city.createCitizen(coords.x, coords.y);
			city.recalculatePopulation();
			render.newGeneration(city);
		}
	}

	function relMouseCoords(event) {
		var totalOffsetX = 0;
		var totalOffsetY = 0;
		var canvasX = 0;
		var canvasY = 0;
		var currentElement = this;

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