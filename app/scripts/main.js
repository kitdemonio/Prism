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
  if (navigator.sayswho !== 'IE 11') { // Because in IE 11 anchor scrolling doesn't work
    $('a[href^="#"][href!="#"]').click(addAnchorScroll);
  }


  //Modal popup for all browsers except IE10
  $('#search').on('click', addSearchPopup);
});

var search = document.getElementById('search');
if (search.attachEvent) {
  search.attachEvent('onclick', addSearchPopup); //Search popup for IE10
}

function addSearchPopup() {
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
}

function addAnchorScroll(e) {
  var el = $(this).attr('href');
  $('li>.active').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  $('body').animate({
    scrollTop: $(el).offset().top
  }, 800);
  return false;
}

navigator.sayswho= (function(){ // Browser detection
  var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
    tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();
