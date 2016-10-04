$(document).ready(function(){
  $("#subButton").click(function(){
    $(".gifList").empty();
    var text = $("#inputText").val();
    var plustext = text.replace(/[" "]/g, "+");

  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search?q="+plustext+"&api_key=dc6zaTOxFJmzC"
  }).done(function(response){
    console.log(response.data);
    for(var i = 0;i<response.data.length; i++){
    $(".gifList").append("<img src='"+response.data[i].images.original.url+"'/>");
    }
      });
  });
});
