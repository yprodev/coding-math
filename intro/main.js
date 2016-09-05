window.onload = function() {
    var canvas = document.getElementById('canvas'),          // getting DOM element
    context = canvas.getContext('2d'),                       // choosing the context
    width = canvas.width = window.innerWidth,                // Choosing the div block width as the window inner width
    height = canvas.height = window.innerHeight;             // Choosing the div block width as the window inner width

    // context.fillRect(0, 0, width, height);
    
    for (var i = 0; i < 100; i++) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
    }




};
