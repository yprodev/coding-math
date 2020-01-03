// ========= THEORY on POLAR and CARTESIAN COORD SYSTEMS =========

// x, y --> rotate by angle --> x1, y1
// x1 = x * cos Angle - y * sin Angle
// y1 = y * cos Angle + x * sin Angle

// First, it will be implemented in 2D space.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		point = {
			x: 300,
			y: 200
		},
		delta = 0.05; // this is the angle

	context.translate(width / 2, height / 2); // Centering the canvas

	render();

	function render() {
		context.clearRect(-width / 2, -height / 2, width, height);

		context.beginPath();
		context.arc(point.x, point.y, 20, 0, Math.PI * 2, false);
		context.fill();

		let cos = Math.cos(delta),
			sin = Math.sin(delta),
			x = point.x * cos - point.y * sin,
			y = point.y * cos + point.x * sin;

		point.x = x;
		point.y = y;

		requestAnimationFrame(render);
	}
}



