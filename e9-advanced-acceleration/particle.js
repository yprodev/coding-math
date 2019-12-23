// Velocity is a change of position over the time.
// It is represented with a vector, which has
// angle (position) and magnitude (speed).

// Any velocity vector can be broken down into component
// vectors with the use of some trigonometry functions - 
// so you can talk about x velocity and y velocity (like x and
// y sides of pythagorian triangle).

// Acceleration is a change of velocity over time. Also is
// represented by vector, which has angle and magnitude. Also
// can be represented by two component vectors - xAcceleration
// and yAcceleration.

// Velocity units are distance over time (distance / time). Like
// miles per hour, pixels / frame.

// Acceleration is a change of velocity over time. So it is
// distance / time / time.

// E.g. gravity is a type of acceleration. It's
// magnitude ~= 32 feet / sec / sec
// magnitude ~= 32 feet / sec**2

// This method of adding acceleration to velocity and velocity
// to position on each time step is known as the Euler Method.
// It's also known as a mathematical integration.

// In the real world defining the forces and motions into
// discrete steps could not be very accurate.


let particle = {
	position: null,
	velocity: null,
	gravity: null,

	create: function(x, y, speed, direction, grav = 0) {
		let obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.velocity.setLength(speed); // Magnitude of a velocity vector
		obj.velocity.setAngle(direction); // Direction of a velocity vector
		obj.gravity = vector.create(0, grav);
		return obj;
	},

	accelerate: function(accelVect) {
		this.velocity.addTo(accelVect);
	},

	update: function() {
		// The gravity is a type of acceleration. So we 
		// are adding it here to the velocity of a particle.
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	}
};


