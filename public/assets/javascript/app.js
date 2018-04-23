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

        location.reload();

    });

});

$(".devourButton").on("click", function(event) {

    event.preventDefault();

    var burgerId = $(this).data("id"); 

    $.ajax("/api/burgers/" + burgerId, {
        method: 'PUT',
        data: burgerId
    }).then(function(error) {

        if (error) throw error;
        location.reload();

    });


});



});