var buttonsPlace = $("#buttonsPlace");
var danceInput = $("#dance-input");
var submitButton = $("#submitButton");
var imgPlace = $("#dance")
var gifCount = 0;
var gifLocation;
var topics = [
 "bboy",
 "hula",
 "salsa",
 "zouk",
 "house dance",
 "burlesque",
 "ballet",
 "foxtrot",
 "jazz dance",
"waltz"
];

function createButtons(){
 buttonsPlace.empty();
 for(var i=0; i< topics.length; i++){
   var button =$('<button>');
   button.addClass('btn-dance');
   button.attr('data-name', topics[i]);
   button.text(topics[i]);
   buttonsPlace.append(button);
 }
}
createButtons();

submitButton.on('click', function(event){
 event.preventDefault();
 var inputValue = danceInput.val()
 if (inputValue.length> 1){
     topics.push(inputValue);
     createButtons();
   };
});

$(document.body).on('click', '.btn-dance', function(){
  imgPlace.empty();

 var danceName = $(this).attr('data-name');
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + danceName + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&limit=10";

       $.ajax({url: queryURL, type: 'GET'}).then(function(response){
         var images = response.data;
         console.log(response);
         for(var i=0; i< images.length; i++){
          var img = $('<img>');
          img.attr('src', images[i].images.fixed_height_still.url);
           var imgStill = images[i].images.fixed_height_still.url;
           var imgAnimate = images[i].images.fixed_height.url;
           img.attr('data-still', imgStill);
           img.attr('data-animate', imgAnimate);
           img.attr('data-state', 'still');
           img.addClass('img-dance');
           imgPlace.append(img);
         }
// var img = $('<img>').attr('src', response.data[0].images.fixed_height_still.url);
         
       })
});


$(document.body).on('click', '.img-dance', function(){
  var state = $(this).attr('data-state');
  if(state === 'still'){
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  }else{
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }
})
