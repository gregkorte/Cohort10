requirejs.config({
	baseUrl: './javascripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
		'firebase': '../bower_components/firebase/firebase',
		'hbs': '../bower_components/require-handlebars-plugin/hbs/handlebars'
	},
	shim: {
		'bootstrap': ['jquery']
	}
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "dom-access", "populate-songs", "get-more-songs"],
  function($, boot, fire, hbs, dom, pop, more) {

  var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history");

  var initialSongs = [];
	var output = dom.getInitOutput();
	var counter = 0;

	fb.set({
		"songs": [
        {
            "title": "Astronomy Domine",
            "artist": "Pink Floyd",
            "album": "The Piper at the Gates of Dawn",
            "year": "1967"
        }
      ]
	})

	pop.getInitSongs(function(data){
	}, output);

	$('#content').on('click', '.more', function(){
		counter++;
		if(counter > 1) {
			return;
		} else {
			more.getMoreSongs(function(data){
			}, output);
		}
	});

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});