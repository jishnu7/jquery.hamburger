/*
 * jquery.hamburger
 * 
 *
 * Copyright (c) 2014 Jishnu Mohan
 * Licensed under the MIT license.
 */

(function ($) {
  var onClick = function() {
    var contentWidth = $('#content').width();
    $('#content').css('width', contentWidth);
    $('#container').bind('touchmove', function(e){e.preventDefault();});

    var current = $("nav").css("margin-left"),
      val = "0%",
      layer = "block",
      opacity = 0.5,
      ham = -10;

    if(current === "0px") {
      val = "-70%";
      layer = "none";
      opacity = 0;
      ham = 0;
    } else {
      $('#contentLayer').css('display', layer);
    }

    $("nav").animate({"margin-left": [val]}, {
        duration: 700
    });

    $('#hamburger').animate({"left": [ham]}, {
        duration: 700
    });

    $("#contentLayer").animate({"opacity": [opacity]}, {
        duration: 700,
        complete: function() {
          $('#contentLayer').css('display', layer);
        }
    });
  };

  $("#hamburger").click(onClick);
  $(".title").click(onClick);

  //close the menu
  $("#contentLayer").click(function() {
      $('#container').unbind('touchmove');
      $("nav").animate({"margin-left": ["-70%"]}, {
          duration: 700
      });
      $("#contentLayer").animate({"opacity": [0]}, {
          duration: 700,
          complete: function() {
            $('#contentLayer').css('display', 'none');
          }
      });
      $('#hamburger').animate({"left": [0]}, {
          duration: 700
      });
  });

}(jQuery));
