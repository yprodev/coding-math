let particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1,

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
	},

	angleTo: function(particle2) {
		return Math.atan2(
			particle2.position.getY() - this.position.getY(),
			particle2.position.getX() - this.position.getX());
	},

	distanceTo: function(particle2) {
		let dx = particle2.position.getX() - this.position.getX(),
				dy = particle2.position.getY() - this.position.getY();

		// Getting the hypotenuse - pythagorian theorem
		return Math.sqrt(dx * dx + dy * dy);
	},

	gravitateTo: function(particle2) {
		let grav = vector.create(0, 0),
				dist = this.distanceTo(particle2);

		grav.setLength(particle2.mass / (dist * dist)); // gravity = Mass / radius * radius
		grav.setAngle(this.angleTo(particle2));

		this.velocity.addTo(grav);
	}
};


