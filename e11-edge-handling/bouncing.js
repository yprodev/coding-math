// Example with acceleration with particle on the screen


// =============== THEORY of EDGE HANDLING ===============

// The fourth technic is called - bounce.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(
			width / 2,
			height / 2,
			5,
			Math.random() * Math.PI * 2
		);

		p.radius = 40;

		// Particle will lose 10% of its velocity on a given
		// access on the each collision.
		p.bounce = -0.9;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.fill();

		// Reversing velocity angle
		if (p.position.getX() + p.radius > width) {
			p.position.setX(width - p.radius);
			p.velocity.setX(p.velocity.getX() * p.bounce); // Earlier instead of p.bounce here was -1
		}
		if (p.position.getX() - p.radius < 0) {
			p.position.setX(p.radius);
			p.velocity.setX(p.velocity.getX() * p.bounce);
		}
		if (p.position.getY() + p.radius > height) {
			p.position.setY(height - p.radius);
			p.velocity.setY(p.velocity.getY() * p.bounce);
		}
		if (p.position.getY() - p.radius < 0) {
			p.position.setY(p.radius);
			p.velocity.setY(p.velocity.getY() * p.bounce);
		}

		requestAnimationFrame(render);
	};

};


