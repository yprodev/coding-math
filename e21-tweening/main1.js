// =================== THEORY on TWEENING ===================


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
			let x = linearTween(time, start.x, change.x, duration),
				y = linearTween(time, start.y, change.y, duration);

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


	function drawCircle(x, y) {
		context.beginPath();
		context.arc(x, y, 20, 0, Math.PI * 2, false);
		context.fill();
	};
};