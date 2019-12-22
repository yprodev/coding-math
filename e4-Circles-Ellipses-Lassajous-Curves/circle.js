window.onload = function() {
	var canvas = document.getElementById('canvas'),
			context = canvas.getContext('2d'),
			width = canvas.width = window.innerWidth,
			height = canvas.height = window.innerHeight,


			// To draw a circle we need to know radius of this
			// 		circle and sides of the right triangle - x and y.
			// 		To know this sides we could use cos and sin functions.
			//
			// 		cos A = adjacent / hypothenuse
			// 		sin A = opposite / hypothenuse
			//
			// 		In our case radius is an hypothenuse.
			//
			// 		So:
			//
			// 		cos A = adjacent / radius
			// 		sin A = opposite / radius
			//
			// 		To know the length of each side let's multiply
			// 		each formula by radius.
			//
			// 		radius * cos A = adjacent
			// 		radius * sin A = opposite
			//
			// 		REMEMBER: in trigonometry angle increases
			// 		anty-clockwise (counter clockwise). But we are working
			// 		with browser, where we need to inverse the context. So,
			// 		angle in our case will increase clockwise.

			// The center of a canvas is the center of a circle
			centerX = width / 2,
			centerY = height / 2,
			radius = 200,
			xRadius = 200,
			yRadius = 400,
			angle = 0,
			xAngle = 0,
			yAngle = 0,
			numObjects = 20,
			speed = .01,
			xSpeed = .023,
			ySpeed = .015,
			slice = Math.PI * 2 / numObjects,
			x,
			y;



		// Circling around function
		// render1()
		// function render1() {
		// 	// Clear the context
		// 	context.clearRect(0, 0, width, height)
		// 	x = centerX + Math.cos(angle) * radius
		// 	y = centerY + Math.sin(angle) * radius
		// 	context.beginPath()
		// 	context.arc(x, y, 10, 0, Math.PI * 2, false)
		// 	context.fill()

		// 	angle += speed
		// 	requestAnimationFrame(render1)
		// }




		// Circling around in elipsis
		// differentRadius()
		// function differentRadius() {
		// 	// Clear the context
		// 	context.clearRect(0, 0, width, height)
		// 	x = centerX + Math.cos(angle) * xRadius
		// 	y = centerY + Math.sin(angle) * yRadius
		// 	context.beginPath()
		// 	context.arc(x, y, 10, 0, Math.PI * 2, false)
		// 	context.fill()

		// 	angle += speed
		// 	requestAnimationFrame(differentRadius)
		// }




		// Circling with different speed and angle
		// differentAngelAndRadius()
		// function differentAngelAndRadius() {
		// 	// Clear the context
		// 	context.clearRect(0, 0, width, height)
		// 	x = centerX + Math.cos(xAngle) * xRadius
		// 	y = centerY + Math.sin(yAngle) * yRadius
		// 	context.beginPath()
		// 	context.arc(x, y, 10, 0, Math.PI * 2, false)
		// 	context.fill()

		// 	xAngle += xSpeed
		// 	yAngle += ySpeed

		// 	requestAnimationFrame(differentAngelAndRadius)
		// }


		for (var i = 0; i < numObjects; i += 1) {

			angle = i * slice;

			// Finding X side of the triangle
			x = centerX + Math.cos(angle) * radius;

			// Finding Y side of the triangle
			y = centerY + Math.sin(angle) * radius;

			context.beginPath();
			// Creating round dot on the sreen with radius 10
			context.arc(x, y, 10, 0, Math.PI * 2, false);
			context.fill();

		}



};


