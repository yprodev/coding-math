// =================== THEORY on 3D (3D) - SPIRAL ===================

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		points = [],
		numPoints = 200,
		centerZ = 2000,
		radius = 1000,
		baseAngle = 0,
		rotationSpeed = 0.01;

	for (let i = 0; i < numPoints; i++) {
		let point = {
			angle: 0.2 * i,
			y: 2000 - 4000 / numPoints * i
		};
		point.x = Math.cos(point.angle + baseAngle) * radius;
		point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
		points.push(point);
	}

	context.translate(width / 2, height / 2);

	document.body.addEventListener('mousemove', function() {
		rotationSpeed = (event.clientX - width / 2) * 0.00005;
		ypos = (event.clientY - height / 2) * 2;
	}, false);

	render();

	function render() {
		baseAngle += rotationSpeed;
		context.clearRect(-width / 2, -height / 2, width, height);
		for (let i = 0; i < numPoints; i++) {
			let point = points[i],
				perspective = fl / (fl + point.z);

			context.save();
			context.scale(perspective, perspective);
			context.translate(point.x, point.y);

			// Flip the discs - to see that points are 2D
			context.scale(Math.sin(point.angle + baseAngle), 1);

			context.beginPath();
			context.arc(0, 0, 80, 0, Math.PI * 2, false);
			context.fill();

			context.restore();

			point.x = Math.cos(point.angle + baseAngle) * radius;
			point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
		}

		requestAnimationFrame(render);
	}
};