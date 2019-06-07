var buttonsPlace = $("#buttonsPlace");
var danceInput = $("#dance-input");
var submitButton = $("#submitButton");
var imgPlace = $("#dance")
var danceArray= [
    "breaking",
    "hula",
    "salsa",
    "zouk",
    "house",
    "burlesque",
    "ballet",
];


function createButtons(){
  buttonsPlace.empty();
  for(var i=0; i< danceArray.length; i++){
    var button =$('<button>');
    button.addClass('btn-dance');
    button.attr('data-name', danceArray[i]);
    button.text(danceArray[i]);
    buttonsPlace.append(button);
  }
}
createButtons();

submitButton.on('click', function(event){
  event.preventDefault();
  var inputValue = danceInput.val()
  if (inputValue.length> 1){
      danceArray.push(inputValue);
      createButtons();
    };
});

$(document.body).on('click', '.btn-dance', function(){

  var danceName = $(this).attr('data-name');
  console.log(danceName);
        var queryURL = "https://api.giphy.com/v1/gifs/trending?" + danceName + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

        $.ajax({url: queryURL, type: 'GET'}).then(function(response){
var img = $('<img>').attr('src', response.data[0].images.fixed_height_still.url);
          imgPlace.append(img);
        });

         //   $.ajax({
      //       url: queryURL,
      //       method: "GET"
      //   }).done(function (response) {

      //     // Creating a div to hold dance
      //     var dance = $("<div class='dance'>");

      //     console.log(response);
      //     // Storing the rating data
      //     giphyData = response.data;

      //   // Retrieving the URL for the image
      //     var imgURL = response.Poster;

      //     // Creating an element to hold the image
      //     var image = $("<img>").attr("src", imgURL);

      //     // Appending the image
      //     dance.append(image);

      //     $(".dance").empty();

      //   //   // Putting the entire movie above the previous movies
      //   //   $(".dance").prepend(dance);
      //   });

})




      // displayMovieInfo function re-renders the HTML to display the appropriate content
      // function displayDance(){
      //   var dance = $(this).attr("id");
      //   var queryURL = "https://api.giphy.com/v1/gifs/trending?" + danceMoves + "api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

      //   // Creating an AJAX call for the specific movie button being clicked
      //   $.ajax({
      //       url: queryURL,
      //       method: "GET"
      //   }).done(function (response) {

      //     // Creating a div to hold dance
      //     var dance = $("<div class='dance'>");

      //     console.log(response);
      //     // Storing the rating data
      //     giphyData = response.data;
        
      //   // Retrieving the URL for the image
      //     var imgURL = response.Poster;

      //     // Creating an element to hold the image
      //     var image = $("<img>").attr("src", imgURL);

      //     // Appending the image
      //     dance.append(image);

      //     $(".dance").empty();

      //   //   // Putting the entire movie above the previous movies
      //   //   $(".dance").prepend(dance);
      //   });

      // Function for displaying movie data
      // function renderButtons() {

      //   // Deleting the movies prior to adding new movies
      //   // (this is necessary otherwise you will have repeat buttons)
      //   $("#buttons-view").empty();

      //   // Looping through the array of movies
      //   for (var i = 0; i < dance.length; i++) {

      //     // Then dynamicaly generating buttons for each movie in the array
      //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      //     var newButton = $("<button>");
      //     // Adding a class of dance-btn to our button
      //     newButton.addClass("dance-btn");
      //     // Adding a data-attribute
      //     newButton.attr("data-name", dance[i]);
      //     // Providing the initial button text
      //     newButton.text(movies[i]);
      //     // Adding the button to the buttons-view div
      //     $("#buttons-view").append(newButton);
      //   }
      // }

      // // This function handles events where a movie button is clicked
      // $("#add-dance").on("click", function(event) {
      //   event.preventDefault();
      //   // This line grabs the input from the textbox
      //   var dance = $("#dance-input").val().trim();

      //   // Adding movie from the textbox to our array
      //   danceMoves.push(dance);

      //   // Calling renderButtons which handles the processing of our dance array
      //   renderButtons();
      // });

      // // Adding a click event listener to all elements with a class of "dance-btn"
      // $(document).on("click", ".dance-btn", displayDance);

      // // Calling the renderButtons function to display the intial buttons
      // renderButtons();