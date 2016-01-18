//GlOBAL VAIRABLES
  var $overlay = $('<div id="overlay"></div>')
  var $imageHolder = $('<div id="imageHolder"></div>')
  var $selectedImage = $('<img>')
  var $caption = $('<p id="caption"></p>')
  var $clickToClose = $('<p id="clickToClose"></p>')
  var $nextButton = $('<button id="nextButton"></button>')
  var $prevButton = $('<button id="prevButton"></button>')
  var $downloadLink = $('<a id="originalImage"></a>')

//START - Overlay Section
  $("body").append($overlay);
  $overlay.append($prevButton);
  $overlay.append($nextButton);
  $overlay.append($selectedImage);
  $overlay.append($caption);
  $overlay.append($downloadLink);
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
    $downloadLink.text('DOWNLOAD ORIGINAL IMAGE')
    $overlay.show();
  });

  $("#clickToClose").click(function(){
    $overlay.hide();
  })
//END - Overlay Section

//START - Search Section
  $('#searchBox').keyup(function(){
     var searchValue = $(this).val().toLowerCase();
     $('#galleryUl li').each(function(){
        // Get caption alt text
        var $caption = $(this).children("a").children("img").attr("alt");
          $(this).removeAttr("class");
        if($caption.indexOf(searchValue) !=-1) {
          $(this).css("display", "inline-block");
          $(this).attr("class", "inResult");
        } else {
          $(this).attr("class", "notInResult");
          $(this).css("display", "none");
          }
      });

      // re-set margins in search results
      $('#galleryUl li').css("margin-left", "30px").css("margin-right", "30px");
      //right items
      var $list = $('#galleryUl li[class="inResult"]')[3]; $($list).css("margin-left", "30px").css("margin-right", "0");
      $list = $('#galleryUl li[class="inResult"]')[7]; $($list).css("margin-left", "30px").css("margin-right", "0");
      $list = $('#galleryUl li[class="inResult"]')[11]; $($list).css("margin-left", "30px").css("margin-right", "0");
      //left items
      $list = $('#galleryUl li[class="inResult"]')[0]; $($list).css("margin-left", "0").css("margin-right", "30px");
      $list = $('#galleryUl li[class="inResult"]')[4]; $($list).css("margin-left", "0").css("margin-right", "30px");
      $list = $('#galleryUl li[class="inResult"]')[8]; $($list).css("margin-left", "0").css("margin-right", "30px");
      $list = $('#galleryUl li[class="inResult"]')[12]; $($list).css("margin-left", "0").css("margin-right", "30px");
});
//END - Search Section

////// START - Navigation //////

function prev_func() {
  var imageLocation = $("#overlay img").attr("src");
  $('#galleryUl a[href="'+imageLocation+'"]').parent().attr("id", "currentListItem");
  var nextImageLocation = $('#galleryUl li[id="currentListItem"]').prev().children("a").attr("href");
  var nextImageCaption = $('#galleryUl li[id="currentListItem"]').prev().find("img").attr("alt");
  $('#galleryUl a[href="'+imageLocation+'"]').parent().removeAttr("id");
  $selectedImage.attr("src", nextImageLocation).attr("width", "90%");
  $caption.text(nextImageCaption);
  $overlay.append($selectedImage);
  $overlay.append($caption);
  $overlay.append($downloadLink);
}

function next_func() {
  var imageLocation = $("#overlay img").attr("src");
  $('#galleryUl a[href="'+imageLocation+'"]').parent().attr("id", "currentListItem");
  var nextImageLocation = $('#galleryUl li[id="currentListItem"]').next().children("a").attr("href");
  var nextImageCaption = $('#galleryUl li[id="currentListItem"]').next().find("img").attr("alt");
  $('#galleryUl a[href="'+imageLocation+'"]').parent().removeAttr("id");
  $selectedImage.attr("src", nextImageLocation).attr("width", "90%");
  $caption.text(nextImageCaption);
  $overlay.append($selectedImage);
  $overlay.append($caption);
  $overlay.append($downloadLink);
}

function download_original() {
  var imageLocation = $("#overlay img").attr("src");
  var originalFile = imageLocation.replace("img/", "img/originals/").replace(".jpg", "-original.jpg");
  var filename = originalFile.replace("img/originals/", "");
  $downloadLink.attr("download", filename).attr("href", originalFile);
  console.log(originalFile);
}

$("#originalImage").click(download_original)
$("#nextButton").click(next_func);
$("#prevButton").click(prev_func);

  $(document).keydown(function(e){
      if (e.keyCode == 37)
        prev_func();
  });

  $(document).keydown(function(e){
      if (e.keyCode == 39)
        next_func();
  });

//END - Nav Buttons
