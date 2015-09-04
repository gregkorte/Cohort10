requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'lodash': '../bower_components/lodash/lodash.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'rating': '../bower_components/raty/lib/jquery.raty'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "lodash", "underscore", "dom-access", "populate", "add", 'filter', 'templates', 'touch-api', 'rating'],
  function($, boot, _fire, Handlebars, lodsh, _, dom, pop, add, filt, hbs, api, rate) {

  pop.getInitMovies();

  $('#content').on('click', '.addBtn', function(){
    api.getMovie($(this));
    //Add section on add page for most recent adds//
  });

  // $('#filter').on('click', 'select', function(){
  //   var $selected = $(this).find('option:selected');
  //   $(this).siblings('select').val('default');

  // if ($('.year').is(':selected')){
  //     filt.year($selected.val(), moviesObj);
  //   } else if ($('.actors').is(':selected')){
  //     filt.actors($selected.val(), moviesObj);
  //   } else if ($('.rating').is(':selected')){
  //     filt.rating($selected.val(), moviesObj);
  //   } else {
  //     return;
  //   }
  // });

  $('#filter').on('click', 'a', function(){
    var selected = $(this).text();
    if ($(this).hasClass('year')) {
      filt.year(selected, moviesObj)
    } else if ($(this).hasClass('actors')) {
      filt.actors(selected, moviesObj);
    } else if ($(this).hasClass('rating')) {
      filt.rating(selected, moviesObj);
    } else {
      return;
    }
  });

  $('#contentWrapper').on('click', '.resetBtn', function(){
    location.reload();
  });

  $('#contentWrapper').on('click', '.deleteBtn', function(){
      $(this).closest('section').remove();
  });

  $('#nav').on('click', '.searchBtn', function(){
    api.getMovieSearch();
  });

  $('#contentWrapper').on('click', '.watchedBtn', function(){
    add.watched($(this));
  });

});