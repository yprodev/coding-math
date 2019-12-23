// Example with acceleration with particle on the screen
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
		thrustForce = vector.create(0, 0);

	render();

	document.body.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case 38: // up arrow key
				thrustForce.setY(-0.1); // moving up
				break;
			case 40: // down arrow key
				thrustForce.setY(0.1); // moving down
				break;
			case 37: // left arrow key
				thrustForce.setX(-0.1); // moving left
				break;
			case 39: // down arrow key
				thrustForce.setX(0.1); // moving right
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
				thrustForce.setY(0); // moving up
				break;
			case 40: // down arrow key
				thrustForce.setY(0); // moving down
				break;
			case 37: // left arrow key
				thrustForce.setX(0); // moving left
				break;
			case 39: // down arrow key
				thrustForce.setX(0); // moving right
				break;
			default:
				break;
		}
	}, false);

	function render() {
		context.clearRect(0, 0, width, height);

		ship.accelerate(thrustForce);
		ship.update();

		context.beginPath();
		context.arc(
			ship.position.getX(),
			ship.position.getY(),
			10,
			0,
			Math.PI * 2,
			false
		)
		context.fill();

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


