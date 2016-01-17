//Setup overlay

var $overlay = $('<div id="overlay"></div>')
var $image = $('<img>')
var $caption = $('<p id="caption"></p>')

$("body").append($overlay);
$overlay.append($image);
$overlay.append($caption);

$(".gallery a").click(function(event){
  event.preventDefault();
  var imagelocation = $(this).attr("href");
  $image.attr("src", imagelocation).attr("width", "90%");
  var caption = $(this).children("img").attr("alt");
  $caption.text(caption)
  $overlay.show();
});

$("#overlay").click(function(){
  $overlay.hide();
})
