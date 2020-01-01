// =================== THEORY on 3D (2.5D) - CAROUSEL ===================

// Creating image gallery in 3D space.

window.onload = function() {
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		fl = 300,
		cards = [],
		numCards = 21;

	for (let i = 0; i < numCards; i++) {
		let card = {
			x: utils.randomRange(-1000, 1000),
			y: utils.randomRange(-1000, 1000),
			z: utils.randomRange(0, 5000),
			img: document.createElement('img')
		};
		card.img.src = `postcard${i % 7}.jpg`;
		cards.push(card);
	}

	context.translate(width / 2, height / 2);
	context.font = '200px Arial';

	render();

	function render() {
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

			card.z -= 5;
			if (card.z < 0) {
				card.z = 5000;
			}
		}

		requestAnimationFrame(render);
	}

	function zsort(cardA, cardB) {
		return cardB.z - cardA.z;
	}

};