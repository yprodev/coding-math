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
	springs: null,
	gravitations: null,

	create: function(x, y, speed, direction, grav = 0) {
		let obj = Object.create(this);
		obj.x = x;
		obj.y = y;
		obj.vx = Math.cos(direction) * speed;
		obj.vy = Math.sin(direction) * speed;
		obj.gravity = grav || 0;
		obj.springs = [];
		obj.gravitations = [];
		return obj;
	},

	addGravitation: function(p) {
		this.removeGravitation(p);
		this.gravitations.push(p);
	},

	removeGravitation: function(p) {
		for (var i = 0; i < this.gravitations.length; i++) {
			if (p === this.gravitations[i]) {
				this.gravitations.splice(i, 1);
				break;
			}
		}
	},

	addSpring: function(point, k, length = 0) {
		this.removeSpring(point);
		this.springs.push({
			point,
			k,
			length
		});
	},

	removeSpring: function(point) {
		for (var i = 0; i < this.springs.length; i++) {
			if (point === this.springs[i].point) {
				this.springs.splice(i, 1);
				break;
			}
		}
	},

	getSpeed: function() {
		return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
	},

	setSpeed: function(speed) {
		let heading = this.getHeading();
		this.vx = Math.cos(heading) * speed;
		this.vy = Math.sin(heading) * speed;
	},

	getHeading: function() {
		return Math.atan2(this.vy, this.vx);
	},

	setHeading: function(heading) {
		let speed = this.getSpeed();
		this.vx = Math.cos(heading) * speed;
		this.vy = Math.sin(heading) * speed;
	},

	// Acceleration values separately - we don't use vectors any more
	accelerate: function(ax, ay) {
		this.vx += ax;
		this.vy += ay;
	},

	update: function() {
		this.handleSprings();
		this.handleGravitations();
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.vy += this.gravity;
		this.x += this.vx;
		this.y += this.vy;
	},

	handleGravitations: function() {
		for (let i = 0; i < this.gravitations.length; i++) {
			this.gravitateTo(this.gravitations[i]);
		}
	},

	handleSprings: function() {
		for (let i = 0; i < this.springs.length; i++) {
			let spring = this.springs[i];
			this.springTo(spring.point, spring.k, spring.length);
		}
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
	},

	springTo: function(point, k, length = 0) {
		let dx = point.x - this.x,
			dy = point.y - this.y,
			distance = Math.sqrt(dx * dx + dy * dy),
			springForce = (distance - length) * k;

		this.vx += dx / distance * springForce;
		this.vy += dy / distance * springForce;
	}
};


