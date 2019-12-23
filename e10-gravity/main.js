// Example with acceleration with particle on the screen


// =============== THEORY of GRAVITY ===============

// Gravity is a type of acceleration. It has magnitude (speed)
// and direction (angle). E.g. On the surface on the Earth
// gravity exerts a certain force. But as you move away
// from the surface, that force decreases. It's inversely
// proportional to the square of the distance.
// In other words, if your distance from the center of the Earth
// doubled, the gravity you experienced would be reduced by 4.

// Now, it gets even more complex when you realize that earth
// is not the only planet. Actually, any bodies with mass exert
// gravity on each other. And the force of that gravity is
// dependent on that mass. So a larger body (meaning one that has
// more mass) will exert a stronger gravitational pull than a
// smaller one. If you were on the moon, you would feel about
// 1/6 of the pull of gravity that you feel on earth. In other
// words, if you weighted 180 pounds on Earth, you would have the
// experience of weighting about 30 pounds on the moon. However,
// if you were on Jupiter, you would experience about 2 and a half
// times as much gravity, so you would experience weighting about
// 450 pounds.

// The formula for the acceleration that a body has on another
// body due to gravity is:
// gravity = (G * M) / (r * r)
// G - gravitational constant
// M - mass of the object doing the pulling, such as Earth
// r - distance between the centers of these objects
//
// This gravitational constant is technically
// G = 6.672 * (10 ** -8)cm**3 * (g ** -1) * (s ** -2)
// This formula is irrelevant for us unless we want to fly with a
// rocket to the Moon.

// We will be using gravity = M / (r * r)




window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		sun = particle.create(width / 2, height / 2, 0, 0),
		planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);


	// Setting sun mass without accessor
	sun.mass = 20000;

	render();


	function render() {
		context.clearRect(0, 0, width, height);


		planet.gravitateTo(sun);
		planet.update();

		context.beginPath();
		context.fillStyle = '#ffff00';
		context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = '#0000ff';
		context.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI * 2, false);
		context.fill();

		requestAnimationFrame(render);
	};

};


