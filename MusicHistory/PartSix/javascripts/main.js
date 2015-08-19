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
  ["jquery", "bootstrap", "firebase", "hbs", "lodash", "underscore", "dom-access", "populate-songs", "addPage", 'filter', 'templates'],
  function($, boot, _fire, Handlebars, lodsh, _, dom, pop, add, filt, hbs) {

  var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history/");
  var songsObj;

	var clearAdd = function(){
		$('#add-title').val('');
		$('#add-artist').val('');
		$('#add-album').val('');
		$('#add-year').val('');
	};

	pop.getInitSongs(function(data){
		fb.child('songs').on('value', function(snapshot) {
		songsObj = snapshot.val();
		hbs.getTemp(songsObj, 'filter');
		hbs.getTemp(songsObj, 'musicMain');
		});
	});

	$('#addBtn').on('click', function(){
		var addSong = {
			'title': $('#add-title').val(),
			'artist': $('#add-artist').val(),
			'album': $('#add-album').val(),
			'year': $('#add-year').val()
		};
		add.newSong(addSong);
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

	//.on('click', function(){
		// console.log($(this).val());
		// $('form').find('select').change(function(){
		// 	$(this).siblings('select').val('');
		// });
	//});

	$('#contentWrapper').on('click', '.resetBtn', function(){
		location.reload();
	});

	$('#contentWrapper').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});