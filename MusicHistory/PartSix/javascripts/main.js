requirejs.config({
	baseUrl: './javascripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
		'firebase': '../bower_components/firebase/firebase',
		'hbs': '../bower_components/require-handlebars-plugin/hbs'
	},
	shim: {
		'bootstrap': ['jquery'],
		'firebase': {
			exports: 'Firebase'
		}
	}
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "dom-access", "populate-songs", "addPage"],
  function($, boot, _fire, Handlebars, dom, pop, add) {

	var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history/");
	var show = dom.getWrapper();

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

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});