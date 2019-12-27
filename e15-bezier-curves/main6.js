// =================== THEORY on BEZIER CURVES ===================

// Controll point is the poit between start and end points in
// quadratic bezier curves.
// Controlling controll point with those formulas:
// cp.x = p1.x * 2 - (p0.x + p2.x) / 2;
// cp.y = p1.x * 2 - (p0.y + p2.y) / 2;
//
// cp - controll point or p1.

// Quadratic = 1 control point
// Cubic = 2 control points
// ? = > 2 control points



window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		points = [],
		numPoints = 10;

	for (let i = 0; i < numPoints; i++) {
		let p = {
			x: Math.random() * width,
			y: Math.random() * height,
		};

		context.beginPath();
		context.arc(p.x, p.y, 3, 0, Math.PI * 2, false);
		context.fill();

		points.push(p);
	}

	context.strokeStyle = 'lightgray';
	context.beginPath();
	context.moveTo(points[0].x, points[0].y);

	for (let i = 1; i < numPoints; i++) {
		context.lineTo(points[i].x, points[i].y);
	}
	context.stroke();

	context.strokeStyle = 'black';

	context.beginPath();
	utils.multicurve(points, context);
	context.stroke();

};