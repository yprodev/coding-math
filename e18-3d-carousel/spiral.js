// =================== THEORY on 3D (2.5D) - CAROUSEL ===================

// Creating image gallery in 3D space.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		cards = [],
		numCards = 200,
		centerZ = 2000,
		radius = 1000,
		baseAngle = 0,
		rotationSpeed = 0.01;

	for (let i = 0; i < numCards; i++) {
		let card = {
			angle: 0.2 * i,
			y: 2000 - 4000 / numCards * i,
			img: document.createElement('img')
		};
		card.x = Math.cos(card.angle + baseAngle) * radius;
		card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
		cards.push(card);
	}

	context.translate(width / 2, height / 2);
	context.font = '200px Arial';

	document.body.addEventListener('mousemove', function() {
		rotationSpeed = (event.clientX - width / 2) * 0.00005;
		ypos = (event.clientY - height / 2) * 2;
	}, false);

	render();

	function render() {
		baseAngle += rotationSpeed;
		cards.sort(zsort);
		context.clearRect(-width / 2, -height / 2, width, height);
		for (let i = 0; i < numCards; i++) {
			let card = cards[i],
				perspective = fl / (fl + card.z);

			context.save();
			context.scale(perspective, perspective);
			context.translate(card.x, card.y);

			context.beginPath();
			context.arc(0, 0, 40, 0, Math.PI * 2, false);
			context.fill();

			context.restore();

			card.x = Math.cos(card.angle + baseAngle) * radius;
			card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
		}

		requestAnimationFrame(render);
	}

	function zsort(cardA, cardB) {
		return cardB.z - cardA.z;
	}

};