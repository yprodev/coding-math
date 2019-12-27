// =================== THEORY on BEZIER CURVES ===================

// Bezier curves is all about linear interpolation. Basically you
// take a number from 0 to 1 and a range of numbers. You find a
// value in that range that correspondes to the initial number.

// So, say we have two points - one at the position on the x axis
// of 100 and another - at 200. We have a value between 0 and 1,
// we will call it - t. If t = 0, the output value will be 100.
// If it's t = 0.5 we will get 150. And if t = 1 we will get 200.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p0 = {
			x: utils.randomRange(0, width),
			y: utils.randomRange(0, height),
		},
		p1 = {
			x: utils.randomRange(0, width),
			y: utils.randomRange(0, height),
		},
		p2 = {
			x: utils.randomRange(0, width),
			y: utils.randomRange(0, height),
		},
		p3 = {
			x: utils.randomRange(0, width),
			y: utils.randomRange(0, height),
		},
		t = 0,
		direction = 0.01,
		pFinal = {};

	render();

	function render(p, color = 'black') {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.moveTo(p0.x, p0.y);
		context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
		context.stroke();

		utils.cubicBezier(p0, p1, p2, p3, t, pFinal);
		context.beginPath();
		context.arc(pFinal.x, pFinal.y, 10, 0, Math.PI * 2, false);
		context.fill()

		t += direction;
		if (t > 1 || t < 0) {
			direction = -direction;
		}

		requestAnimationFrame(render);
	}
};