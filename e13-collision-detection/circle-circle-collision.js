// ============== THEORY on COLLISION DETECTION ==============

// Collision detection is also known as hit testing.
// Collision detection is more relative to games programming.
// Hit testing is more relevant to use in UI applications.

// Collision detection is when the object hit something or
// or when two objects are hitting each other.

// There two basic ways to determine collision: mathematical
// and graphical. Mathematically - means that you have some
// kind of a structural definition for each of the objects.
// Some mathematical model that describes the positions of 
// the shapes. And you can do some calculations to see if
// those two shapes are intersecting.

// Graphical collision detection means that you actually
// using the defined screen pixels of each object to see if
// they overlap. This is usually dependent on some kind of
// built in method of a bitmaps that you are using in a
// specific system. But this is not, which is implemented
// on the HTML5 canvas.

// There is a need of some mathematical model of the object or
// objects that we are testing. We can have objects of all kinds
// of shapes that we usually define mathematically in the one
// or the other. But the more complex your object model is - the
// more comples it is to do collision detection with it. So,
// rather than always trying to exactly model an object first
// you should see if you could rougthly represent it by one of
// these three shapes: circle, rectangle, point.

// We will try to implement these type of collisions:
// 1. circle / circle
// 2. circle / point
// 3. rectangle / rectangle
// 4. rectangle / point


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

		circle0 = {
			x: Math.random() * width,
			y: Math.random() * height,
			radius: 50 + Math.random() * 100
		},

		circle1 = {
			x: Math.random() * width,
			y: Math.random() * height,
			radius: 50 + Math.random() * 100
		};

	document.body.addEventListener('mousemove', function(event) {
		circle1.x = event.clientX;
		circle1.y = event.clientY;

		if (utils.circleCollision(circle0, circle1)) {
			context.fillStyle = '#f66';
		} else {
			context.fillStyle = '#999';
		}

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(circle0.x, circle0.y, circle0.radius, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI * 2, false);
		context.fill();

	}, false);


};