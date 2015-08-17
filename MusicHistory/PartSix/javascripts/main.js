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
	var show = dom.getInitOutput();
	var addSong = add.songToFb();

	var getHbsObj = function(obj, temp){
		require(['hbs!../templates/' + temp], function(template){
			obj = {song: obj};
			var songList = template(obj);
			show.html(songList);
		});
	};

	var getHbsNoObj = function(temp){
		require(['hbs!../templates/' + temp], function(template){
			var addForm = template();
			console.log(addForm);
			addSong.html(addForm);
		});
	};

	pop.getInitSongs(function(data){
		fb.child('songs').on('value', function(snapshot) {
		songsObj = snapshot.val();
		getHbsObj(songsObj, 'musicMain');
		});
	});

	$('#nav').on('click', '#link_add', function(){
		getHbsNoObj('addSong');
	});

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});