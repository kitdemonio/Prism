'use strict';

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
  $('a[href^="#"][href!="#"]').click(function () {
    var el = $(this).attr('href');
    $('li>.active').removeClass('active');
    $(this).addClass('active');
    $('body').animate({
      scrollTop: $(el).offset().top
    }, 800);
    return false;
  });

  //Modal popup
  $('#search').on('click', function () {
    var regex = new RegExp(/\d+/);
    var box = $('.search-box');
    var input = $('input[type="search"]');

    $('body').css('position', 'relative');
    input.addClass('modal-search');
    box.fadeIn(500);
    box.css('height',window.innerHeight);
    input.fadeIn(500);
    input.css('top',((window.innerHeight - regex.exec(input.css('height'))[0]) / 2));
    input.css('left',((window.innerWidth - regex.exec(input.css('width'))[0]) / 2));


    box.on('click', function (e) {
      if (e.target.nodeName != "INPUT") {
        box.fadeOut(500);
        input.fadeOut(500);
      }
    });

  });

});
