// Just simple example without particle.js

// window.onload = function() {
// 	let canvas = document.getElementById('canvas'),
// 		context = canvas.getContext('2d'),
// 		width = canvas.width = window.innerWidth,
// 		height = canvas.height = window.innerHeight,
// 		// Creating position vector
// 		position = vector.create(100, 100),
// 		// Creating velocity vector
// 		velocity = vector.create(0, 0);


// 	velocity.setLength(3); // Setting length of 3 pixels per frame
// 	velocity.setAngle(Math.PI / 6); // Angle = 30 degrees

// 	update();

// 	function update() {
// 		context.clearRect(0, 0, width, height);

// 		// Adding velocity vector to the position vector on each update
// 		position.addTo(velocity);

// 		context.beginPath();
// 		context.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false);
// 		context.fill();

// 		requestAnimationFrame(update);
// 	};

// };


// Example with only one particle
// window.onload = function() {
// 	let canvas = document.getElementById('canvas'),
// 		context = canvas.getContext('2d'),
// 		width = canvas.width = window.innerWidth,
// 		height = canvas.height = window.innerHeight,
// 		// Creating an instance of a particle
// 		p = particle.create(100, 100, 3, Math.PI / 6);

// 	render();

// 	function render() {
// 		context.clearRect(0, 0, width, height);

// 		// Updating particle instance
// 		p.update();

// 		context.beginPath();
// 		context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
// 		context.fill();

// 		requestAnimationFrame(render);
// 	};

// };


window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		// Creating a list of particles
		particles = [],
		numParticles = 100;

	// Creating particles instances
	for (let i = 0; i < numParticles; i++) {
		particles.push(particle.create(
			width / 2,
			height / 2,
			Math.random() * 4 + 1, // Random speed
			Math.random() * Math.PI * 2 // Random direction
		))
	}

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		for (let i = 0; i < numParticles; i++) {
			let p = particles[i]
			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();
		}

		requestAnimationFrame(render);
	};

};
