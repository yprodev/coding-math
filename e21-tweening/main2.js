// =================== THEORY on TWEENING ===================

// http://www.robertpenner.com/easing

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		start = {
			x: 100,
			y: 100,
		},
		target = {},
		change = {},
		startTime,
		duration = 1000;

	drawCircle(start.x, start.y);

	render();

	document.body.addEventListener('click', function(event) {
		target.x = event.clientX;
		target.y = event.clientY;
		change.x = target.x - start.x;
		change.y = target.y - start.y;
		startTime = new Date();
		render();
	}, false);

	function render() {
		context.clearRect(0, 0, width, height);

		let time = new Date() - startTime;
		if (time < duration) {
			// let x = linearTween(time, start.x, change.x, duration),
			// 	y = linearTween(time, start.y, change.y, duration);

			// let x = easeInQuad(time, start.x, change.x, duration),
			// 	y = easeInQuad(time, start.y, change.y, duration);

			let x = easeInOutQuad(time, start.x, change.x, duration),
				y = easeInOutQuad(time, start.y, change.y, duration);

			drawCircle(x, y);
			requestAnimationFrame(render);
		} else {
			drawCircle(target.x, target.y);
			start.x = target.x;
			start.y = target.y;
		}
	}


	function linearTween(t, b, c, d) {
		return c * t / d + b;
	}

	// Quadratic easing: t^2
	// quadratic easing in - acceleration from zero velocity
	// t: current time
	// b: beginning value
	// c: change in value
	// d: duration
	// t and d can be in frames of seconds / milliseconds
	function easeInQuad(t, b, c, d) {
		return c * (t /= d) * t + b;
	}

	function easeOutQuad(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	}

	function easeInOutQuad(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	}

	function drawCircle(x, y) {
		context.beginPath();
		context.arc(x, y, 20, 0, Math.PI * 2, false);
		context.fill();
	};
};