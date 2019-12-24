// ============== THEORY on RECTANGLE COLLISION ==============

// Rectangles can be defined by two points or one point, widht
// and height. And in a lot of cases the width and a height
// are just offsets from the first point to the second point.

// Say we want to know if the point within the rectangle. If
// so, we need to satisfy two conditions:
// 1. The x position of the point must be within the range
// define by x positions of the two points making up the
// rectangle.
// 2. The y position of the point must be withing the range
// define by y positions of the two pointes making up the
// rectangle.

// There is a special case. We have a rectangle first point
// with the width = -20 and height = -10 (reversed). The point
// within the rectangle will fail the test, because its
// position values are positive.

// There are a few ways to handle this:
// 1. Just to say that width and height always need to be
// positive. That is kind of arbitrary rule and it's only
// gonna make this less useful and more proned error.
// 2. Create smart rectangle object that will automatically
// adjust its (x,y), width, height values. So, the (x,y)
// are always on the top left and width and height are always
// positive.
// 3. Make point withing a rectangle more robust.



window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		// rect = {
		// 	x: 300,
		// 	y: 200,
		// 	width: 200,
		// 	height: 100
		// };

		// Testing special case with negative width and height

		rect = {
			x: 300,
			y: 200,
			width: -200,
			height: -100
		};



	document.body.addEventListener('mousemove', function(event) {

		if (utils.pointInRect(event.clientX, event.clientY, rect)) {
			context.fillStyle = '#f66';
		} else {
			context.fillStyle = '#999';
		}

		context.fillRect(rect.x, rect.y, rect.width, rect.height);


	}, false);


};