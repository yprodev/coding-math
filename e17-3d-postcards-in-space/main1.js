// =================== THEORY on 3D (2.5D) ===================

// There is a focal lenght. Formula to calculate it perspectinve
// is the next: perspective = focalLength / (focalLength + z)


window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300, // Focal Length
		shapePos = {
			x: 500,
			y: 300,
			z: 300
		};

	// (0, 0) will be at the center of the screen
	context.translate(width / 2, height / 2);
	let perspective = fl / (fl + shapePos.z);
	// Doing final positioning...
	context.translate(shapePos.x * perspective, shapePos.y * perspective);
	context.scale(perspective, perspective);
	context.fillRect(-100, -100, 200, 200);


};