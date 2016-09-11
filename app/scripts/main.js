'use strict';
// var $ = require('jQuery');

$(document).ready(function () {
  // Initialise adaptive nav
  $(function () {
    $('#nav').slicknav();
  });

  $('#owl-carousel').owlCarousel({
    singleItem: true,

    // navigation: true,
    navigationText: false,
    // responsive: true,
    pagination: true
  });


  // Limit words in article paragraph
  $('p[data-words-limit]').map(function (i, el) {
    var limit = +el.dataset.wordsLimit;
    var array = el.innerText.split(' ');
    array.length = limit;
    array.push('...');
    el.innerText = array.join(' ');
  });

  // Anchor scroll
  $('a[href^="#"]').click(function () {
    var el = $(this).attr('href');
    $('li>.active').removeClass('active');
    $(this).addClass('active');
    $('body').animate({
      scrollTop: $(el).offset().top
    }, 800);
    return false;
  });

});
