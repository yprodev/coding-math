// =================== THEORY on BEZIER CURVES ===================

// Controll point is the poit between start and end points in
// quadratic bezier curves.
// Controlling controll point with those formulas:
// cp.x = p1.x * 2 - (p0.x + p2.x) / 2;
// cp.y = p1.x * 2 - (p0.y + p2.y) / 2;
//
// cp - controll point or p1.


window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p0 = {
			x: Math.random() * width,
			y: Math.random() * height
		},
		p1 = {
			x: Math.random() * width,
			y: Math.random() * height
		},
		p2 = {
			x: Math.random() * width,
			y: Math.random() * height
		};

	drawPoint(p0);
	drawPoint(p1);
	drawPoint(p2);

	context.strokeStyle = 'lightgray';
	context.beginPath();
	context.moveTo(p0.x, p0.y);
	context.lineTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.stroke();

	context.strokeStyle = 'black';
	context.beginPath();
	context.moveTo(p0.x, p0.y);
	context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
	context.stroke();

	function drawPoint(p) {
		context.beginPath();
		context.arc(p.x, p.y, 3, 0, Math.PI * 2, false);
		context.fill();
	}
};