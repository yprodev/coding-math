// Example with acceleration with particle on the screen


// =============== THEORY of EDGE HANDLING ===============

// The third technic is called - regeneration.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [];


	for (let i = 0; i < 100; i++) {
		let p = particle.create(
			width / 2,
			height,
			Math.random() * 8 + 5,
			-Math.PI / 2 + (Math.random() * .2 - .1), // Angle straight away
			0.1 // gravity added
		);
		p.radius = Math.random() * 10 + 2;
		particles.push(p);
	}

	render();

	function render() {
		context.clearRect(0, 0, width, height);


		for (let i = 0; i < particles.length; i++) {
			let p = particles[i];

			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
			context.fill();

			// When the particle does go down the bottom edge, we will set it back
			// at the initial emitter position, which is width devided by 2 and height.
			// Also we regenarate the velocity back.
			// We don't set new gravity value here, because we don't remove particle. We
			// are regenerating it.
			if (p.position.getY() - p.radius > height) {
				p.position.setX(width / 2);
				p.position.setY(height);
				p.velocity.setLength(Math.random() * 8 + 5);
				p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .2 - .1));
			}
		}

		requestAnimationFrame(render);
	};

};


