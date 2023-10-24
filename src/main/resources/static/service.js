class Cat{
    constructor(id, name, color){
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

function create(event) {
    event.preventDefault();
    // get the values that are in the input fields
    const catIdElement = document.getElementById("cat-id");
    const nameElement = document.getElementById("name");
    const colorElement = document.getElementById("color");

    const catIdValue = catIdElement.value;
    const name = nameElement.value;
    const color = colorElement.value;
    const cat = new Cat(catIdValue, name, color);

    // call the create function of the spring boot app with the values
    const catData = JSON.stringify(cat);
    console.log(catData);

    $.ajax({
        type: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/cat/create",
        data: catData,
        dataType: "JSON",
        success: function (response) {
            alert(JSON.stringify(response));
        },
        error: function (request, status, error) {
            console.log("Error while digesting request")
            console.log("Request value ↓")
            console.log(request)
            console.log("Status value ↓")
            console.log(status);
            console.log("Error value ↓")
            console.log(error);
        }
    });
}

function read(event) {
    event.preventDefault();
    // get the values that are in the input fields
    const catIdElement = document.getElementById("cat-id");
    const catIdValue = catIdElement.value;

    $.ajax({
        type: "GET",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/cat/read/" + catIdValue,
        success: function (response) {
            alert(JSON.stringify(response));
        },
        error: function (request, status, error) {
            console.log("Error while digesting request")
            console.log("Request value ↓")
            console.log(request)
            console.log("Status value ↓")
            console.log(status);
            console.log("Error value ↓")
            console.log(error);
        }
    });
}

function readAll(event) {
    event.preventDefault();
    $.ajax({
        type: "GET",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/cat/read",
        success: function (response) {
        //Grab the "cats" div I made in index.html
            const container = document.querySelector('.cats');
            container.innerHTML = ''; // This should clear whatever is currently inside of the container.

            response.forEach(item => { // function that we run for each item. (is it a lambda in js?)
            const p = document.createElement('p'); //create an element.
            p.textContent = "Cat - " + item.name + " (" + item.color + ")"; // Fill it with cat name and color for now, eventually make it a picture of a cat.

            container.appendChild(p); // append (add it) to the container.

            const brk = document.createElement('br');//this makes a line break, then we append the line break to the container as well for a new line.
            container.appendChild(brk);
            //after this runs, should replace the default "Cats" with a list of all the cats in the DB.


            });
        },

        error: function (request, status, error) {
            console.log("Error while digesting request")
            console.log("Request value ↓")
            console.log(request)
            console.log("Status value ↓")
            console.log(status);
            console.log("Error value ↓")
            console.log(error);
        }
    });
}


function update(event) {
      event.preventDefault();
        // get the values that are in the input fields
        const catIdElement = document.getElementById("cat-id");
        const nameElement = document.getElementById("name");
        const colorElement = document.getElementById("color");

        const catIdValue = catIdElement.value;
        const name = nameElement.value;
        const color = colorElement.value;
        const cat = new Cat(catIdValue, name, color);

        // call the create function of the spring boot app with the values
        const catData = JSON.stringify(cat);
        console.log(catData);

    $.ajax({
        type: "PUT",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/cat/update/" + catIdValue,
        data: catData,
        dataType: "JSON",
        success: function (response) {
            alert(JSON.stringify(response));
        },
        error: function (request, status, error) {
            console.log("Error while digesting request")
            console.log("Request value ↓")
            console.log(request)
            console.log("Status value ↓")
            console.log(status);
            console.log("Error value ↓")
            console.log(error);
        }
    });
}

function deleteById(event) {
    event.preventDefault();
       // get the values that are in the input fields
       const catIdElement = document.getElementById("cat-id");
       const catIdValue = catIdElement.value;

    $.ajax({
        type: "DELETE",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/cat/delete/" + catIdValue,
        success: function (response) {
            alert(JSON.stringify(response));
        },
        error: function (request, status, error) {
            console.log("Error while digesting request")
            console.log("Request value ↓")
            console.log(request)
            console.log("Status value ↓")
            console.log(status);
            console.log("Error value ↓")
            console.log(error);
        }
    });
}