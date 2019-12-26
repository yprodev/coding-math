let particle = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	gravity: null,
	mass: 1,
	radius: 0,
	bounce: -1,
	friction: 1, // 1 means there is no friction

	create: function(x, y, speed, direction, grav = 0) {
		let obj = Object.create(this);
		obj.x = x;
		obj.y = y;
		obj.vx = Math.cos(direction) * speed;
		obj.vy = Math.sin(direction) * speed;
		obj.gravity = grav || 0;
		return obj;
	},

	// Acceleration values separately - we don't use vectors any more
	accelerate: function(ax, ay) {
		this.vx += ax;
		this.vy += ay;
	},

	update: function() {
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.vy += this.gravity;
		this.x += this.vx;
		this.y += this.vy;
	},

	angleTo: function(particle2) {
		return Math.atan2(particle2.y - this.y, particle2.x - this.x);
	},

	distanceTo: function(particle2) {
		let dx = particle2.x - this.x,
			dy = particle2.y - this.y;

		// Getting the hypotenuse - pythagorian theorem
		return Math.sqrt(dx * dx + dy * dy);
	},

	gravitateTo: function(particle2) {
		let dx = particle2.x - this.x,
			dy = particle2.y - this.y,
			distSQ = dx * dx + dy * dy,
			dist = Math.sqrt(distSQ),
			force = particle2.mass / distSQ,
			// instead of using sin & cos functions and angle dependency
			// we are using simple division.
			//
			//                 p1
			//                /|
			//               / |
			//              /  |
			//             /   |
			//            /    |
			//           /     | dy
			//          /      |
			//         /       |
			//        /        |
			//       /         |
			//      / A        |
			//  p0 -------------
			//           dx
			//
			// hypotenuse - is the distance
			// cos A = dx / distance 
			// sin A = dy / distance 
			//
			ax = dx / dist * force, // getting the acceleration
			ay = dy / dist * force; 

		this.vx += ax;
		this.vy += ay;
	}
};


