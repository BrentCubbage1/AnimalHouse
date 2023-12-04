
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('dogCanvas');
    const context = canvas.getContext('2d');
    const startMovementButton = document.getElementById('startMovementButton');

    let dogImages = [];

    //on button click, we do this like in cat.js
    startMovementButton.addEventListener('click', function () {

    //Just like cats.js, but we call the DOGS from the DB
    $.ajax({
        type: "GET",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
            url: "/dog/read",
            //if call is successful, we start the following function
            success: function (response) {

            //empty dogImages like we do in cat.js.
                dogImages = [];

            //Do the loop to setup images and speeds for each dog.
            //Put in picture for each dog (currently placeholder cat pic)

            response.forEach(dogData => {
            const dog = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - .5) * 2,
            speedY: (Math.random() - .5) * 2,
            image: new Image(),
            };
            dog.image.src = 'cat.png';
            dogImages.push(dog);
            });

               // requestAnimationFrame is a method in the Window object in JS.
                           // used to schedule the function before the next 'repaint' of the browser window.
                           // Will continuously call the 'draw' function so it will update the images positions.

            requestAnimationFrame(draw);
            },
            //error handling
            error: function (request, status, error) {
                               console.log("Error while fetching cat data");
                               console.log("Request value ↓");
                               console.log(request);
                               console.log("Status value ↓");
                               console.log(status);
                               console.log("Error value ↓");
                               console.log(error);
            }
           });
           });

     function draw() {
              context.clearRect(0, 0, canvas.width, canvas.height);

              dogImages.forEach(dog => {
                  context.drawImage(dog.image, dog.x, dog.y, 50, 50);

                  dog.x += dog.speedX * -1;
                  dog.y += dog.speedY * -1;
   
                  // Bounce off walls
                  if (dog.x < 0 || dog.x + 50 > canvas.width) {
                      dog.speedX *= -1;
                  }

                  if (dog.y < 0 || dog.y + 50 > canvas.height) {
                      dog.speedY *= -1;
                  }
              });

              requestAnimationFrame(draw);
          }
      });