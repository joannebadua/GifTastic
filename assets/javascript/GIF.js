$(document).ready(function () {
    var list = JSON.parse(localStorage.getItem("queryList"));

    if(!Array.isArray(list)){
        list=[];
    };

//on-click listener to add new buttons
    $(document).on("click", "#submit-button", function () {
        event.preventDefault();
        if ($("#new-button-input".val()){
            var userInput =$("#new-button-input").val();

        }
    });

var danceMoves = $("#dance-input").val();
// grab text from user input

// display what the user types in
var queryURL = "https://api.giphy.com/v1/gifs/trending?" + danceMoves + "api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";
// construct url

// hit the queryURL with $ajax, 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // then take the response data
    // and display it in the div with an id of movie-view
$(".dance-image").empty();

    // saving the image_original_url property 
    var imageURL = response.data.image_original_url;
    var danceImage = $("<img>");
danceImage.attr("src", imageUrl);
danceImage.attr("alt", "dance image");
$("#gifs-appear-here").prepend(danceImage)

});