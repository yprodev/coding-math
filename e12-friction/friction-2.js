// Example with acceleration with particle on the screen


// =============== THEORY of FRICTION ===============

// There are two ways to implement friction:
// 1. Correct way to implement it - from the physics perspective,
// 2. Wrong, but simplified.


// Alternative way of implementation - the wrong one. In this
// alternative strategy rather than adding a reverse vector
// to the velocity for friction we reduce the velocity by a
// percentage.

// PROs of this method are:
// 1. Using simple multiplication
// 2. Friction doesn't have a direction in this case
// (no set / get angles and lengths)
// 3. No need to check if velocity is less than friction or if
// velocity is zero.

// CONs of this method are:
// 1. NOT REAL FRICTION - so it look different.




window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(
			width / 2,
			height / 2,
			10,
			Math.random() * Math.PI * 2
		);
		// Add this param into particle class.
		// friction = 0.97;

	p.radius = 10;
	p.friction = 0.97;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		// // ...and that is all we need to do with the second strategy
		// add the same code to the particle update. Also added friction
		// parameter.
		// p.velocity.multiplyBy(friction);

		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.fill();

		requestAnimationFrame(render);
	};

};


