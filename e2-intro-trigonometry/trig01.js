window.onload = function() {
	var canvas = document.getElementById('canvas'),
			context = canvas.getContext('2d'),
			width = canvas.width = window.innerWidth,
			height = canvas.height = window.innerHeight;


			//=============================================
			//										THEORY
			//=============================================

			// 1 radian - one radius of circle on the perimeter of
			// 						this circle
			// 360 degrees = 6.28 radians = 2PI
			// 180 degrees = PI
			// 90 degrees = PI/2
	
			// Converting radians
			// degrees = (radians * 180 degrees) / PI
			// radians = (degrees * PI) / 180

			// move down our context to see the sin line
			context.translate(0, height / 2);

			// Flip y axis to do the right coordinates
			context.scale(1, -1);

	for (var angle = 0; angle < Math.PI * 2; angle += .01) { 

				// point according to the x axis
		var x = angle * 200,

				// point according to the y axis
				y = Math.sin(angle) * 200;

				// Draw little rectangle 5x5 pixels on each step
				context.fillRect(x, y, 5, 5);

		// How to see sin function (wants numbers in radians)
		// console.log(Math.sin(angle));
	}


};
