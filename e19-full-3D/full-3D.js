// =================== THEORY on 3D ===================

// In order to move into full 3D, we'll have to abandon
// the idea drawing 2D images or basic 2D shapes, and
// start constructing and rendering 3D models of objects.

// In the most basic form of 3D modeling, objects are
// constructed of vertices. A vertex is just a 3D point.
// Those vertices are usually connected to form polygons.

// The simplest polygons are just triangles made of 3
// vertices. Those vertices and polygons can then have
// properties applied to them, like color, shaders,
// textures, bump maps, reflection maps, etc.

// We have an array of points. We can consider those are
// actually vertices. If we stop rendering them as 40 pixel
// radius circles, and change them to very small dots. it
// will be a little more obvious that they are simplye
// points in space.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		points = [],
		numPoints = 200,
		centerZ = 2000,
		radius = 1000,
		baseAngle = 0,
		rotationSpeed = 0.01;

	for (let i = 0; i < numPoints; i++) {
		let point = {
			angle: 0.2 * i,
			y: 2000 - 4000 / numPoints * i
		};
		point.x = Math.cos(point.angle + baseAngle) * radius;
		point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
		points.push(point);
	}

	context.translate(width / 2, height / 2);

	document.body.addEventListener('mousemove', function() {
		rotationSpeed = (event.clientX - width / 2) * 0.00005;
		ypos = (event.clientY - height / 2) * 2;
	}, false);

	render();

	function render() {
		baseAngle += rotationSpeed;
		context.clearRect(-width / 2, -height / 2, width, height);

		// Starting connecting the points
		context.beginPath();

		for (let i = 0; i < numPoints; i++) {
			let point = points[i],
				perspective = fl / (fl + point.z);

			context.save();
			context.scale(perspective, perspective);
			context.translate(point.x, point.y);

			// For the first point, we want to do a moveTo,
			// otherwise I want a lineTo. So, just do an if / else
			// checking if i == 0. Now, in both the moveTo and lineTo
			// we are going to use (0, 0) as coordinates. This may
			// seem odd, but remember that we've translated and scaled
			// the context so (0, 0) is the screen position of the
			// current point. That's exactly where we've been drawing
			// the circles, so that will where we'll draw the lines to
			// as well.

			// Now, since we're all into lines now, and not so much into
			// 2D shapes anymore, we'll get rid of this arc drawing.
			if (i == 0) {
				context.moveTo(0, 0);
			} else {
				context.lineTo(0, 0);
			}

			context.restore();

			point.x = Math.cos(point.angle + baseAngle) * radius;
			point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
		}

		context.stroke();

		requestAnimationFrame(render);
	}
};