// ============== THEORY on CIRCLE / CIRCLE COLLISION ==============

// Pythagorean theorem and distance are vital for this type of
// collision. Defining the circle with a x,y point and the radius.
// Let's say we have to circles on the screen and we wanna know if
// they are toching.

// First we calculate the distance between them using the function we
// have created. If the sum of radicies of these two circles will be
// greater or equals than the distance between those circles - we
// detected a circle / circle collision.


window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		circle = {
			x: Math.random() * width,
			y: Math.random() * height,
			radius: 50 + Math.random() * 100
		};


	document.body.addEventListener('mousemove', function(event) {

		if (utils.circlePointCollision(event.clientX, event.clientY, circle)) {
			context.fillStyle = '#f66';
		} else {
			context.fillStyle = '#999';
		}

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
		context.fill();


	}, false);


};