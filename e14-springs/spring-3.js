// Spring attached to mouse pointer
window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		springPoint = vector.create(width / 2, height / 2),
		weight = particle.create(
			Math.random() * width,
			Math.random() * height,
			50,
			Math.random() * Math.PI * 2,
			0.5
		),
		k = 0.056,
		springLength = 100;

	weight.radius = 20;
	weight.friction = 0.9;

	document.body.addEventListener('mousemove', function(event) {
		springPoint.setX(event.clientX);
		springPoint.setY(event.clientY);
	}, false);

	render();


	function render() {
		context.clearRect(0, 0, width, height);

		let distance = springPoint.subtract(weight.position);
		distance.setLength(distance.getLength() - springLength);
		let springForce = distance.multiply(k);
		
		weight.velocity.addTo(springForce);

		weight.update();

		context.beginPath();
		context.arc(weight.position.getX(), weight.position.getY(), weight.radius, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.arc(springPoint.getX(), springPoint.getY(), 4, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath()
		context.moveTo(weight.position.getX(), weight.position.getY())
		context.lineTo(springPoint.getX(), springPoint.getY());
		context.stroke();

		requestAnimationFrame(render);
	};

};