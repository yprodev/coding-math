// =================== THEORY on BITMAP COLLISION DETECTION ===================

// Bitmap - it's a rectanglar grid of values, that are used
// just to set a color of pixels of the rectanglar portion
// on the screen. Point (0, 0) will be the top left pixel,
// and the point represented (bitmap.width- 1, bitmap.height
// - 1) will be the bottom right pixel.

// Every pixel in a bitmap is addressable by the (x, y)
// coordinate. And in many systems you can:
// 1. get the pixel value and their location with a function
// usually called getPixel(x, y)
// 2. set its value with the function setPixel(x, y, color)

// Generally the pixel value can be broken down into
// red, green, blue and alpha channels. But NOT in canvas.

// The simplest strategy in bitmap collision detection is
// to take an empty transparent bitmap and then draw a shape
// in it. All the pixels in that bitmap will have an alpha
// channel value of 0, except those where the shape is drawn.

// Say, you have a particle. It has it's position (x, y) and
// you wanna know if it hit the object you've drawn. You can
// get a pixel value (getPixel()) at that point, and if the
// alpha value there is greater than zero - your particle has
// collided with that shape. Of course, it's only useful in
// point to shape collisions.

// The problem of HTML5 Canvas that Canvas doesn't have
// built-in method for this type of collisiton
// (context.getPixel()). What you have to do is called
// context.getImageData(). This returns the ImageData object.
// The ImageData object has 3 properties: width, height, data.
// width and height are very obvious. Data is the special type
// of an array, containing the pixel values.

// As the important note, the image data you get from a context
// is fixed. If you draw something else to the canvas, after
// getting the image data or you clear the canvas, or in any
// other way change that bitmap - then the image data you have
// no longer the current representation of what you see in the
// canvas. You have to call the image data again to get the
// updated pixel data from that bitmap.

// Now you might guess that this data property that holds the
// pixel values is a two dimentional array. And you might
// expect that you could say something like:
// imageData.data[x][y] to get pixel value at location (x, y).
// The data property is actually one dimentional array goes
// like this:
// data[0] = red value of pixel (0, 0)
// data[1] = green value of pixel pixel (0, 0)
// data[2] = blue value of pixel pixel (0, 0)
// data[3] = alpha value of pixel pixel (0, 0)
// data[4] = red value of pixel pixel (1, 0)

// If each pixel took up one in that array, you'd find the
// index of a particular (x, y) pixel:
// index = ImageData.width * y + x;
// So, if the bitmap 100px wide, and x was 10 and y was 5:
// 100 * 5 + 10 = 510 index

// But since each pixel takes up 4 elements, you have to
// multiply all that by 4:
// index = ((width * y) + x) * 4 = ((100 * 5) +10) * 4 = 2040
// This pixel will point at a red value of (10, 5) coordinate
// on the bitmap.

// You can then get the other channel values using offsets to
// that x. So, red would be:
// imageData.data[index] = red
// imageData.data[index + 1] = green
// imageData.data[index + 2] = blue
// imageData.data[index + 3] = alpha

// It turns out that you don't have to get all of the image data
// for the entire canvas. When you call the .getImageData() you
// pass in (x,y, width, height) coordinates of a rectangle that
// you like to get the image data for. If you pass (0, 0,
// canvas.width, canvas.height) - yes, you get all of the image
// data for the whole context.

// But you can get the sub-rectangle of that canvas as well. Now
// it turns out that getting and setting an imageData from a
// canvas's context is pretty expensive in terms of processing
// time. And the more data you get or set - the longer it takes.
// So you should really only get what you need. And only when
// you need it.

// So, we could go ahead and get the imageData for a single pixel
// by saying imageData = context.getImageData(x, y, 1, 1);
// That defines a one pixel rectangle at the specified (x,y). Then
// our red, green, blue and alpha channels for that pixel would
// be an imageData.data[index] with adding indexes 1, 2 and 3
// (offsets). REMEMBER: Get the imageData ONLY when you need it.
// Using this method you'd have to call getImageData() every time
// you want to check pixel. If you know that the bitmap is not
// going to change it might be more efficient to get the imageData
// for the whole thing, one time right up front. But if there is any
// chance that the bitmap could change then you need to call
// getImageData() each time anyway - to make sure you have the
// latest data. So in that case it will be better of just getting
// the single pixel each time.


window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		targetCanvas = document.getElementById('target'),
		targetContext = targetCanvas.getContext('2d'),
		width = canvas.width = targetCanvas.width = window.innerWidth,
		height = canvas.height = targetCanvas.height = window.innerHeight,
		p = particle.create(0, height / 2, 10, 0);

	targetContext.beginPath();
	targetContext.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false);
	targetContext.fill();

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		p.update();
		context.beginPath();
		context.arc(p.x, p.y, 4, 0, Math.PI * 2, false);
		context.fill();

		// Getting single 1px of the imageData
		let imageData = targetContext.getImageData(p.x, p.y, 1, 1);
		if (imageData.data[3] > 0) {
			targetContext.globalCompositeOperation = 'destination-out';
			targetContext.beginPath();
			targetContext.arc(p.x, p.y, 20, 0, Math.PI * 2, false);
			targetContext.fill();

			resetParticle();
		} else if (p.x > width) {
			resetParticle();
		}

		requestAnimationFrame(render);
	};

	function resetParticle() {
		p.x = 0;
		p.y = height / 2;
		p.setHeading(utils.randomRange(-0.1, 0.1));
	};
};