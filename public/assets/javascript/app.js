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

$(".devourButton").on("click", function(event) {

    event.preventDefault();

    var burgerId = $(this).data("id"); 
    console.log("\nDevour button id: ", burgerId);

    $.ajax("/api/burgers/" + burgerId, {
        method: 'PUT',
        data: burgerId
    }).then(function(error) {

        if (error) throw error;
        console.log("\n >> Burger devoured!\n");
        location.reload();

    });


});



});