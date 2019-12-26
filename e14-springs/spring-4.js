// Spring attached to mouse pointer
window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particleA = particle.create(
			utils.randomRange(0, width),
			utils.randomRange(0, height),
			utils.randomRange(0, 50),
			utils.randomRange(0, Math.PI * 2)
		),
		particleB = particle.create(
			utils.randomRange(0, width),
			utils.randomRange(0, height),
			utils.randomRange(0, 50),
			utils.randomRange(0, Math.PI * 2)
		),
		particleC = particle.create(
			utils.randomRange(0, width),
			utils.randomRange(0, height),
			utils.randomRange(0, 50),
			utils.randomRange(0, Math.PI * 2)
		),
		k = 0.01,
		separation = 100;

	particleA.friction = 0.9;
	particleA.radius = 20;

	particleB.friction = 0.9;
	particleB.radius = 20;

	particleC.friction = 0.9;
	particleC.radius = 20;

	render();


	function render() {
		context.clearRect(0, 0, width, height);

		spring(particleA, particleB, separation);
		spring(particleB, particleC, separation);
		spring(particleC, particleA, separation);

		particleA.update();
		particleB.update();
		particleC.update();

		context.beginPath();
		context.arc(particleA.position.getX(), particleA.position.getY(), particleA.radius, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.arc(particleB.position.getX(), particleB.position.getY(), particleB.radius, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.arc(particleC.position.getX(), particleC.position.getY(), particleC.radius, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath()
		context.moveTo(particleA.position.getX(), particleA.position.getY())
		context.lineTo(particleB.position.getX(), particleB.position.getY());
		context.lineTo(particleC.position.getX(), particleC.position.getY());
		context.lineTo(particleA.position.getX(), particleA.position.getY());
		context.stroke();

		requestAnimationFrame(render);
	};

	function spring(p0, p1, separation) {
		// p0 - will be a springPoint
		// p1 - will be a weight
		let distance = p0.position.subtract(p1.position);
		distance.setLength(distance.getLength() - separation);

		let springForce = distance.multiply(k);

		p1.velocity.addTo(springForce);
		p0.velocity.subtractFrom(springForce);
	}

};