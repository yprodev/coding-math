let utils = {
	norm: function(value, min, max) {
		return (value - min) / (max - min);
	},

	lerp: function(norm, min, max) {
		return (max - min) * norm + min;
	},

	map: function(value, sourceMin, sourceMax, destMin, destMax) {
		const normalized = norm(value, sourceMin, sourceMax);
		return lerp(normalized, destMin, destMax);
	},

	clamp: function(value, min, max) {
		return Math.min(Math.max(value, Math.min(min, max), Math.max(min, max)));
	},

	distance: function(p0, p1) {
		let dx = p1.x - p0.x,
			dy = p1.y - p0.y;

		return Math.sqrt(dx * dx + dy * dy);
	},

	distanceXY: function(x0, y0, x1, y1) {
		let dx = x1 -x0,
			dy = y1 - y0;

		return Math.sqrt(dx * dx + dy * dy);
	},

	circleCollision: function(c0, c1) {
		return utils.distance(c0, c1) <= c0.radius + c1.radius;
	},

	circlePointCollision: function(x, y, circle) {
		return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
	},

	pointInRect: function(x, y, rect) {
		return utils.inRange(x, rect.x, rect.x + rect.width) &&
			   utils.inRange(y, rect.y, rect.y + rect.height);
	},
	// Having this inRange function more robust
	inRange: function(value, min, max) {
		// Here we are checking if value is greater or equal to min.
		// This is ASSUMING that min is less than max. What breaks,
		// when max is smaller of the two.

		// return value >= min && value <= max;

		// So what is really we wanna
		// know is, if value is greater than or equal to the smallest
		// value of min and max.
		
		return value >= Math.min(min, max) && value <= Math.max(min, max);
	},

	rangeIntersect: function(min0, max0, min1, max1) {
		// Here is the formula, but it will not work for inverse - negative numbers.
		// return max0 >= min1 && min0 <= max1;
		// So we need to use here Math.min() and Math.max() functions
		return Math.max(min0, max0) >= Math.min(min1, max1)
			&& Math.min(min0, max0) <= Math.max(min1, max1);
	},

	rectIntersect: function(r0, r1) {
		return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width)
			&& utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
	},

	degreesToRads: function(degrees) {
		return degrees / 180 * Math.PI;
	},

	radsToDegrees: function(radians) {
		return radians * 180 / Math.PI;
	},

	randomRange: function(min, max) {
		return min + Math.random() * (max - min);
	},

	randomInt: function(min, max) {
		return Math.floor(min + Math.random() * (max - min + 1));
	},

	roundNearest: function(value, nearest) {
		return Math.round(value / nearest) * nearest;
	},


	// Canvas has context.bezierCurveTo for quadratic curves
	quadraticBezier: function(p0, p1, p2, t, pFinal = {}) {
		pFinal.x = Math.pow(1 - t, 2) * p0.x + (1 - t) * 2 * t * p1.x + t * t * p2.x;
		pFinal.y = Math.pow(1 - t, 2) * p0.y + (1 - t) * 2 * t * p1.y + t * t * p2.y;
		return pFinal;
	},

	cubicBezier: function(p0, p1, p2, p3, t, pFinal = {}) {
		pFinal.x = Math.pow(1 - t, 3) * p0.x +
				   Math.pow(1 - t, 2) * 3 * t * p1.x +
				   (1 - t) * 3 * t * t * p2.x +
				   t * t * t * p3.x;
		pFinal.y = Math.pow(1 - t, 3) * p0.y +
				   Math.pow(1 - t, 2) * 3 * t * p1.y +
				   (1 - t) * 3 * t * t * p2.y +
				   t * t * t * p3.y;

		return pFinal;
	}

};