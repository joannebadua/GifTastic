$(document).ready(function () {
    var danceArray=[
        "breaking",
        "hula",
        "salsa",
        "zouk",
        "house",
        "burlesque",
        "ballet",
    ];
$(".gif").on("click", function(){
var state = $(this).attr("data-state");
if (state === "still"){
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("src", $(this).attr("data-animate"));
}else{
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}
});

// Show Dancing GIFs
function displayDance (){


}

// on-click listener to add new buttons when user adds another dance
    $(".add-dance").on("click", function (event) {
        event.preventDefault();
            var dance = $("#dance-input").val().trim();
            danceArray.push(dance);
            renderButtons();
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