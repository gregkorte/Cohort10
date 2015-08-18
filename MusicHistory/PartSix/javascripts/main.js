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
  ["jquery", "bootstrap", "firebase", "hbs", "lodash", "underscore", "dom-access", "populate-songs", "addPage", 'filter'],
  function($, boot, _fire, Handlebars, lodsh, _, dom, pop, add, filt) {

	var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history/");
	var show = dom.getWrapper();
	var filter = dom.getFilter();

	var getHbsObj = function(obj, temp){
		require(['hbs!../templates/' + temp], function(template){
			obj = {song: obj};
			var songList = template(obj);
			show.html(songList);
		});
	};

	var clearAdd = function(){
		$('#add-title').val('');
		$('#add-artist').val('');
		$('#add-album').val('');
		$('#add-year').val('');
	};

	pop.getInitSongs(function(data){
		fb.child('songs').on('value', function(snapshot) {
		songsObj = snapshot.val();
		getHbsObj(songsObj, 'musicMain');
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

	$('#contentWrapper').on('click', 'select', function(){
		var selected = $(this).find('option:selected').text();
		$(this).siblings('select').val('default');
		console.log(selected);
	});

	//.on('click', function(){
		// console.log($(this).val());
		// $('form').find('select').change(function(){
		// 	$(this).siblings('select').val('');
		// });
	//});

	$('#contentWrapper').on('click', '.filterBtn', function(){
		console.log('filter fired');
		filt.getFilter();
	});

	$('#contentWrapper').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});