let particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1,
	radius: 0,
	bounce: -1,
	friction: 1, // 1 means there is no friction

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
		// It's the simple way of implementing friction.
		// REMEMBER: It is NOT the real friction.
		this.velocity.multiplyBy(this.friction);
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


