$(document).ready(function(){
    var moves 

$("#find-dancemoves").on("click"), function(event) {
event.preventDefault();
}  //on-click listener
}); //document ready end

var danceMoves = $("#dance-input").val();
// grab text from user input

var queryURL = "https://api.giphy.com/v1/gifs/trending?" + danceMoves + "api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";
// construct url

// hit the queryURL with $ajax, 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    // then take the response data
    // and display it in the div with an id of movie-view
console.log(response)
})
