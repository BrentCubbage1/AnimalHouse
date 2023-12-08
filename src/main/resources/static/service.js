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
//            readAll(event);
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
                    alert(JSON.stringify(response));
                    console.log(response);
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
                        readAll(event);
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
                        readAll(event);
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