// =================== THEORY on TWEENING ===================

// http://www.robertpenner.com/easing

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ball = {
			x: 100,
			y: 100,
		};

	tweenX(ball, 800, 1000, easeInOutQuad);

	function tweenX(obj, targetX, duration, easingFunc) {
		let startX = obj.x,
			changeX = targetX - startX,
			startTime = new Date();

		render();

		function render() {
			let time = new Date() - startTime;

			if (time < duration) {
				obj.x = easingFunc(time, startX, changeX, duration);
				requestAnimationFrame(render);
			} else {
				time = duration;
				obj.x = easingFunc(time, startX, changeX, duration);
			}
			draw();
		}
	};


	function draw() {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.arc(ball.x, ball.y, 20, 0, Math.PI * 2, false);
		context.fill();
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