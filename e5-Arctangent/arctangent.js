window.onload = function() {
	var canvas = document.getElementById('canvas'),
			context = canvas.getContext('2d'),
			width = canvas.width = window.innerWidth,
			height = canvas.height = window.innerHeight,

			arrowX = width / 2,
			arrowY = height / 2,
			dx, // Distance between the arrow and the
			dy, // mouse cursor on each axis
			angle = 0;


	render()

	function render() {
		context.clearRect(0, 0, width, height)

		// Saving the context before traslating it
		context.save()

		// Centring the context to the middle of the screen
		context.translate(arrowX, arrowY) 

		// Rotating the orientation system, NOT the context
		context.rotate(angle)

		context.beginPath()
		context.moveTo(20, 0)
		context.lineTo(-20, 0)
		context.moveTo(20, 0)
		context.lineTo(10, -10)
		context.moveTo(20, 0)
		context.lineTo(10, 10)
		context.stroke()

		context.restore()
		requestAnimationFrame(render)
	}

	document.body.addEventListener('mousemove', function(event) {
		dx = event.clientX - arrowX
		dy = event.clientY - arrowY

		// Uncomment lines one by one to see the difference
		// angle = Math.atan(dy / dx) // tan = opposite side / adjacent side
		angle = Math.atan2(dy, dx)

	}, false)


};


