
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('catCanvas');
    const context = canvas.getContext('2d');

    const catImages = [];
    const numCats = 10;

    for (let i = 0; i < numCats; i++) {
        const cat = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - 0.5) * 2, 
            speedY: (Math.random() - 0.5) * 2,
            image: new Image(),
        };
        cat.image.src = 'cat.png';
        catImages.push(cat);
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        catImages.forEach(cat => {
            context.drawImage(cat.image, cat.x, cat.y, 50, 50);

            cat.x += cat.speedX;
            cat.y += cat.speedY;

            // Bounce off walls
            if (cat.x < 0 || cat.x + 50 > canvas.width) {
                cat.speedX *= -1;
            }

            if (cat.y < 0 || cat.y + 50 > canvas.height) {
                cat.speedY *= -1;
            }
        });

        requestAnimationFrame(draw);
    }

    draw(); // Start the animation
});
