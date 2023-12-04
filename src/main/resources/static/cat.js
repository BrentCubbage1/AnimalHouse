
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('catCanvas');
    const context = canvas.getContext('2d');
    const startMovementButton = document.getElementById('startMovementButton');

    let catImages = [];


    //On button click, we...
   startMovementButton.addEventListener('click', function () {

      //Similar to the readAll, we GET the cats from the DB using our API call.
           $.ajax({
               type: "GET",
               crossDomain: true,
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': '*'
               },
               url: "/cat/read",
               //On successful call, we start the function
               success: function (response) {

               //Empty our cat Images, so we don't dupilcate cats.
                   catImages = [];

               //Loop, for each cats data we get out of the call, we setup the image and speeds.
               //Then put the picture into our catImages holder.
                   response.forEach(catData => {
                       const cat = {
                           x: Math.random() * canvas.width,
                           y: Math.random() * canvas.height,
                           speedX: (Math.random() - 0.5) * 2,
                           speedY: (Math.random() - 0.5) * 2,
                           image: new Image(),
                       };
                       cat.image.src = 'cat.png';
                       catImages.push(cat);
                   });

               // requestAnimationFrame is a method in the Window object in JS.
               // used to schedule the function before the next 'repaint' of the browser window.
               // Will continuously call the 'draw' function so it will update the images positions.

                   requestAnimationFrame(draw);
               },
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
   });