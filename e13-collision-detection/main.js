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

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;


	render();


	function render() {
		context.clearRect(0, 0, width, height);


		requestAnimationFrame(render);
	};

};