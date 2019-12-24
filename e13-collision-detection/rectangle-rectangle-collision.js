// ============== THEORY on RECTANGLE COLLISION ==============

// Rectangles can be defined by two points or one point, widht
// and height. And in a lot of cases the width and a height
// are just offsets from the first point to the second point.

// The left and right x values of rectangle form a range - xRange.
// With two rectangles we have two xRanges. In the same way
// we have two y ranges. When the two xRanges overlap each
// other and two yRanges also overlap each other, then the
// rectangles have to be intersect. If either the xRanges
// or the yRanges don't overlap then the rectangles have to be
// separate.


//  |----------|     |------------------------|
// min    A   max   min           B          max

// If the max value of A is less than a min value of B, then
// there is no way these two ranges can overlap. So, for
// overlap to happen max of A has to be greater than or equal
// to min of B.


// Let's say we switched ranges:
//  |----------|     |------------------------|
// min    B    max   min           A          max

// If a min value of A is greater than or equal to the max value
// of B there is no overlap possible either. So, min of A has to
// be less or equal to max of B.

// Two rules:
// max A >= min B
// min A <= max B



window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		rect0 = {
			x: 200,
			y: 200,
			width: 200,
			height: 100
		},
		rect1 = {
			x: 0,
			y: 0,
			width: 100,
			height: 200
		};


	document.body.addEventListener('mousemove', function(event) {

		rect1.x = event.clientX - 50; // the width is 100 the cursor will be at the center
		rect1.y = event.clientY - 100; // the height is 200 the cursor will be at the center

		context.clearRect(0, 0, width, height);

		if (utils.rectIntersect(rect0, rect1)) {
			context.fillStyle = '#ff6666';
		} else {
			context.fillStyle = '#999999';
		}

		context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
		context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);


	}, false);


};