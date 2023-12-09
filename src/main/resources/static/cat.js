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
                        name: catData.name,
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
                        name: dogData.name,
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

          //This part grabs takes the name of the animal and places it on top of the picture.
          context.font = "12px Arial";
          context.fillStyle = "#ffffff";
          context.fillText(animal.name, animal.x, animal.y - 5);

          animal.x += animal.speedX;
          animal.y += animal.speedY;

          // Bounce off walls
          if (animal.x < 0 || animal.x + 50 > canvas.width) {
              animal.speedX *= -1;
          }

          if (animal.y < 0 || animal.y + 50 > canvas.height) {
              animal.speedY *= -1;
          }

          // Check for collisions with other animals
          catImages.forEach(otherAnimal => {
              if (animal !== otherAnimal && checkCollision(animal, otherAnimal)) {
                  // 50/50 chance to remove either animal
                  if (Math.random() < 0.5) {
                      removeAnimal(catImages, animal);
                  } else {
                      removeAnimal(catImages, otherAnimal);
                  }
              }
          });
      });

      requestAnimationFrame(draw);
  }
  });

 //Going to use a checkCollision function to check if two animal pictures run into one another.
    //This will allow the implementation of removing one when they "crash"
    function checkCollision(animal1, animal2) {
        return (
            animal1.x < animal2.x + 50 &&
            animal1.x + 50 > animal2.x &&
            animal1.y < animal2.y + 50 &&
            animal1.y + 50 > animal2.y
        );
    }

    function removeAnimal(catImages, animal) {
        const index = catImages.indexOf(animal);
        if (index !== -1) {
            catImages.splice(index, 1);
        }
    }
