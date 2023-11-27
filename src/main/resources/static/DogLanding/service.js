class Dog {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

function create(event) {
    event.preventDefault();
    // get the values that are in the input fields
    const dogIdElement = document.getElementById("dog-id");
    const nameElement = document.getElementById("name");
    const colorElement = document.getElementById("color");

    const dogIdValue = dogIdElement.value;
    const name = nameElement.value;
    const color = colorElement.value;
    const dog = new Dog(dogIdValue, name, color);

    // call the create function of the spring boot app with the values
    const dogData = JSON.stringify(dog);
    console.log(dogData);

    $.ajax({
        type: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/dog/create",
        data: dogData,
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
    const dogIdElement = document.getElementById("dog-id");
    const dogIdValue = dogIdElement.value;

    $.ajax({
        type: "GET",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/dog/read/" + dogIdValue,
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
        url: "/dog/read",
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

function update(event) {
    event.preventDefault();
    // get the values that are in the input fields
    const dogIdElement = document.getElementById("dog-id");
    const nameElement = document.getElementById("name");
    const colorElement = document.getElementById("color");

    const dogIdValue = dogIdElement.value;
    const name = nameElement.value;
    const color = colorElement.value;
    const dog = new Dog(dogIdValue, name, color);

    // call the create function of the spring boot app with the values
    const dogData = JSON.stringify(dog);
    console.log(dogData);

    $.ajax({
        type: "PUT",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/dog/update/" + dogIdValue,
        data: dogData,
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
    const dogIdElement = document.getElementById("dog-id");
    const dogIdValue = dogIdElement.value;

    $.ajax({
        type: "DELETE",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/dog/delete/" + dogIdValue,
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
