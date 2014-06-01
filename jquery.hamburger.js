/*
 * jquery.hamburger
 *
 * Copyright (c) 2014 Jishnu Mohan
 * Licensed under the MIT license.
 */

/* global jQuery */
(function ($) {
  'use strict';

  var action = $('.hamburger-action'),
    hamburger = $('#hamburger'),
    content = $('#content'),
    overlay = $('<div>').attr({
      id: 'hamburger-overlay',
    }).insertAfter(content),
    nav = $('nav'),

    onClick = function() {
      var contentWidth = content.width(),
        current = nav.css('margin-left'),
        val = '0%',
        layer = 'block',
        opacity = 0.5,
        ham = -10;

      content.css('width', contentWidth);
      if(current === '0px') {
        val = '-70%';
        layer = 'none';
        opacity = 0;
        ham = 0;
      } else {
        overlay.css('display', layer);
      }

      nav.animate({'margin-left': [val]}, {
        duration: 700
      });

      hamburger.animate({'left': [ham]}, {
        duration: 700
      });

      overlay.animate({'opacity': [opacity]}, {
        duration: 700,
        complete: function() {
          overlay.css('display', layer);
        }
      });
    };

  action.click(onClick);
  overlay.click(onClick);
  hamburger.click(onClick);
}(jQuery));
