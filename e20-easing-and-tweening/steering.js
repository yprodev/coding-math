// =================== THEORY on EASING and TWEENING ===================

// Simple Easing (a.k.a. Standard Exponential Slide - Penner)

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		angle = 0,
		targetAngle = 0,
		ease = 0.05,
		wheel;

	wheel = document.createElement('img');
	wheel.addEventListener('load', function() {
		renderWheel();
	}, false);
	wheel.src = 'wheel.png';

	function renderWheel() {
		context.clearRect(0, 0, width, height);

		angle += (targetAngle - angle) * ease;

		context.save();
		context.translate(width / 2, height / 2);
		context.rotate(angle);

		context.drawImage(wheel, -wheel.width / 2, -wheel.height / 2);

		context.restore();
		requestAnimationFrame(renderWheel);
	};

	document.body.addEventListener('mousemove', function(event) {
		targetAngle = utils.map(event.clientX, 0, width, -Math.PI, Math.PI);
	}, false);
};