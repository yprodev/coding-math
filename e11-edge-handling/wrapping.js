// Example with acceleration with particle on the screen


// =============== THEORY of EDGE HANDLING ===============

// The size in this part will have a big role.

// The first technic is setting radius offset.




window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(
			width / 2,
			height / 2,
			3,
			Math.random() * Math.PI * 2
		);

	p.radius = 100;

	render();


	function render() {
		context.clearRect(0, 0, width, height);

		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.fill();

		if (p.position.getX() - p.radius > width) {
			p.position.setX(-p.radius); // sing of radius is minus
		}
		if (p.position.getX() + p.radius < 0) {
			p.position.setX(width + p.radius);
		}
		if (p.position.getY() + p.radius < 0) {
			p.position.setY(height + p.radius);
		}
		if (p.position.getY() - p.radius > height) {
			p.position.setY(-p.radius);
		}

		requestAnimationFrame(render);
	};

};


