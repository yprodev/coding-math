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
		maxT = 0,
		pFinal = {};

	render();

	function render(p, color = 'black') {
		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.moveTo(p0.x, p0.y);

		for (let t = 0; t <= maxT; t += 0.01) {
			utils.cubicBezier(p0, p1, p2, p3, t, pFinal);
			context.lineTo(pFinal.x, pFinal.y);
		}
		context.stroke();
		maxT += 0.01;
		if (maxT > 1) {
			maxT = 0;
		}

		requestAnimationFrame(render);
	}
};