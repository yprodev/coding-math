// =================== THEORY on EASING and TWEENING ===================

// Simple Easing (a.k.a. Standard Exponential Slide - Penner)

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		target = {
			x: width,
			y: Math.random() * height
		},

		points = [],
		numPoints = 10,
		ease = 0.1;

	for (let i = 0; i < numPoints; i++) {
		points.push({
			x: 0,
			y: 0
		});
	}

	document.body.addEventListener('mousemove', function(event) {
		target.x = event.clientX;
		target.y = event.clientY;
	}, false);

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		let leader = {
			x: target.x,
			y: target.y
		};

		for (let i = 0; i < numPoints; i++) {
			let point = points[i];

			point.x += (leader.x - point.x) * ease;
			point.y += (leader.y - point.y) * ease;


			context.beginPath();
			context.arc(point.x, point.y, 10, 0, Math.PI * 2, false);
			context.fill();

			leader.x = point.x;
			leader.y = point.y;
		}


		requestAnimationFrame(render);
	}
};