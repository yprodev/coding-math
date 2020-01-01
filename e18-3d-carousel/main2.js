// =================== THEORY on 3D (2.5D) - CAROUSEL ===================

// Creating image gallery in 3D space.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		cards = [],
		numCards = 7
		centerZ = 1000,
		radius = 1000,
		baseAngle = 0,
		rotationSpeed = 0.01;

	for (let i = 0; i < numCards; i++) {
		let card = {
			y: 0,
			angle: Math.PI * 2 / numCards * i,
			img: document.createElement('img')
		};
		card.img.src = `postcard${i}.jpg`;
		card.x = Math.cos(card.angle + baseAngle) * radius;
		card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
		cards.push(card);
	}

	context.translate(width / 2, height / 2);
	context.font = '200px Arial';

	document.body.addEventListener('mousemove', function() {
		rotationSpeed = (event.clientX - width / 2) * 0.00005;
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

			// Here is the translation the context and then scaling.
			// context.translate(card.x * perspective, card.y * perspective);
			// context.scale(perspective, perspective);
			// If we did the scaling first then we could simply translate by
			// card.x, card.y. The perspective multiplication will already
			// take care of the translating.
			context.scale(perspective, perspective);
			context.translate(card.x, card.y);

			context.translate(-card.img.width / 2, -card.img.height / 2);
			context.drawImage(card.img, 0, 0);

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