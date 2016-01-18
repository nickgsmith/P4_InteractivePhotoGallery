//GlOBAL VAIRABLES
  var $overlay = $('<div id="overlay"></div>')
  var $imageHolder = $('<div id="imageHolder"></div>')
  var $selectedImage = $('<img>')
  var $caption = $('<p id="caption"></p>')
  var $clickToClose = $('<p id="clickToClose"></p>')
  var $nextButton = $('<button id="nextButton"></button>')
  var $prevButton = $('<button id="prevButton"></button>')

//START - Overlay Section
  $("body").append($overlay);
  $overlay.append($prevButton);
  $overlay.append($nextButton);
  $overlay.append($selectedImage);
  $overlay.append($caption);
  $overlay.append($clickToClose);

  $(".gallery a").click(function(event){
    event.preventDefault();
    var imagelocation = $(this).attr("href");
    $selectedImage.attr("src", imagelocation).attr("width", "90%");
    var caption = $(this).children("img").attr("alt");
    $caption.text(caption)
    $clickToClose.text('Return to Gallery')
    $prevButton.text('PREV')
    $nextButton.text('NEXT')
    $overlay.show();
  });

  $("#clickToClose").click(function(){
    $overlay.hide();
  })
//END - Overlay Section

//START - Search Section
  $('#searchBox').keyup(function(){
     var $searchValue = $(this).val().toLowerCase();

     $('#galleryUl li').each(function(){
        // Get caption alt text
        var $caption = $(this).children("a").children("img").attr("alt");
          console.log($searchValue + $caption); //remove later
        if($caption.indexOf($searchValue) !=-1) {
          $(this).css("display", "inline-block");
        } else {
          $(this).remove();
        }
      });
  });
//END - Search Section

//START - Nav Buttons
  $("#nextButton").click(function(){
    var imageLocation = $("#overlay img").attr("src");
    $('#galleryUl a[href="'+imageLocation+'"]').parent().attr("id", "currentListItem");
    var nextImageLocation = $('#galleryUl li[id="currentListItem"]').next().children("a").attr("href");
    var nextImageCaption = $('#galleryUl li[id="currentListItem"]').next().find("img").attr("alt");
    $('#galleryUl a[href="'+imageLocation+'"]').parent().removeAttr("id");
    $selectedImage.attr("src", nextImageLocation).attr("width", "90%");
    $caption.text(nextImageCaption);
    $overlay.append($selectedImage);
    $overlay.append($caption);
  })

  $("#prevButton").click(function(){
    var imageLocation = $("#overlay img").attr("src");
    $('#galleryUl a[href="'+imageLocation+'"]').parent().attr("id", "currentListItem");
    var nextImageLocation = $('#galleryUl li[id="currentListItem"]').prev().children("a").attr("href");
    var nextImageCaption = $('#galleryUl li[id="currentListItem"]').prev().find("img").attr("alt");
    $('#galleryUl a[href="'+imageLocation+'"]').parent().removeAttr("id");
    $selectedImage.attr("src", nextImageLocation).attr("width", "90%");
    $caption.text(nextImageCaption);
    $overlay.append($selectedImage);
    $overlay.append($caption);
  })
//END - Nav Buttons
