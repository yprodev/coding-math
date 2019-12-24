// Example with acceleration with particle on the screen


// =============== THEORY of FRICTION ===============

// There are two ways to implement friction:
// 1. Correct way to implement it - from the physics perspective,
// 2. Wrong, but simplified.

// There is a bunch of different types of friction:
// 1. Dry
// 2. Fluid
// 3. Lubricated
// 4. Skin
// 5. Internal
// Check out the wikipedia page regarding this.

// Taking a look at dry and skin friction:
// Dry - two surfaces are in contact
// Skin - occurs when objects moves through a liquid or some
// other medium, like the atmosphere. Skin friction is also
// a part of what we call "drag".

// If you moving along with a certain speed and encounter some
// friction - it will slow you down. In other words it will
// change your speed. Speed is the one component of velocity.
// So, frictions is something that changes velocity. That's
// the definition of acceleration. So, friction is a force
// vector that we can use just like an acceleration vector.

// In the real world friction is very complex and could
// depend on a bunch of different factors:
// 1. materials of the two surfaces
// 2. materials of the object and the medium
// 3. surface area
// 4. shape
// 5. weight
// 6. slope of the surface
// 7. temperature
// 8. turbulence
// 9. etc.

// Let's simplify all that down into a single vector, whos
// direction is exactly opposite to velocity of the object
// it's acting on.

// If you add velocity and friction vectors together, we
// we will get new velocity vector with the same direction, 
// but with the smaller magnitude. In other words friction
// slows the object down.

// It may seem strange to imagine friction as a force, which
// is actively pushing something in a direction. We tend to
// think that it is more pasive resistance. But, Neutons 3rd
// Law says that is for every reaction there is an equal
// opposite reaction.

// When an object is moving through the medium, such as air,
// it's pushing on those air molecules, and they are pusing
// back on the object. The same for an object that is moving
// accross a surface.

// For a given object in a given enviroment the friction will
// be the same, whether that object is moving fast or slow. It
// is essentially true, but it is a major simplification. In
// a real world varying speeds can have all kind of secondary
// effects that could all do the force of friction.

// There is one of those interesting fact about the friction,
// as compared to other acceleration vectors. If throwing a
// ball up into the air it will have straight up velocity. Gravity,
// will be a vector in the opposite direction reducing its
// speed. Eventually that balls velocity will reach zero - it
// will stop, and then gravity will pull it back down into the
// opposite direction. But, friction will never reverse the
// direction of an object. Friction will reduce the objects
// velocity until it hits zero.

// At some point the objects velocity vector maybe smaller than
// the friction vector. And if you just add them together you will
// get the reversed velocity. So, you need to be CAREFULL not
// to reverse velocity with friction vector.




window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(
			width / 2,
			height / 2,
			10,
			Math.random() * Math.PI * 2
		),
		friction = vector.create(0.15, 0);

	// There are number of ways how to add friction and particle
	// velocity vectors.

	// We have an angle of a velocity vector, and add 180 degrees
	// or PI radians to it to get the angle to the friction vector.
	// Then add the friction to the velocity.

	// Or let say that the friction angle to be the same as the
	// velocity angle and subtract the two vectors rather then
	// adding them.

	// Or instead of giving the friciton the positive length of
	// 0.15, let's reverse it with -0.15.


	p.radius = 10;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		// We will go with subracting...
		friction.setAngle(p.velocity.getAngle());

		if (p.velocity.getLength() > friction.getLength()) {
			p.velocity.subtractFrom(friction); // subtract friction from the velocity
		} else {
			p.velocity.setLength(0);
		}

		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.fill();

		requestAnimationFrame(render);
	};

};


