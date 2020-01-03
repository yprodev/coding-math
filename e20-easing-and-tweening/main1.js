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

		position = {
			x: 0,
			y: Math.random() * height
		},

		ease = 0.1;

	document.body.addEventListener('click', function(event) {
		target.x = event.clientX;
		target.y = event.clientY;
	}, false);

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.arc(position.x, position.y, 10, 0, Math.PI * 2, false);
		context.fill();

		// dx - distance x, dy - distance y
		// vx - velocity x, vy - velocity y
		let dx = target.x - position.x,
			dy = target.y - position.y,
			vx = dx * ease,
			vy = dy * ease;

		position.x += vx;
		position.y += vy;


		requestAnimationFrame(render);
	}
};