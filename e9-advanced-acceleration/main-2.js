window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ship = particle.create(
			width / 2,
			height / 2,
			0,
			0
		),
		thrustForce = vector.create(0, 0),
		angle = 0,
		turningLeft = false,
		turningRight = false,
		thrusting = false;

	render();

	document.body.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case 38: // up arrow key
				thrusting = true; // moving up
				break;
			case 37: // left arrow key
				turningLeft = true; // moving left
				break;
			case 39: // right arrow key
				turningRight = true; // moving right
				break;
			default:
				break;
		}
	}, false);

	// When any of those keys are released
	// the thrust should be moved back to 0 (zero).
	document.body.addEventListener('keyup', function(event) {
		switch(event.keyCode) {
			case 38: // up arrow key
				thrusting = false; // moving up
				break;
			case 37: // left arrow key
				turningLeft = false; // moving left
				break;
			case 39: // right arrow key
				turningRight = false; // moving right
				break;
			default:
				break;
		}
	}, false);

	function render() {
		context.clearRect(0, 0, width, height);

		// Rotating the ship
		if (turningLeft) {
			angle -= 0.05;
		}
		if (turningRight) {
			angle += 0.05;
		}

		// thrust force we be going into the direction
		// of the angle we got from rotation.
		thrustForce.setAngle(angle);

		if (thrusting) {
			thrustForce.setLength(0.1);
		} else {
			thrustForce.setLength(0);
		}

		ship.accelerate(thrustForce);
		ship.update();


		context.save();
		// Translating the context to the ship's XY postion
		context.translate(ship.position.getX(), ship.position.getY());
		// Rotate the context to angle
		context.rotate(angle);

		// Draw the ship
		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);

		// Drawing one line (flame) if thrusting
		if (thrusting) {
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}

		context.stroke();

		// Finally we need to restore the context
		context.restore();


		// if the ship is out of the screen width...
		if (ship.position.getX() > width) {
			ship.position.setX(0); // put it on the left edge
		}
		if (ship.position.getX() < 0) {
			ship.position.setX(width); // put it on the right edge
		}
		if (ship.position.getY() < 0) {
			ship.position.setY(height); // put it on the bottom edge
		}
		if (ship.position.getY() > height) {
			ship.position.setY(0); // put it on the top edge
		}

		requestAnimationFrame(render);
	};

};