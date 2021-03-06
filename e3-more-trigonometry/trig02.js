window.onload = function() {
	var canvas = document.getElementById('canvas'),
			context = canvas.getContext('2d'),
			width = canvas.width = window.innerWidth,
			height = canvas.height = window.innerHeight;

			// Centering The Object on the canvas
			// point to place the object according to y axis
	var centerY = height * .5,
			// point to place the object according to x axis
			centerX = width * .5,
			

			// We need some kind of base radius for our circle
			// 		to create effect of fading of the dot
			baseAlpha = 0.5,

			// How far to move the object inside canvas
			// Amplitude
			// offset for baseAlpha
			offset = 0.5,
			
			// How fast to move the object back and fouth
			// How fast we incrementing the angle so that it
			// 		moves from 0 to 2PI
			// Frequency
			speed = 0.1,

			// This angle we will put in the sin function
			angle = 0;

	// call render function to draw an object
	render();

	function render() {

		// Calculating y for moving verticaly
		var y = centerY + Math.sin(angle) * offset

		// Calculating alpha for blinking
		var alpha = baseAlpha + Math.sin(angle) * offset;

		context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
		context.clearRect(0, 0, width, height);
		// Begin the path to draw a circle
		context.beginPath();

		// Creating a circle
		context.arc(centerX, y, 40, 0, Math.PI * 2, false);

		// Fill the circle
		context.fill();

		// Increase angle with some speed
		angle += speed;

		// Animate with requestAnimationFrame function
		requestAnimationFrame(render);
	}


};


