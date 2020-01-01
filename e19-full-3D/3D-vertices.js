// =================== THEORY on 3D - VERTICES ===================

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		points = [],
		needsUpdate = true;

	context.translate(width / 2, height / 2);

	points[0] = { x: -500, y: -500, z: 1000 };
	points[1] = { x:  500, y: -500, z: 1000 };
	points[2] = { x:  500, y: -500, z:  500 };
	points[3] = { x: -500, y: -500, z:  500 };


	points[4] = { x: -500, y: 500, z: 1000 };
	points[5] = { x:  500, y: 500, z: 1000 };
	points[6] = { x:  500, y: 500, z:  500 };
	points[7] = { x: -500, y: 500, z:  500 };

	function project() {
		for (let i = 0; i < points.length; i++) {
			let p = points[i],
				scale = fl / (fl + p.z);

			// sx = screen x
			p.sx = p.x * scale;
			p.sy = p.y * scale;
		}
	};

	function drawLine() {
		let p = points[arguments[0]];
		context.moveTo(p.sx, p.sy);

		for (let i = 1; i < arguments.length; i++) {
			p = points[arguments[i]];
			context.lineTo(p.sx, p.sy);
		}
	};

	function translateModel(x, y, z) {
		for (let i = 0; i < points.length; i++) {
			points[i].x += x;
			points[i].y += y;
			points[i].z += z;
		}
		needsUpdate = true;
	};

	document.body.addEventListener('keydown', function() {
		switch(event.keyCode) {
			case 37: // left
				translateModel(-20, 0, 0);
				break;
			case 39: // rigth
				translateModel(20, 0, 0);
				break;
			case 38: // up
				if (event.shiftKey) {
					translateModel(0, 0, 20);
				} else {
					translateModel(0, -20, 0);
				}
			case 40: // down
				if (event.shiftKey) {
					translateModel(0, 0, -20);
				} else {
					translateModel(0, 20, 0);
				}
		}
	}, false)

	render();

	function render() {

		if (needsUpdate) {
			context.clearRect(-width / 2, -height / 2, width, height);
			project();

			context.beginPath();
			// Draw top plate of the cube
			drawLine(0, 1, 2, 3, 0);
			// Draw bottom plate of the cube
			drawLine(4, 5, 6, 7, 4);
			// Draw four edges of the cube
			drawLine(0, 4);
			drawLine(1, 5);
			drawLine(2, 6);
			drawLine(3, 7);
			context.stroke();
			needsUpdate = false;
		}

		requestAnimationFrame(render);
	};
};