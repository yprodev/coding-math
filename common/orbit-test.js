window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		sun = particle.create(width / 2, height / 2, 0, 0),
		planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);

	sun.mass = 20000;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		planet.gravitateTo(sun);
		planet.update();

		context.beginPath();
		context.fillStyle = '#ffff00';
		context.arc(sun.x, sun.y, 20, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = 'blue';
		context.arc(planet.x, planet.y, 4, 0, Math.PI * 2, false);
		context.fill();

		requestAnimationFrame(render);
	};
};