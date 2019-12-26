// ============== THEORY on SPRINGS AND HOOKE's LAW ==============

// Hooke's Law says: as the extension, so the force. This means
// that the force required to extend or compress a spring
// a certain distance is proportional to that distance. This
// also winds up saying that the amount of force that spring will
// then exert to return to its rest state is also proportional to
// that distance.

// In other words, if you stretch a spring out a little way, it
// will pull back just a small amount. Stretch it out further, it
// pulls back harder. The further you stretch it, the more it
// pulls back.

// Of course, in the real world, there are limits to this. Strech
// the spring far enough and it will eventually either band or
// break. This is kind of the inverse of a force like gravity.
// With gravity, the further away you get from a massive body like
// a planet, the less gravity is exerted.

// In fact the force of gravity is reversely proportional to the
// square of the distance. So it decreases rapidly on a curve. But
// with springs, the force increases as you move away from the
// source. And it increases linearly. Pull a spring out twice as
// far and you'll experience twice the force.

// The formula for Hooke's Law is simply: F = kX
//
// F - is the resultant force.
// k - is a constant that represents the "stiffness" of the spring.
// X - represents the distance that the spring is stretched.

// The constant k is usually some smaller fraction, say 0.2.
// The force will be an acceleration vector.

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
			Math.random() * Math.PI * 2
		),
		k = 0.056;

	weight.radius = 20;
	weight.friction = 0.9;

	render();


	function render() {
		context.clearRect(0, 0, width, height);

		let distance = springPoint.subtract(weight.position),
			springForce = distance.multiply(k);
		
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