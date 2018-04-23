$(document).ready(function() {

$("#submit").on("click", function(event) {

    event.preventDefault();

    var newBurger = {
        name: $("#burgerName").val().trim()
    };

    $.ajax("/api/burgers", {
        type: 'POST',
        data: newBurger
    }).then(function() {

        console.log("\n >> Added new burger to database");
        location.reload();

    });

});





});