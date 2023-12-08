document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('catCanvas');
    const context = canvas.getContext('2d');
    const startMovementButton = document.getElementById('startMovementButton');

    let catImages = [];

    startMovementButton.addEventListener('click', function () {
        // Fetch both cats and dogs concurrently
        Promise.all([fetchData("/cat/read"), fetchData("/dog/read")])
            .then(([catResponse, dogResponse]) => {
                // Process cat data
                console.log(catResponse);
                console.log(dogResponse);
                catImages = catResponse.map(catData => {
                    return {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        speedX: (Math.random() - 0.5) * 2,
                        speedY: (Math.random() - 0.5) * 2,
                        image: new Image(),
                    };
                });

                // Process dog data
                const dogImages = dogResponse.map(dogData => {
                console.log(dogData);
                    return {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        speedX: (Math.random() - 0.5) * 2,
                        speedY: (Math.random() - 0.5) * 2,
                        image: new Image(),
                    };
                });

                // Combine cat and dog images
                catImages = catImages.concat(dogImages);
                console.log(catImages);

                // Start animation
                requestAnimationFrame(draw);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    });

    function fetchData(endpoint) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                url: endpoint,
                success: function (response) {
                    resolve(response);
                },
                error: function (request, status, error) {
                    reject(error);
                }
            });
        });
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        catImages.forEach(animal => {

            animal.image.src = 'cat.png';
            context.drawImage(animal.image, animal.x, animal.y, 50, 50);

            animal.x += animal.speedX;
            animal.y += animal.speedY;

            // Bounce off walls
            if (animal.x < 0 || animal.x + 50 > canvas.width) {
                animal.speedX *= -1;
            }

            if (animal.y < 0 || animal.y + 50 > canvas.height) {
                animal.speedY *= -1;
            }
        });

        requestAnimationFrame(draw);
    }
});
