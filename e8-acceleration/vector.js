// ============== VECTORS THEORY ==============

// Vector encapsulates two values: magnitude and direction.
// Graphically represented as an arrow.
// Direction of a vector in which vector pointing in degrees
// or radians.
// The length of an arrow is a magnitude (or speed in space of an object).
// The faster the speed the longer the arrow.
// Example: vector tail is A and a head is B.
//			-->
//			AB (arrow at the top)
//
// If a vector pointing from the origin of the dimension system (from zero)
// we will talk about the vector as 0B (zero-be arrow at the top) or simpler
// B (arrow at the top).


// You may describe how multiple number of forces imact the position
// of some object in space using vectors.

//           /|
//          / |
//         /  |
//    m   /   | y
//       /    |
//      /     |
//     /      |
//    /       |
//   /        |
//  /         |
// / A        |
// ------------
//      x
//
// m - magnitude
// A - angel
// y - A angle oposite side
// x - A angle adjacent side
//
// x = m * cos A
// y = m * sin A
//

// Vectors summation
// v1 = (7, 4)
// v2 = (2, 3)
// v3 = v1 + v2 = (7 + 2, 4 + 3) = (9, 7)


// Vectors substraction
// v1 = (7, 4)
// v2 = (2, 3)
// v3 = v1 - v2 = (7 - 2, 4 - 3) = (5, 1)


// Vectors multiplication
// v * v = dot product and cross product
// v * s (s - scalar value) = scalar multiplication


let vector = {
	_x: 1,
	_y: 0, // unit vector with angle = 0

	create: function(x, y) {
		let obj = Object.create(this);
		obj.setX(x);
		obj.setY(y);
		return obj;
	},

	setX: function(value) {
		this._x = value;
	},

	getX: function() {
		return this._x;
	},

	setY: function(value) {
		this._y = value;
	},

	getY: function() {
		return this._y;
	},

	setAngle: function(angle) {
		let length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getAngle: function() {
		// Make sure the order of the arguments starts from y, then x
		return Math.atan2(this._y, this._x);
	},

	setLength: function(length) {
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getLength: function() {
		// Pythagorian theory
		return Math.sqrt((this._x * this._x) + (this._y * this._y));
	},

	add: function(v2) {
		return vector.create(
			this._x + v2.getX(),
			this._y + v2.getY()
		);
	},

	subtract: function(v2) {
		return vector.create(
			this._x - v2.getX(),
			this._y - v2.getY()
		);
	},

	multiply: function(val) {
		return vector.create(this._x * val, this._y * val);
	},

	divide: function(val) {
		return vector.create(this._x / val, this._y / val);
	},

	addTo: function(v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	},

	subtractFrom: function(v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	},

	multiplyBy: function(val) {
		this._x *= val;
		this._y *= val;
	},

	divideBy: function(val) {
		this._x /= val;
		this._y /= val;
	}

}
