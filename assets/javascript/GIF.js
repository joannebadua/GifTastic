var buttonsPlace = $("#buttonsPlace");
var danceInput = $("#dance-input");
var submitButton = $("#submitButton");
var imgPlace = $("#dance")
var gifCount = 0;
var gifLocation;
var danceArray = [
  "breaking",
  "hula",
  "salsa",
  "zouk",
  "house",
  "burlesque",
  "ballet",
];

// dynamically create buttons
function createButtons() {
  buttonsPlace.empty();
  for (var i = 0; i < danceArray.length; i++) {
    var button = $('<button>');
    button.addClass('btn-dance');
    button.attr('data-name', danceArray[i]);
    button.text(danceArray[i]);
    buttonsPlace.append(button);
  }
}
createButtons();

// when another dance is submitted
submitButton.on('click', function (event) {
  event.preventDefault();
  var inputValue = danceInput.val()
  if (inputValue.length > 1) {
    danceArray.push(inputValue);
    createButtons();
  };
});

// when a dance button is clicked
$(document.body).on('click', '.btn-dance', function(){

  var danceName = $(this).attr('data-name');
  // console.log(danceName);
        var queryURL = "https://api.giphy.com/v1/gifs/trending?" + danceName + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

        $.ajax({url: queryURL, type: 'GET'}).then(function(response){
var results = response.data

var img = $('<img>')
img.attr('src', response.data[0].images.fixed_height_still.url)
imgPlace.append(img)
img.attr('data-state', 'still')
img.attr('data-still', danceArray[i].images.fixed_height_still.url)
img.attr('data-active', danceArray[i].images.fixed_height_url)
img.addClass('btn-dance')

for (i = 0; i < danceArray[i].length; i++){
  // var rating = results[i].rating
  // var r = $('<p>').text('Rating: ' + rating)
var rating = danceArray[i].rating
var r = $('<p>').text('Rating: ' + rating)
// imgPlace.append(r)
      }
      });

        });


//     img.attr('src', response.data[0].images.fixed_height_still.url);
//     img.attr({ 'data-animate': data[0].images.fixed_height.url });
//     img.attr({ 'data-state': "still" });
//     img.attr({ 'data-still': data[0].images.fixed_height_still.url });
//     imgPlace.append(pRating);
    

//     if (data[0].rating !== "g" || "pg" || "pg-13" || "y") {
//       $("#dance").append(imgPlace);
// };

// $(document.body).on("click", function () {


//   var state = $(this).attr('data-state');


//   if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });
// });});




//     var rating = $('<p></p>');
//       rating.text('Rating: ' + danceArray[j].rating);
//       img.attr('id', danceArray[i].id);
//       img.attr('still', 'true');
//       $("#buttonsPlace").append(rating);
//       $("#buttonsPlace").append(picture);
//         });
     
//   function danceGIF () {
//     var gifDance = $(this).attr('id');
//     for (var j=0; j < danceArray.length; i++) {
//       if (danceArray[j].id === gifDance){
//         if($(this).attr("still") == "true"){
//           $(this).append($(this).attr("src", danceArray[k].images.fixed_height_small.url));
//           $(this).attr('still', 'false');
//         }
//         else if ($(this).attr('still') == 'false'){
//           $(this).append($(this).attr('src', danceArray[k].images.fixed_height_still.url));
//           $(this).attr('still', 'true');
//         }
//       }
//   }
// }

//   })