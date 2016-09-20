'use strict';


$(document).ready(function () {
  // Initialise adaptive nav
  $(function () {
    $('#nav').slicknav();
  });

  $('#owl-carousel').owlCarousel({
    singleItem: true,
    navigationText: false,
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
  $(function addAnchorScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
      $('li>.active').removeClass('active');
      $(this).addClass('active');
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });

  //Modal popup for all browsers except IE10
  $('#search').on('click', addSearchPopup);

});

var search = document.getElementById('search');
var links = $('a[href*="#"]:not([href="#"])');
if (search.attachEvent) {
  search.attachEvent('onclick', addSearchPopup); //Search popup for IE10 because addEventListener doesn't work

}

function addSearchPopup() {
  var regex = new RegExp(/\d+/);
  var box = $('.search-box');
  var input = $('input[type="search"]');


  $('body').css('position', 'relative');
  input.addClass('modal-search');
  box.fadeIn(500);
  box.css('height', window.innerHeight);
  input.fadeIn(500);
  input.css('top', ((window.innerHeight - regex.exec(input.css('height'))[0]) / 2));
  input.css('left', ((window.innerWidth - regex.exec(input.css('width'))[0]) / 2));


  box.on('click', function (e) {
    if (e.target.nodeName != "INPUT") {
      box.fadeOut(500);
      input.fadeOut(500);
    }
  });
}

