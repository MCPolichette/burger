// Make sure we wait to attach our handlers until the DOM is fully loaded.

// Read through this again,
$(function () {

    $(".devour-burger").on("click", function (event) {
        var id = $(this).attr("data-id");
        var devouoredBurger = $(this).data(true);

        $.ajax({
            method: "PUT",
            url: `/api/burgers/${id}`,
            data: {
                devoured: 1
            }

        }).then(function (res) {
            console.log(res, "yo this is the response");
            // Reload the page to get the updated list
            location.reload();
        })
    });

    $(".addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            });
    });


    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
}); 