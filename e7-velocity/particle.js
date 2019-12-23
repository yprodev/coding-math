let particle = {
	position: null,
	velocity: null,

	create: function(x, y, speed, direction) {
		let obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.velocity.setLength(speed); // Magnitude of a velocity vector
		obj.velocity.setAngle(direction); // Direction of a velocity vector
		return obj;
	},

	update: function() {
		// Each particle will know how to update it's
		// encapsulated position
		this.position.addTo(this.velocity);
	}
};


