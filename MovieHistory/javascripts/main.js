requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'lodash': '../bower_components/lodash/lodash.min',
    'underscore': '../bower_components/underscore/underscore-min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "lodash", "underscore", "dom-access", "populate", "add", 'filter', 'templates'],
  function($, boot, _fire, Handlebars, lodsh, _, dom, pop, add, filt, hbs) {

  var fb = new Firebase("https://nsscohort10.firebaseio.com/movie-history/");
  var moviesObj;

  pop.getInitMovies(function(data){
    fb.child('movies').on('value', function(snapshot) {
    moviesObj = snapshot.val();
    hbs.getTemp(moviesObj, 'filter');
    hbs.getTemp(moviesObj, 'movieMain');
    });
  });

  $('#addBtn').on('click', function(){
    var addMovie = {
      'title': $('#add-title').val(),
      'year': $('#add-year').val(),
      'actors': $('#add-actors').val().split(', '),
      'rating': $('#add-rating').val(),
      'viewed': $('#add-viewed').val()
    };
    add.newMovie(addMovie);
    clearAdd();
    //Add section on add page for most recent adds//
  });

  $('#filter').on('click', 'select', function(){
    var $selected = $(this).find('option:selected');
    $(this).siblings('select').val('default');

    if ($('.artist').is(':selected')){
      filt.artist($selected.val(), songsObj);
    } else if ($('.album').is(':selected')){
      filt.album($selected.val(), songsObj);
    } else if ($('.year').is(':selected')){
      filt.year($selected.val(), songsObj);
    } else {
      return;
    }
  });

  $('#contentWrapper').on('click', '.resetBtn', function(){
    location.reload();
  });

  $('#contentWrapper').on('click', '.deletebtn', function(){
      $(this).closest('section').remove();
  });

});