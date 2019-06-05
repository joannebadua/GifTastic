$(document).ready(function(){
    var moves 

$("#find-dancemoves").on("click"), function(event) {
event.preventDefault();
}  //on-click listener
}); //document ready end

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

// hit the queryURL with $ajax, 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    // then take the response data
    // and display it in the div with an id of movie-view
console.log(response)
})
