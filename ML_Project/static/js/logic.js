$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        predict();
    });
});

// call Flask API endpoint
function predict() {
    var funding_rounds = $("#funding_rounds").val();
    var seed = $("#seed").val();
    var venture = $("#venture").val();

    // create the payload
    var payload = {
        "funding_rounds": funding_rounds,
        "seed": seed,
        "revenue": revenue
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/predict",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

            // if (returnedData["prediction"] == 1) {
            //     $("#output").text("You Survived!");
            // } else {
            //     $("#output").text("You Died!");
            // }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}