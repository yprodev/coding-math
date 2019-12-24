// Example with acceleration with particle on the screen


// =============== THEORY of EDGE HANDLING ===============

// The second technic is called - removal.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [];


	for (let i = 0; i < 100; i++) {
		let p = particle.create(
			width / 2,
			height / 2,
			Math.random() * 5 + 2,
			Math.random() * Math.PI * 2
		);
		p.radius = 10;
		particles.push(p);
	}

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		console.log('Check particles length: ', particles.length);

		for (let i = 0; i < particles.length; i++) {
			let p = particles[i];

			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
			context.fill();
		}

		removeDeadParticles();

		requestAnimationFrame(render);
	};

	function removeDeadParticles() {
		for (let i = particles.length - 1; i >= 0; i--) {
			let p = particles[i];

			if (
				p.position.getX() - p.radius > width ||
				p.position.getX() + p.radius < 0 ||
				p.position.getY() - p.radius > height ||
				p.position.getY() + p.radius < 0
			) {
				particles.splice(i, 1);
			}
		}
	};

};


